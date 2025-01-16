import React from 'react'
import Heading from '../atom/Heading'
import Navbar from '../molecules/Navbar'


function Menu() {
  const list =[{
    text: 'Home',
    link: 'Home'
},
{
    text: 'About',
    link: 'About'
},
{
    text: 'Contact',
    link: 'Contact'
}]
  return (
    <div className='menu'>
      <Heading text={"Diart Gerxhaliu"}/>
      <Navbar content={list}/>
    </div>
  )
}

export default Menu
