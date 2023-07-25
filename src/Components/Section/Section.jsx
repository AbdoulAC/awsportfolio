import React from 'react'
// import Pic2 from '../assets/Mypic2.png'
import GitHub from '../assets/GitHub.png'
import Linkedin from '../assets/Linkedin.png'
import Sectionstyle from '../styles/Section.css'
import { useNavigate , Link as Routerlink } from 'react-router-dom'
      
import { motion } from 'framer-motion'
import {DiSqllite} from 'react-icons/di'
import {Link} from 'react-scroll';
import Theme from '../Theme/ColorPalette.jsx'
import { createTheme, ThemeProvider, useTheme, responsiveFontSizes} from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

const Section = (props) => {
  
    



  const Navigate = useNavigate();
  
  const transition = {duration:2, type:'spring'};

  const theme = useTheme();

    const GetColor = () =>{
        return (theme.palette.mode);
    }

  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        
    className="Section" id='Section'>
          <div className="logo" style={{position:'absolute', top:0, left:35}}>
                     <h2> <DiSqllite size="2rem"/> AAC portfolio </h2>
            </div>
            <section className='main-section'>
                    <div className="container" max-width='xl'>
                

                            
                            <div className="texts">
                            
                                <h1 className='h1-big'>Abdoul-Aziz CISSE</h1>
                                
                                <h2>Fullstack engineer</h2>
                                <h5>IT AND INFORMATION SYSTEMS EXPERT</h5>
                                <p>Eager to learn</p>
                            
                                <button className='text-button' onClick={() => Navigate('Projects')}>My Projects</button>
                                <div className='Contacts'>  
                                <a href={'https://github.com/AbdoulAC'} target='_blank'  rel="noreferrer" className="github">
                                    <img className='Github' src={GitHub}   />
                                </a>
                                    <a href={'https://linkedin.com/in/aac-abdoul-aziz'} target='_blank'  rel="noreferrer" className="linkedin">
                                    <img className='Linkedin' src={Linkedin} />
                                    </a>
                                </div> 
                        </div>
    {/*                     
                            <div  className="image">

                                <img className='headshot' src={Pic2} alt=""/>

                            </div> */}

                        

                    </div>
                    

            </section>
            <div >
                    <Box
                        style={{position:'relative', top:-100, left:0, right:35}}
                        sx={{
                            display: { xs: 'flex' },
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'right',
                        elevation:'5',
                        color: 'primary',
                        borderRadius:2,
                        p: 1,
                        mr:35
                       
                        }}
                    >   
                        <div className="mode">{theme.palette.mode}</div>
                         
                        <IconButton sx={{ ml: 1 }} onClick={props.changeTheme} color="secondary"> 
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Box>
                </div>
    </motion.div>
  )
}


// clip-path: polygon(20% 8%, 80% 8%, 100% 100%, 0% 100%);

export default Section