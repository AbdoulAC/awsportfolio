import React from 'react'
import '../styles/Second.css'
import project from '../assets/project.jpg'
import {motion} from 'framer-motion'
import { Box } from '@mui/material'

const Second = () => {
  return (

    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}} className='Second' id='Second'>
        <Box className='section-2'>
            <h1 className="about-me"> About Me</h1>
            
            <div className="container-2">
              
              
                <div className="image-cont">
                    <img src={project} alt=""/>
                </div>

                <div className="text-3">
                <p>Front-End</p>
                <p>Backend</p>
                <p>Object Oriented Programming</p>
                <p>IoT - Plant based/ API based data collection</p>
                <p>Stack Polyvalent</p>

                </div>


            </div>
        
        </Box>
    </motion.div>


  )
}

export default Second