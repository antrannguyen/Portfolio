import React from 'react';
import './header.scss';
import dataHeader from './header.json';
// import headerImage from '../../assests/pictures/Computer4.jpg';

// Get data of Navigation
const getDataHeader = dataHeader.nav;

const Header = () => {
  return (
    <div className='header'>
      <nav>
        <ul>
          {getDataHeader.map((i) => {
            return (
              <li key={i.id}>
                <a href={i.link}>{i.label}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* <img
        className='header__img'
        srcSet='../../assests/pictures/Computer4.jpg 1x, ../../assests/pictures/Computer4.jpg 2x'
        alt='d'
      /> */}
      <div className='header__hi'>
        <h1> Hey, I am An Tran</h1>
      </div>
    </div>
  );
};

export default Header;
