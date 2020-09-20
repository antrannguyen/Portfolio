import React from 'react';
import './projects.scss';
import p1 from '../../assests/pictures/integrify.png';
import p2 from '../../assests/pictures/ecommerce.png';
import p3 from '../../assests/pictures/countriesList.png';
import p4 from '../../assests/pictures/annine.png';
import p5 from '../../assests/pictures/italianRecipe.png';
import p6 from '../../assests/pictures/budgetApp.png';

const pictures = [p1, p2, p3, p4, p5, p6]
const Projects = [
  {
    "link": "https://www.integrify.io/",
    "title": "Integrify Oy",
    "content": "Gatsby, React, TypeScript",
    "image": p1,
    "id": 1
  },
  {
    "link": "https://github.com/antrannguyen/E-Commerce-project",
    "title": "E-commercce",
    "content": "MERN stack, TypeScript ",
    "image": p2,
    "id": 2
  },
  {
    "link": "https://countries-page.netlify.app/",
    "title": "Country Shop",
    "content": "React, Redux Thunk/Saga",
    "image": p3,
    "id": 3
  },
  {
    "link": "https://github.com/antrannguyen",
    "title": "Annine Shop",
    "content": "WordPress",
    "image": p4,
    "id": 4
  },
  {
    "link": "https://github.com/antrannguyen/Italian-cuisine-recipe",
    "title": "Italian Recipe",
    "content": "JavaScript",
    "image": p5,
    "id": 5
  },
  {
    "link": "https://antrannguyen.github.io/BudgetApp/?fbclid=IwAR3ungadBPYevyPzbgMqBDOf-F2YDrZpBOsbyXzvJz4nRM6mWsmVAlkZu-0",
    "title": "Budget App",
    "content": "JavaScript",
    "image": p6,
    "id": 6
  }
]

const Project = () => {
  return (
    <div className="con">
      <div className='con__title-div'>
      <h2 className="con__title"> MY PROJECTS</h2>
      </div>
    {/* <section title='Projects' className='projects'> */}

      <div className='projects__row'>
      {/* <div className='row'> */}

        {Projects.map((i) => {
          console.log(i)
          return (
            <a href={i.link}>
            <article key={i.id} className='projects__boxes'>
              <h3 className='heading-tertiary'>{i.title}</h3>
              <p className='text'>{i.content}</p>
              {/* <img className='boxes__img' src={i.image} alt='project' width='250px'/> */}
              <img className='boxes__img' src={i.image} alt='project' width='100%'/>

            </article>
            </a>
          );
        })}
      </div>
    {/* </section> */}
    </div>
  );
};

export default Project;
