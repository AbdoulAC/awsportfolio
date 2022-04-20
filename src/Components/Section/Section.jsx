import React from 'react'
import Pic2 from '../assets/Mypic2.png'
import Sectionstyle from '../styles/Section.css'
const Section = () => {

  return (
    <section className='main-section'>
            <div className="container">

                    <div className="texts">
                        <h1 className='h1-big'>Abdoul-Aziz CISSE</h1>
                        <h3>Expert Informatique et systèmes d'information</h3>
                        <h3>Jr Fullstack engineer</h3>
                        <p>Currently looking for better opportunities</p>
                        <button className='text-button' href="/Projects">My projects</button>
                    </div>

                    <div className="image">
                        <img src={Pic2} alt=""/>
                    </div>


            </div>


    </section>
  )
}

// clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 39% 100%, 0% 50%, 36% 0%);



export default Section