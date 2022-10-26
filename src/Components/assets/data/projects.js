import { v4 as uuidv4 } from 'uuid';

import Maquette from '../maquette2.jpg';
import Nbadex from '../Nbadex.png';
import Postgres from '../Postgres.png';
import Rest_Api from '../Rest_Api.png';
import Hokusai from '../V1_hokusai.png';
import Nioro from '../Nioro.gif'
const projects = [
  {
    id: uuidv4(),
    name: 'Nioro',
    desc:
      'Landing web application for an upcoming Startup, implementation end to end.',
    img: Nioro,
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
 
  {
    id: uuidv4(),
    name: 'Plant Connectivity',
    desc:
      'Data handling from a plant based model. Consumption of said data by cloud hosted digital applications.',
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