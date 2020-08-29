import React from 'react';
import './about.scss';
import about from '../../assests/Data/about';

const About = () => {
  return (
    <div key={about.id} className='about'>
      <div className='about__title'>
        <h1> {about.title}</h1>
      </div>
      <div className='about__content'>
        <p>{about.content}</p>
      </div>
    </div>
  );
};

export default About;
