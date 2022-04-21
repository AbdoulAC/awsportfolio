import { ArrowBack, Input, Label } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import Contactstyle from '../styles/Contact.css'
const Contact = () => {
  var form=document.getElementById('Form')


  return (
      <div className='contact'>
          <div className="arrow-home"></div>
            <Link to='/'><ArrowBack className='arrow'/></Link>

            <form id='Form'>
                    <label>Name</label>
                    <input type="text" placeholder="enter your name"/>
                    <label>Last Name</label>
                    <input type="text" placeholder="enter your Last name"/>
                    <label>email</label>
                    <input type="text" placeholder="enter your mail"/>
                    <label>Message</label>
                    <textarea name="" id="" cols="58" rows="7" placeholder="Please leave a message, I'll get back to you as soon as possible !"></textarea>
                    <button href="mailto:abdoulazizcisse00@gmail.com" id='submitbtn'>Send</button>

            </form>
      </div>
   
  )
}

export default Contact