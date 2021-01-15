import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {TodoReducer} from './todo/reducer';

const store = createStore(
    combineReducers({
        TodoReducer
    }),
    applyMiddleware(thunkMiddleware)
);

export default store;