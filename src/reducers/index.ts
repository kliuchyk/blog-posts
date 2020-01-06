import {combineReducers} from 'redux';
import {REQUEST_POSTS, SELECT_POST, RECEIVE_POSTS, CREATE_POST} from '../actions';
import Post from '../interfaces/Post';

const initialState = {
  isFetching: false,
  items: [],
  selectedPost: null,
};

function posts(state = initialState, action: any) {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        // selectedPost: null,
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        items: action.posts,
      };
    case SELECT_POST:
      return {
        ...state,
        selectedPost: state.items.find((post: Post) => post.id === action.id),
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
