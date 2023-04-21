import { CommentDisplayed, Story } from '../types';
import { AnyAction } from 'redux';
import { StoryActionType } from './types';
import { updateTreeData } from '../utils/updateTreeData';

export type StoryStore = {
    stories: Story[]
    currentStory?: Story
    rootComments?: CommentDisplayed[]
    loading: boolean
    error: boolean
    commentsLoading: boolean
}

const initialState: StoryStore = {
    stories: [],
    currentStory: undefined,
    rootComments: undefined,
    loading: false,
    error: false,
    commentsLoading: false,
};

export const storyReducer = (state = initialState, action: AnyAction): StoryStore => {
    switch (action.type) {
        case StoryActionType.LOADING:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case StoryActionType.GET_STORIES:
            return {
                ...state,
                stories: action.payload,
                loading: false,
                error: false,
            };
        case StoryActionType.GET_STORY:
            return {
                ...state,
                currentStory: action.payload.story,
                rootComments: action.payload.comments,
                loading: false,
                commentsLoading: false,
                error: false,
            };
        case StoryActionType.GET_COMMENT: {
        const clickedId = action.payload.clickedId;
        const rootComments = state.rootComments ?? [];
        const childrenComments = action.payload.comments;
        const updatedData = updateTreeData(rootComments, clickedId, childrenComments);

            return {
                ...state,
                rootComments: updatedData,
                loading: false,
                error: false,
            };
        }
        case StoryActionType.UPDATE_COMMENTS: {
            return {
                ...state,
                rootComments: action.payload,
                commentsLoading: false,
                error: false,
            };
        }
        case StoryActionType.COMMENTS_LOADING: {
            return {
                ...state,
                commentsLoading: true,
            };
        }
        case StoryActionType.ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return { ...state };
    }
};
