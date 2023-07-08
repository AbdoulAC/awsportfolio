import React from 'react'
import { Routes, Route, useLocation  } from 'react-router-dom';
import Projects from '../Projects/Projects';
import Second from '../Second/Second';
import Section from '../Section/Section';
import TechStack from '../TechStack/TechStack';
import {AnimatePresence} from 'framer-motion'

const AnimatedTransition = (props) => {
    const location = useLocation();
    // const useName = () => {
       
    //     return location.pathname;
    //     }

    return (
    
    <div className="Animated" >
        <AnimatePresence>
               
                    
                        <Routes location={location} key={location} >
                               
                                <Route path='TechStack' element={<TechStack/>} />
                                <Route path='Second' element={<Second/>} />
                                <Route path='Projects' element={<Projects/>}/>
                        </Routes>

                
        </AnimatePresence>
                
        
    </div>
  )
}

export default AnimatedTransition