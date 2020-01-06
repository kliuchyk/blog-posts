import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {sendPost} from '../../actions';
import './NewPostForm.css';

export const NewPostForm = () => {
  const [title, setNewTitle] = useState('');
  const [body, setNewBody] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
    };

    dispatch(sendPost(newPost));
    setNewTitle('');
    setNewBody('');
  };

  return (
    <div className="form-container">
      <h1>Write a new Blog Post</h1>
      <form onSubmit={handleSubmit} className="post-form">
        <input
          className="title-input"
          type="text"
          placeholder="Post title..."
          value={title}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <textarea
          className="body-text"
          placeholder="Post text..."
          value={body}
          onChange={(e) => setNewBody(e.target.value)}
        ></textarea>
        <button className="form-btn">SEND</button>
      </form>
    </div>
  );
};

export default NewPostForm;
