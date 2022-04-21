import React from 'react';
import Maquette from '../assets/maquette2.jpg';
import Nbadex from '../assets/Nbadex.png';
import Postgres from '../assets/Postgres.png';
import Rest_Api from '../assets/Rest_Api.png';
import Hokusai from '../assets/V1_hokusai.png';
import ProjectStyle from '../styles/Projects.css';
import styled from 'styled-components';


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';
import 'swiper/swiper-bundle.min.css';
import projects from '../assets/data/projects';


SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    
    height: 50px;
    width: 50px;
    background: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 1200px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 4rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

const Projects = () => {
  return (
            <>
            <ProjectSectionStyle>
                     <SectionTitle subheading="Slide (right) throught some of my recent work" heading="Projects" />
            <div className="container">
               
                
                <div className="projects__allItems">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    breakpoints={{
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 1200px
                    1200: {
                        slidesPerView: 1,
                    },
                    }}
                >
                    {projects.map((project, index) => {
                    if (index >= 4) return;
                    return (
                        <SwiperSlide key={project.id}>
                        <ProjectItem
                            title={project.name}
                            img={project.img}
                            desc={project.desc}
                        />
                        </SwiperSlide>
                    );
                    })}
                </Swiper>
                </div>
                
      </div>
      </ProjectSectionStyle>
    </>
  )
}

export default Projects