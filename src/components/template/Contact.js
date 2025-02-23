import React from 'react'
import Heading from '../atom/Heading'
import { Link } from 'react-router-dom'
import Icon from '../atom/Icon'
import Insta from '../../assets/icon/instagram.svg'
import Github from '../../assets/icon/github.svg'
import Facebook from '../../assets/icon/facebook.svg'

function Contact() {
    const icons = [{
        src: Insta,
        alt: 'Instagram',
        link: 'https://www.instagram.com/diart.gerxhaliu1/'  
    },{
        src: Github,
        alt: 'Github',
        link: 'https://github.com/Diart-Gerxhaliu'    
    },{
        src: Facebook,
        alt: 'Facebook',
        link: 'https://www.facebook.com/diart.gerxhaliu.50/'     
    },]
  return (
    <div className='contact'>
      <Heading text={"You can contact me on these sites"}/>
      <div className='contactIcons'>
      {
        icons.map((icon)=>
            <Link to={icon.link}>
                <Icon 
                icon_src={icon.src} 
                icon_alt={icon.lt}
                
            /></Link>
          )
      }
      </div>
    </div>
  )
}

export default Contact
