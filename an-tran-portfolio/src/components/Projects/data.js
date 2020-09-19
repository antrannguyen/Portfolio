import React from 'react';
import dataProjects from './projects.json';
import p1 from '../../assests/pictures/Computer4.jpg';
import p2 from '../../assests/pictures/Computer4.jpg';
import p3 from '../../assests/pictures/Computer4.jpg';
import p4 from '../../assests/pictures/Computer4.jpg';
import p5 from '../../assests/pictures/Computer4.jpg';
import p6 from '../../assests/pictures/Computer4.jpg';


// Get data of Navigation
const getDataProjects = dataProjects.projectsBack;
const pictures = [p1, p2, p3, p4, p5, p6]

const Projects = [
          {
            "link": "http://localhost:3000/",
            "title": "The title one",
            "content": " Lorem Ipsum lorem Lorem Ipsum lorem  Lorem Ipsum lorem ",
            "image": '../../assests/pictures/Computer4.jpg',
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


export default Projects