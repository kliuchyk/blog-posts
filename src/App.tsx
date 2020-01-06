import React from 'react';
import Header from './components/header/Header';
import PostsList from './components/posts-list/PostsList';
import PostItem from './components/post-item/PostItem';
import {Route, Switch} from 'react-router-dom';

import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="app-main inner">
        <Switch>
          <Route path="/" exact component={PostsList} />
          <Route path="/posts/:id" component={PostItem} />
        </Switch>
        <Switch />
      </main>
    </div>
  );
};

export default App;
