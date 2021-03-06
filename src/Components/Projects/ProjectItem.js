import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/Nbadex.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 500px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
   
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: white;
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family:  'Noto Sans JP', sans-serif;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 1200px) {
    .projectItem__img {
      height: 350px;
    
   
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Maquette',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/Projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="/Projects">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}