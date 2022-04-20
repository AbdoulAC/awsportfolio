import { MenuOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/Header.css'
import {Data} from '../MenuItems/MenuItems'

const Header = () => {
    const [open, setOpen]=useState(false)

    const showMenu = () =>{
        setOpen(!open)
    }
  
    return (
    <div className='header'>
        <nav>
            <div className="logo">
                <h1>AAC portfolio</h1>
            </div>

            <ul className='ul-items'>
                <li>
                    <Link to='#'>Home </Link>
                </li>

                <li>
                    <Link to='/Projects'>Projects </Link>
                </li>

                <li>
                    <Link to='/Contact'>Contact </Link>
                </li>

                <li>
                    <Link to='/Second'>About </Link>
                </li>


                <div className="hamburger-menu">
                    <MenuOutlined className='menu' onClick={showMenu}/>
                </div>


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