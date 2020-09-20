import React from 'react';
import './about.scss';
import about from '../../assests/Data/about';
import img2 from '../../assests/pictures/An4.jpg'
import img1 from '../../assests/pictures/An3.jpg'



const About = () => {
  return (
    <section className='section'>
      <div className='section__title'>
        <h1> {about.title}</h1>
      </div>
      <div key={about.id} className='section__about'>
        <div className='section__left-column-top'>
          <h3 className='section__left-content'>{about.contentLeft}</h3>
          {/* <p className='section__left-content-p'>-- Vanessa Hurst</p> */}
        </div>
        <div className='section__right-column-top'>
          <div className='about__right-content'>{about.contentRight}</div>
        </div>
      </div>
      <div className='section__image'>
          <img className='section__left-img' width='40%' loading='lazy' src={img1} alt="pic" style={{border: '2px solid black'}}></img>
       
          <img className='section__right-img'  width='60%' src={img2} alt="pic" style={{border: '2px solid black'}}></img>
      </div>
    </section>
  );
};

export default About;
