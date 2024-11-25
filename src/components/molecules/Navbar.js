import React from 'react'
import List from '../atom/List.js'
import { Link } from 'react-router-dom'

function Navbar({content}) {
  return (
    <div className='navbar'>
      {content.map((comp)=>{
        return <Link to={comp.link}><List text={comp.text} /></Link>
      })}
    </div>
  )
}

export default Navbar
