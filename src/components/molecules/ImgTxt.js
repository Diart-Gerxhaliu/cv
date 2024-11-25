import React from 'react'
import Image from '../atom/Image'
import Text from '../atom/Text'

function ImgTxt({
    text,
    image_src,
    image_alt
}) {
  return (
    <div className='imgtxt'>
      <Image image_src={image_src} image_alt={image_alt}/>
      <Text text={text}/>
    </div>
  )
}

export default ImgTxt
