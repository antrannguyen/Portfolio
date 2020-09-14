import React from 'react';
import './projects.scss';
import dataProjects from './projects.json';

// Get data of Navigation
const getDataProjects = dataProjects.projectsBack;

const Project = () => {
  return (
    <section title='Projects' className='projects'>
      <h2 className='titleSection'>My Highlight </h2>
      <div className='projects__parallelogram'>
      {/* <div className='projects__children'> */}
        {/* {getDataProjects.map((i) => {
          return (
            <article key={i.id} className='projects__article'>
              <h3>{i.title}</h3>
              <p>{i.content}</p>
              <button id={i.id}>VIEW PROJECT</button>
            </article>
          );
        })} */}
      {/* </div> */}
      </div>
    </section>
  );
};

export default Project;
