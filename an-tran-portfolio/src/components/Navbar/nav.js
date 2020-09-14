import React from 'react';
import './nav.css';
// import dataProjects from './projects.json';

// Get data of Navigation
// const getDataProjects = dataProjects.projectsBack;

const Navbar = () => {
  return (
    <nav role="navigation">
    <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <a href="#"><li>Home</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Info</li></a>
      <a href="#"><li>Contact</li></a>
      <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
    </ul>
  </div>
</nav>
  );
};

export default Navbar;
