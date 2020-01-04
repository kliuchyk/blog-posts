import React from 'react';
import Header from './components/header/Header';
import PostsList from './components/posts-list/PostsList';

import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <PostsList />
      <div>Blog App</div>
    </div>
  );
};

export default App;
