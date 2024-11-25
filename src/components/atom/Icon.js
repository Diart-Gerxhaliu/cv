import React from 'react'

function Icon({icon_src,icon_alt}) {
  return (
    <div className='icon'>
        <img src={icon_src} alt={icon_alt} />
    </div>
  )
}

export default Icon
