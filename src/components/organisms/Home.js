import React from 'react'
import Intro from '../molecules/Intro'
import Image from '../atom/Image'


function Home({
    h1,
    text,
    image_src,
    image_alt,
    icons
}) {
    
  return (
    
    <div className='home' id='home'>
        <Intro 
            h1={h1}
            text={text}
            icons={icons}
        />
        <Image 
            image_src={image_src} 
            image_alt={image_alt}
        />
    </div>
  )
}

export default Home
