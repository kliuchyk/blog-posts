import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header className="app-header">
      <nav className="app-nav inner">
        <span className="app-name">Blog Posts</span>
        <ul>
          <NavLink to="/" className="app-nav-link">
            Latest Posts
          </NavLink>

          <NavLink to="/new" className="app-nav-link">
            Create new Post
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
