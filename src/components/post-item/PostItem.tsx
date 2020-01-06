import React from 'react';
import {useSelector} from 'react-redux';
import './PostItem.css';

export const PostItem = (props: any) => {
  const selectedPost = useSelector((state: any) => state.posts.selectedPost);

  const postDetails = selectedPost ? (
    <div className="post">
      <h3 className="post-title">{selectedPost.title}</h3>
      <p className="post-body">{selectedPost.body}</p>
      <button onClick={() => props.history.goBack()}>Go back</button>
    </div>
  ) : (
    'Loading...'
  );

  return <div>{postDetails}</div>;
};

export default PostItem;
