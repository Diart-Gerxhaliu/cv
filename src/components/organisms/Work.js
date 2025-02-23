import React from 'react'
import Image from '../atom/Image'
import Heading from '../atom/Heading'
import Text from '../atom/Text'
import { Link } from 'react-router-dom'

function Work({
    src,
    alt,
    heading,
    text,
    link,
    linkText
}) {
  return (
    <div className='work'>
      <Image image_src={src} image_alt={alt}/>
      <div className='right'>
        <Heading text={heading}/>
        <Text text={text}/>
        <Link to={link}><button>   {linkText}</button></Link>
      </div>
    </div>
  )
}

export default Work
