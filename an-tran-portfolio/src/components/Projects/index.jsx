import React from 'react';
import './projects.scss';
import p1 from '../../assests/pictures/Computer4.jpg';
import p2 from '../../assests/pictures/Computer4.jpg';
import p3 from '../../assests/pictures/Computer4.jpg';
import p4 from '../../assests/pictures/Computer4.jpg';
import p5 from '../../assests/pictures/Computer4.jpg';
import p6 from '../../assests/pictures/Computer4.jpg';

const pictures = [p1, p2, p3, p4, p5, p6]
const Projects = [
  {
    "link": "http://localhost:3000/",
    "title": "The title one",
    "content": " Lorem Ipsum lorem Lorem Ipsum lorem  Lorem Ipsum lorem ",
    "image": p1,
    "id": 1
  },
  {
    "link": "http://localhost:3000/",
    "title": "The title two",
    "content": "Lorem Ipsum lorem Lorem Ipsum lorem  Lorem Ipsum lorem  ",
    "image": p1,
    "id": 2
  },
  {
    "link": "http://localhost:3000/",
    "title": "The title three",
    "content": "Lorem Ipsum lorem Lorem Ipsum lorem Lorem Ipsum lorem ",
    "image": p1,
    "id": 3
  },
  {
    "link": "http://localhost:3000/",
    "title": "The title one",
    "content": " Lorem Ipsum lorem Lorem Ipsum lorem  Lorem Ipsum lorem  ",
    "image": p1,
    "id": 4
  },
  {
    "link": "http://localhost:3000/",
    "title": "The title two",
    "content": "Lorem Ipsum lorem Lorem Ipsum lorem  Lorem Ipsum lorem  ",
    "image": p1,
    "id": 5
  },
  {
    "link": "http://localhost:3000/",
    "title": "The title three",
    "content": "Lorem Ipsum lorem Lorem Ipsum lorem Lorem Ipsum lorem ",
    "image": p1,
    "id": 6
  }
]

const Project = () => {
  return (
    <div className="con">
    <section title='Projects' className='projects'>
      <h2 className="projects__title"> Title</h2>
      <div className='projects__row'>
        {Projects.map((i) => {
          console.log(i)
          return (
            <article key={i.id} className='projects__boxes'>
              <h3 className='heading-tertiary'>{i.title}</h3>
              <p className='text'>{i.content}</p>
              <img src={i.image} alt='project' width='300px'/>

            </article>
          );
        })}
      </div>
    </section>
    </div>
  );
};

export default Project;
