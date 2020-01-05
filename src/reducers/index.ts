import {combineReducers} from 'redux';
import {REQUEST_POSTS, SELECT_POST, RECEIVE_POSTS, CREATE_POST} from '../actions';

const initialState = {
  isFetching: false,
  items: [],
};

function posts(state = initialState, action: any) {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        items: action.posts,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
