import React from 'react'
import {MdDarkMode} from "react-icons/md"

export const Navbar = () => {
  return (
    <div className='navbar'>
           <h1>Where in the world?</h1>
           <button><MdDarkMode/>Dark Mode</button>
    </div>
  )
}
