import React from 'react';
import './header.scss';
import dataHeader from './header.json';
import headerImage from '../../assests/pictures/Computer4.jpg';
import Navbar from '../Navbar/nav';

// Get data of Navigation
const getDataHeader = dataHeader.nav;

const Header = () => {
  return (
    <div> 
<Navbar />
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
    <div className='header'>
      <img
        className='header__img'
        src={headerImage}
        alt='d'
      />
      <div className='header__hi'>
        <h1> Hey, I am An Tran</h1>
      </div>
    </div>
    </div>
  );
};

export default Header;
