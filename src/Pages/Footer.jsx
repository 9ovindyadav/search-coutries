import React from 'react'
import {AiOutlineGithub} from "react-icons/ai";
import {BsInstagram,BsYoutube} from "react-icons/bs"
import "./home.scss";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer'>
      <p>Made by Govind</p>
      <div className="icons">
      <Link to={"https://github.com/Govind312?tab=repositories"} target='blank'>
        <AiOutlineGithub color='white'/></Link>
      <Link to={"https://www.instagram.com/9ovindyadav"} target='blank'> 
      <BsInstagram color='orange'/>
      </Link>
      <Link to={"https://www.youtube.com/@9ovindyadav"} target='blank'>
      <BsYoutube color='red'/>
      </Link>
      </div>
    </div>
  )
}
