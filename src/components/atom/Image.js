import React from 'react'

function Image({image_src,image_alt}) {
  return (
    <div className='image'>
        <img src={image_src} alt={image_alt} />
    </div>
  )
}

export default Image
