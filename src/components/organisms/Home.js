import React from 'react'
import Intro from '../molecules/Intro'
import Image from '../atom/Image'
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
 
const bounceAnimation = keyframes`${zoomIn}`;
 
const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

function Home({
    h1,
    text,
    image_src,
    image_alt,
    icons
}) {
    
  return (
    
    <div className='home' id='Home'>
      <BouncyDiv>
        <Intro 
            h1={h1}
            text={text}
            icons={icons}
        />
        </BouncyDiv>
        <BouncyDiv>
        <Image 
            image_src={image_src} 
            image_alt={image_alt}
        />
        </BouncyDiv>
    </div>
  )
}

export default Home
