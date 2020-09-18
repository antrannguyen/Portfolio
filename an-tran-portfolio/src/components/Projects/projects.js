import React from 'react';
import './projects.scss';
import dataProjects from './projects.json';

// Get data of Navigation
const getDataProjects = dataProjects.projectsBack;

const Project = () => {
  return (
    <section title='Projects' className='projects'>
      {/* <h2 className='titleSection'>My Highlight </h2> */}
      {/* <div className='projects__parallelogram'> */}
      <div className='projects__row'>
        
        {getDataProjects.map((i) => {
          return (
            <div class="col-1-of-3">
            <article key={i.id} className='projects__boxes'>
              <h3 className='heading-tertiary'>{i.title}</h3>
              <p className='text'>{i.content}</p>
              {/* <button id={i.id}>VIEW PROJECT</button> */}
            </article>
            </div>
          );
        })}
      
      </div>
      {/* </div> */}
    </section>
  );
};

export default Project;
