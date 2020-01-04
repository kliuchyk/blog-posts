import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header className="app-header">
      <nav className="app-nav inner">
        <span className="app-name">Blog Posts</span>
        <ul>
          <li className="app-nav-link">Latest Posts</li>
          <li className="app-nav-link">Create new Post</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
