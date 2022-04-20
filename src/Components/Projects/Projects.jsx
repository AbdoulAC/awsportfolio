import React from 'react'
import Maquette from '../assets/maquette2.jpg'
import Nbadex from '../assets/Nbadex.png'
import Postgres from '../assets/Postgres.png'
import Rest_Api from '../assets/Rest_Api.png'
import Hokusai from '../assets/V1_hokusai.png'
import ProjectStyle from '../styles/Projects.css'

const Projects = () => {
  return (
    <section className='Projects'>
        
        
            <div className="cart-container">
            
                <h1>Done</h1>
            
                <div className="cart">
                    <img src={Maquette} alt=""/>
                    <p>Maquette</p>
                    <h5>Data Collection From shopfloor</h5>
                </div>

                <div className="cart">
                    <img src={Nbadex} alt=""/>
                    <p>Nbadex</p>
                    <h5>End to end webapp developpement</h5>
                </div>

                <h1>On Going</h1>

                <div className="cart">
                    <img src={Rest_Api} alt=""/>
                    <p>Rest_Api</p>
                    <h5>Api implementation</h5>
                </div>

                <div className="cart">
                    <img src={Hokusai} alt=""/>
                    <p>Hokusai</p>
                    <h5>Personal projects </h5>
                </div>

            </div>

    </section>

  )
}

export default Projects