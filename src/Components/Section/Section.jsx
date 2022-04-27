import React from 'react'
import Pic2 from '../assets/Mypic2.png'
import GitHub from '../assets/GitHub.png'
import Linkedin from '../assets/Linkedin.png'
import Sectionstyle from '../styles/Section.css'
import { useNavigate, Link } from 'react-router-dom'      


const Section = () => {
  
  
  const routeChange = () =>{ 
    let path = `https://github.com/AbdoulAC`; 
    Navigate(path);
  }


  const Navigate = useNavigate()
  const github = 'https://github.com/AbdoulAC'
  const absoulteUrl = new URL(github).href
  return (
    <section className='main-section'>
            <div className="container" max-width='xl'>

                    <div className="texts">
                      
                        <h1 className='h1-big'>Abdoul-Aziz CISSE</h1>
                        
                        <h2>Jr Fullstack engineer</h2>
                        <h5>Expert Informatique et systèmes d'information</h5>
                        <p>Currently open for opportunities</p>
                        <button className='text-button' onClick={()=>Navigate("/Projects")}>My projects</button>
                        <div className='Contacts'>  
                        <a href={'https://github.com/AbdoulAC'} target='_blank' className="github">
                            <img className='Github' src={GitHub}   />
                        </a>
                            <a href={'/www.linkedin.com/in/aac-abdoul-aziz'} target='_blank' className="linkedin">
                            <img className='Linkedin' src={Linkedin} />
                            </a>
                        </div> 
                    </div>

                    <div className="image">
                        <img src={Pic2} alt=""/>
                    </div>


            </div>


    </section>
  )
}


// clip-path: polygon(20% 8%, 80% 8%, 100% 100%, 0% 100%);

export default Section