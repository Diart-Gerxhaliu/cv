import React from 'react'
import Heading from '../atom/Heading'
import ImgTxt from '../molecules/ImgTxt'

function Languages({language}) {
  return (
    <div className='languages'>
        <Heading text={'Languages'}/>
        <div className='flex'>
        {language.map((lang)=>{
            return <ImgTxt  
            image_src={lang.src}
            image_alt={lang.alt}
            text={lang.perc}/>            
        })}
        </div>
    </div>
  )
}

export default Languages
