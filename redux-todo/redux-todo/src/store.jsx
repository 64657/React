import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import TodoReducer from './reducers/TodoReducers';

const reducer = combineReducers({
    // this contains all reducers
    Todo: TodoReducer
});

const initialState = {};

const middleware = [thunk];

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
    preloadedState: initialState,
    
})

export default store;