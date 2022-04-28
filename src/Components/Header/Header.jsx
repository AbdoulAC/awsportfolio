import { MenuOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/Header.css'
import {Data} from '../MenuItems/MenuItems'
import {DiSqllite} from 'react-icons/di'
import * as Scroll from 'react-scroll';

const Header = () => {
    const [open, setOpen]=useState(false)

    const showMenu = () =>{
        setOpen(!open)
    }


    const [Button, setButton]=useState(false);

    const showButtons = () =>{
        if (window.innerWidth<=760){
            setButton(true)
        }else{
            setButton(false)
        }
    
        
    }

     function scrollTo(link) {
        scroll.scrollTo(link);
      }

      var Scroll = require('react-scroll');
      var scroll = Scroll.animateScroll;

    window.addEventListener('resize', showButtons)

  
    return (
    <div className='header'>


        <nav className='navbar' >
            <div className="logo" sx={{ mr: 2, display: { xs: 'none', sm: 'flex' } }}>
                <Link to='#' onClick={showMenu} className='NavbarLogoLink'>
                <h2> <DiSqllite size="2rem"/> AAC portfolio </h2>
                </Link>
            </div>

             <ul className='ul-items'>
              {!Button &&<>
                <li>
                    <Link to='/' onClick={showMenu}>Menu </Link>
                </li>
                
                <li>
                    <Link to='/TechStack'> Tech stack</Link>
                </li>

                <li>
                    <Link to='/Projects'>Projects </Link>
                </li>

                <li>
                    <Link to='/Second' activeClass="active" >About Me</Link>
                </li>

               

             

               </>
                }


                {Button && <div className="hamburger-menu">
                    <MenuOutlined className='menu' onClick={showMenu}/>
                </div>
                }

            </ul>


        </nav>
        
        <nav className={open ? 'slider active' : 'slider'}>
            <ul className='slider-ul' onClick={showMenu}>
                {Data.map((item, index) => {
                    return(
                            <li key={index} className={item.className}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>


                    )
                })}
            </ul>
        </nav>


        </div>
  )
}

export default Header