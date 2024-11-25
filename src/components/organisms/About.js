import React from 'react'
import Heading from '../atom/Heading'
import Text from '../atom/Text'
import Image from '../atom/Image'

function About({
    text,
    text2,
    image_src,
    image_alt
}) {
  return (
    <div className='about'>
      <div className='left'>
        <Heading text={'About'}/>
        <Text text={text}/>
        <Text text={text2}/>
      </div>  
      <div className='right'>
        <Image image_src={image_src} image_alt={image_alt}/>
      </div>

    </div>
  )
}

export default About
