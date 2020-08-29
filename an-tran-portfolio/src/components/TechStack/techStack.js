import React from 'react';
import './techStack.scss';

const TechStack = () => {
  return (
    <section title='Tech stack' className='techStack'>
      <h2 className='titleSection'>Tech Stack</h2>

      <div className='techStack__1'>
        <a
          className='techstack_logo'
          href='http://localhost:3000/'
          aria-label='JavaScript'
        >
          <i className='fab fa-js'></i>
        </a>
        <a
          className='techstack_logo'
          href='http://localhost:3000/'
          aria-label='HTML5'
        >
          <i className='fab fa-html5'></i>
        </a>
        <a
          className='techstack_logo'
          href='http://localhost:3000/'
          aria-label='CSS3'
        >
          <i className='fab fa-css3'></i>
        </a>
        <a
          className='techstack_logo'
          href='http://localhost:3000/'
          aria-label='React'
        >
          <i className='fab fa-react'></i>
        </a>
        <a
          className='techstack_logo'
          href='http://localhost:3000/'
          aria-label='SaSS'
        >
          <i className='fab fa-sass'></i>
        </a>
        <a
          className='techstack_logo'
          href='http://localhost:3000/'
          aria-label='SaSS'
        >
          <i className='fab fa-sass'></i>
        </a>
        <a
          className='techstack_logo'
          href='http://localhost:3000/'
          aria-label='SaSS'
        >
          <i className='fab fa-sass'></i>
        </a>
      </div>
    </section>
  );
};

export default TechStack;
