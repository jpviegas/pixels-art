import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <a href="https://www.linkedin.com/in/joao-paulo-viegas/" target="_blank">
        <li>LinkedIn</li>
      </a>
      <a href="https://github.com/jpviegas" target="_blank">
        <li>GitHub</li>
      </a>
    </ul>
  </header>
);

export default Header;
