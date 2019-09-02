import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { defaultStore, rootReducer } from './reducer';

export const store = createStore(
    rootReducer,
    defaultStore,
    composeWithDevTools(
        applyMiddleware(),
    )
);
