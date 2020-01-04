import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {fetchPosts} from '../actions';
import rootReducer from '../reducers';

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

store.dispatch(fetchPosts()).then(() => console.log(store.getState()));
