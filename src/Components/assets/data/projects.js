import { v4 as uuidv4 } from 'uuid';

import Maquette from '../maquette2.jpg';
import Nbadex from '../Nbadex.png';
import Postgres from '../Postgres.png';
import Rest_Api from '../Rest_Api.png';
import Hokusai from '../V1_hokusai.png';
import Nioro from '../Nioro.gif'
import Playground from '../Playground.png'
const projects = [
  {
    id: uuidv4(),
    name: 'Coming up: Playground',
    desc:
      'Livescore Web application, find the freshest scores and sport data in no time !',
    img: Playground,
  },
  {
    id: uuidv4(),
    name: 'Nioro',
    desc:
      'Landing web application for Nioro Startup, implementation made using Reactjs. Nextjs is to be added in the next version.',
    img: Nioro,
  },
  {
    id: uuidv4(),
    name: "Rest Api",
    desc:
      'Implementation of Rest Apis using Django, or NodeJs',
    img: Rest_Api,
  },
  {
    id: uuidv4(),
    name: 'Database Management',
    desc:
      'PostgresSql, MySql or Oracle database management.',
    img: Postgres,
  },
  {
    id: uuidv4(),
    name: 'Plant Connectivity',
    desc:
      'Data handling from a plant based model. Consumption of said data by cloud hosted digital applications.',
    img: Maquette,
  },
  {
    id: uuidv4(),
    name: 'Nbadex',
    desc:
      'Web application to track your all around Nba data since over 20 years.',
    img: Nbadex,
  },
  
  {
    id: uuidv4(),
    name: 'Hokusai',
    desc:
      'On going Web app using Vue.js.',
    img: Hokusai,
  },
  
];

export default projects;