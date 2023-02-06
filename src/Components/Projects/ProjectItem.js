import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/Nbadex.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 50vw;
    height: 50vh;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
   
    align:'center';
    justify:'center';
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin: 0 auto;
    text-align:center;
    width: 50vw;
    text-decoration:none;
    background-color: transparent;
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    color:gray;
    
    font-size: 2.2rem;
    text-align:center;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family:  'Montserrat','Noto Sans JP', sans-serif;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 1200px) {
    .projectItem__img {
      height: 35vh;
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