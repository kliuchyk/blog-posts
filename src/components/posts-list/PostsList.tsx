import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPosts, selectPost} from '../../actions';
import {Link} from 'react-router-dom';
import './PostsList.css';

export const PostsList = () => {
  const posts = useSelector((state: any) => state.posts.items);
  const isLoading = useSelector((state: any) => state.posts.isFetching);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const postLinks = isLoading
    ? 'Loading Blog Posts...'
    : posts.map((post: any) => (
        <Link
          to={`/posts/${post.id}`}
          key={post.id}
          className="post-link"
          onClick={() => dispatch(selectPost(post.id))}
        >
          {post.title}
        </Link>
      ));

  return (
    <div>
      <h1>Post List</h1>
      {postLinks}
    </div>
  );
};

export default PostsList;
