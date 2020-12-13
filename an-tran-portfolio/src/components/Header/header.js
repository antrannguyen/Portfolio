import React from 'react';
import './header.scss';
import headerImage from '../../assests/pictures/Computer4.jpg';

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <a href='https://antranportfolio.web.app/'>
            <i class='fab fas fa-arrow-alt-circle-right fa-2x'></i>
          </a>
          <a href='https://www.linkedin.com/in/an-tran-650b2199/'>
            <i class='fab fa-linkedin fa-2x'></i>
          </a>
          <a href='https://github.com/antrannguyen'>
            <i class='fab fa-github-square fa-2x'></i>
          </a>
        </ul>
      </nav>
      <div className='header'>
        <img className='header__img' src={headerImage} alt='d' />
        <div className='header__hi'>
          <h1> Hey, I am An Tran</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
