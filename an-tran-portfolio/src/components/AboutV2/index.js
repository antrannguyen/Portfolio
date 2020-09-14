import React from 'react';
import './about.scss';
import about from '../../assests/Data/about';
import img1 from '../../assests/pictures/Computer3.jpg'
import img2 from '../../assests/pictures/Computer2.jpg'


const About = () => {
  return (
    <section className='section'>
      <div className='section__title'>
        <h1> {about.title}</h1>
      </div>
      <div key={about.id} className='section__about'>
        <div className='section__left-column-top'>
          <h3 className='section__left-content'>{about.content}</h3>
        </div>
        <div className='section__right-column-top'>
          <p className='about__right-content'>{about.content1}</p>
        </div>
      </div>
      <div className='section__image'>
          <img className='section__left-img' width='40%' loading='lazy' src={img1} alt="pic"></img>
       
          <img className='section__right-img'  width='60%' src={img2} alt="pic"></img>
      </div>
    </section>
  );
};

export default About;
