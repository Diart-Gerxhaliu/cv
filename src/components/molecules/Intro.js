import React from 'react'
import Heading from '../atom/Heading'
import Text from '../atom/Text'
import Icon from '../atom/Icon'
import { Link } from 'react-router-dom'

function Intro({
    h1,
    text,
    icons
}) {
  return (
    <div className='intro'>
      <Heading text={h1}/>
      <Text text={text}/>
      <div className='icons'>
      {icons.map((icon)=>
        <Link to={icon.link}><Icon 
            icon_src={icon.src} 
            icon_alt={icon.lt}
        /></Link>
      )}
      </div>
    </div>
  )
}

export default Intro
