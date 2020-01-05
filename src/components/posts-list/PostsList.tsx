import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PostItem from '../post-item/PostItem';
import {fetchPosts} from '../../actions';
import './PostsList.css';

export const PostsList = () => {
  const posts = useSelector((state: any) => state.posts.items);
  const isLoading = useSelector((state: any) => state.posts.isFetching);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderedList = isLoading
    ? 'Loading from server...'
    : posts.map((post: any) => <PostItem key={post.id} />);

  return (
    <div>
      <h1>Post List</h1>
      {renderedList}
    </div>
  );
};

export default PostsList;
