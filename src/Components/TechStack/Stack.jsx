import { v4 as uuidv4 } from 'uuid';
import reactlogo from '../assets/react.png'
import bdd from '../assets/bdd.png'
import confluence from '../assets/confluence.png'
import java from '../assets/java.png'
import GitHub from '../assets/GitHub.png'
import python from '../assets/python.png'

const Stack = [
    {
      id: uuidv4(),
      name: 'Frontend',
      tags: ['HTML', 'CSS/ScSS','Javascript','ReactJS','NextJs','Typescript','Vue.js','Nuxt','Bootstrap','Tailwindcss','Figma','Wordpress'],
      img:reactlogo,
    },
    {
        id: uuidv4(),
        name: 'Backend & Scripts',
        tags: ['Python','Django','NodeJs','ExpressJs','Rest API','Postman','Jupyter', 'Java','C/C++'], 
        img:python,
      },
      {
        id: uuidv4(),
        name: 'Object Oriented Programming',
        tags: ['C/C++', 'Java', 'Javascript', 'Python'],
        img:java,
      },
      {
        id: uuidv4(),
        name: 'Data Management',
        tags: ['PostgresSql', 'MySQL', 'Oracle'],
        tools:['Grafana', 'Seeq', 'Sql shell', 'pgAdmin4'],
        img:bdd,
      },
      {
        id: uuidv4(),
        name: 'DevOps - CI/CD',
        tags: ['Github', 'Gitlab', 'Aws', 'Docker','Kubernetes'],
        img:GitHub,
      },
      {
        id: uuidv4(),
        name: 'Project Management',
        tags: ['Confluence', 'Jira', 'Trello', 'Powerpoint', 'Notes', 'Excel'],
        img:confluence,
      },
  ];
  
  export default Stack;