import React from 'react'
import Pic2 from '../assets/Mypic2.png'
import Sectionstyle from '../styles/Section.css'
import { useNavigate } from 'react-router-dom'      

const Section = () => {

  const Navigate = useNavigate()
  return (
    <section className='main-section'>
            <div className="container" max-width='sm'>

                    <div className="texts">
                        <h1 className='h1-big'>Abdoul-Aziz CISSE</h1>
                        
                        <h2>Jr Fullstack engineer</h2>
                        <h5>Expert Informatique et systèmes d'information</h5>
                        <p>Currently looking for opportunities</p>
                        <button className='text-button' onClick={()=>Navigate("/Projects")}>My projects</button>
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