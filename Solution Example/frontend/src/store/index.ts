import { createStore, applyMiddleware, AnyAction } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { storyReducer, StoryStore } from './reducer';

export const store = createStore(storyReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof storyReducer>;

export type AppDispatch = ThunkDispatch<StoryStore, unknown, AnyAction>;
