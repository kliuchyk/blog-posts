export const REQUEST_POSTS = 'REQUEST_POSTS';
export const SELECT_POST = 'SELECT_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const CREATE_POST = 'CREATE_POST';

export function requestPosts() {
  return {
    type: REQUEST_POSTS,
  };
}

export function selectPost(id: any) {
  return {
    type: SELECT_POST,
    id,
  };
}

export function receivePosts(posts: any) {
  return {
    type: RECEIVE_POSTS,
    posts,
  };
}

export function createPost(post: any) {
  return {
    type: CREATE_POST,
    post,
  };
}

export function fetchPosts() {
  return function(dispatch: any) {
    dispatch(requestPosts());

    return fetch('https://simple-blog-api.crew.red/posts')
      .then(
        (res) => res.json(),
        (error) => console.log('An error occurred while "REQUEST POSTS" process.', error)
      )
      .then((json) => dispatch(receivePosts(json)));
  };
}
