import { Dispatch } from 'redux';
import axios from 'axios';
import { StoryActionType } from './types';

export enum API_ROUTES {
    STORIES = '/api/stories',
    STORY = '/api/story',
};

export const getStories = () => {
    return (dispatch: Dispatch) => {
        dispatch({ type: StoryActionType.LOADING });

        axios
            .get(`${process.env.REACT_APP_BASE_URL}${API_ROUTES.STORIES}`)
            .then((response) => {
                dispatch({ type: StoryActionType.GET_STORIES, payload: response.data.data });
            })
            .catch((error) => {
                dispatch({ type: StoryActionType.ERROR });
                console.log(error);
            });
    };
};

export const getStory = (storyId: string) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: StoryActionType.LOADING });
        dispatch({ type: StoryActionType.COMMENTS_LOADING });

        axios
            .get(`${process.env.REACT_APP_BASE_URL}${API_ROUTES.STORY}/${storyId}`)
            .then((response) => {
                dispatch({ type: StoryActionType.GET_STORY, payload: response.data.data });
            })
            .catch((error) => {
                dispatch({ type: StoryActionType.ERROR });
                console.log(error);
            });
    };
};

export const updateComments = (storyId: string) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: StoryActionType.COMMENTS_LOADING });

        axios
            .get(`${process.env.REACT_APP_BASE_URL}${API_ROUTES.STORY}/${storyId}`)
            .then((response) => {
                dispatch({ type: StoryActionType.UPDATE_COMMENTS, payload: response.data.data.comments });
            })
            .catch((error) => {
                dispatch({ type: StoryActionType.ERROR });
                console.log(error);
            });
    };
};

export const getComment = (clickedId: string) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: StoryActionType.LOADING });

        axios
            .get(`${process.env.REACT_APP_BASE_URL}${API_ROUTES.STORY}/${clickedId}`)
            .then((response) => {
                dispatch({
                    type: StoryActionType.GET_COMMENT,
                    payload: { clickedId, ...response.data.data },
                });
            })
            .catch((error) => {
                dispatch({ type: StoryActionType.ERROR });
                console.log(error);
            });
    };
};
