import React from 'react'
import Pic2 from '../assets/Mypic2.png'
import GitHub from '../assets/GitHub.png'
import Linkedin from '../assets/Linkedin.png'
import Sectionstyle from '../styles/Section.css'
import { useNavigate} from 'react-router-dom'      
import { motion } from 'framer-motion'
import {Link} from 'react-scroll';
const Section = () => {
  



  const Navigate = useNavigate()
  
  const transition = {duration:2, type:'spring'}


  return (
    <div className="Section" id='Section'>
        <section className='main-section'>
                <div className="container" max-width='xl'>

                        <div className="texts">
                          
                            <h1 className='h1-big'>Abdoul-Aziz CISSE</h1>
                            
                            <h2>Jr Fullstack engineer</h2>
                            <h5>Expert Informatique et systèmes d'information</h5>
                            <p>Eager to learn -<br/> Currently open for work </p>
                        
                            <button className='text-button'> <Link to='Projects' spy={true} smooth={true} offset={50} duration={500}>My Projects </Link></button>
                            <div className='Contacts'>  
                            <a href={'https://github.com/AbdoulAC'} target='_blank' className="github">
                                <img className='Github' src={GitHub}   />
                            </a>
                                <a href={'https://linkedin.com/in/aac-abdoul-aziz'} target='_blank' className="linkedin">
                                <img className='Linkedin' src={Linkedin} />
                                </a>
                            </div> 
                      </div>

                        <div  
                            className="image">

                            <img
                                className='headshot' src={Pic2} alt=""/>

                        </div>


                </div>


        </section>
    </div>
  )
}


// clip-path: polygon(20% 8%, 80% 8%, 100% 100%, 0% 100%);

export default Section