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

  const deleteItem = (id: any) => {
    fetch(`https://simple-blog-api.crew.red/posts/${id}`, {
      method: 'DELETE',
      headers: {'content-type': 'application/json'},
    });
  };

  const postLinks = !posts.length
    ? 'Loading Blog Posts...'
    : posts.map((post: any) => (
        <div key={post.id} className="post-item">
          <Link
            to={`/posts/${post.id}`}
            className="post-link"
            onClick={() => dispatch(selectPost(post.id))}
          >
            {post.title}
          </Link>
          <span onClick={() => deleteItem(post.id)}>DELETE</span>
        </div>
      ));

  return (
    <div>
      <h1>Post List</h1>
      {postLinks}
    </div>
  );
};

export default PostsList;
