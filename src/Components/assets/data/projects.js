import { v4 as uuidv4 } from 'uuid';

import Maquette from '../maquette2.jpg';
import Nbadex from '../Nbadex.png';
import Postgres from '../Postgres.png';
import Rest_Api from '../Rest_Api.png';
import Hokusai from '../V1_hokusai.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Nbadex',
    desc:
      'An End to end Web application to track your all around Nba data from over 20 years.',
    img: Nbadex,
  },
  {
    id: uuidv4(),
    name: 'Hokusai',
    desc:
      'On going Web app using Vue.js, destined to be a sofisticated marketplace.',
    img: Hokusai,
  },
 
  {
    id: uuidv4(),
    name: 'Plant Connectivity',
    desc:
      'End to end data handling from a plant based model. Data consumed by cloud hosted digital applications.',
    img: Maquette,
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
    name: "Rest Api",
    desc:
      'Implementation of Rest Apis using Django',
    img: Rest_Api,
  },
  
];

export default projects;