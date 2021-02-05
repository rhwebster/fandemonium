import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import stadiumReducer from './stadium';
import sessionReducer from './session';
import photoReducer from './photos';
import gameReducer from './games';
import badgeReducer from './badges';
import thunk from 'redux-thunk';
import eventReducer from './events';

const rootReducer = combineReducers({
    session: sessionReducer,
    stadium: stadiumReducer,
    photos: photoReducer,
    games: gameReducer,
    events: eventReducer,
    badges: badgeReducer,
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;