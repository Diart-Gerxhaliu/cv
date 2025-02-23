import React from 'react'
import Heading from '../atom/Heading'
import Text from '../atom/Text'
import Image from '../atom/Image'
import styled, { keyframes } from 'styled-components';
import { merge, fadeIn, bounce } from 'react-animations';
const tadaFlip = merge(bounce, fadeIn);
let tf = keyframes `${tadaFlip}`
const BouncyDiv = styled.div`
  animation: 1s ${tf};
`;

function About({
    text,
    text2,
    image_src,
    image_alt
}) {
  return (
    <div className='aboutorg' id='About'>
      <BouncyDiv>
      <div className='left'>
        <Heading text={'About'}/>
        <Text text={text}/>
        <Text text={text2}/>
      </div>  
      <div className='right'>
        <Image image_src={image_src} image_alt={image_alt}/>
      </div>
      </BouncyDiv>

    </div>
  )
}

export default About
