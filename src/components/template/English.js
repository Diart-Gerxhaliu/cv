import React from 'react'
import Home from '../organisms/Home'
import Insta from '../../assets/icon/instagram.svg'
import Github from '../../assets/icon/github.svg'
import Facebook from '../../assets/icon/facebook.svg'
import Me from '../../assets/img/20241119_154337.jpg'
import About from '../organisms/About'
import Languages from '../organisms/Languages'
import HTML from '../../assets/icon/HTML.svg'
import Css from '../../assets/icon/Css.svg'
import JS from '../../assets/icon/JS.svg'
import Git from '../../assets/icon/Git.svg'
import Act from '../../assets/icon/React.svg'
import Wordpress from '../../assets/icon/Wordpress.svg'
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import Work from '../organisms/Work'
import Cap1 from '../../assets/img/Capture.PNG'
import Cap2 from '../../assets/img/Capture2.PNG'
 
const bounceAnimation = keyframes`${fadeIn}`;
 
const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;




function English() {
    const icons = [{
        src: Insta,
        alt: 'Instagram',
        link: 'https://www.instagram.com/diart.gerxhaliu1/'  
    },{
        src: Github,
        alt: 'Github',
        link: 'https://github.com/Diart-Gerxhaliu'    
    },{
        src: Facebook,
        alt: 'Facebook',
        link: 'https://www.facebook.com/diart.gerxhaliu.50/'     
    },]
    const language =[{
        src: HTML,
        alt: 'Html',
        perc: '90%',
    },
    {
        src: Css,
        alt: 'css',
        perc: '80%',
    },{
        src: JS,
        alt: 'javascript',
        perc: '80%',
    },{
        src: Git,
        alt: 'git',
        perc: '60%',
    },{
        src: Github,
        alt: 'github',
        perc: '50%',
    },{
      src: Act,
      alt: 'React',
      perc: 'Learning',
    },{
      src: Wordpress,
      alt: 'Wordpress',
      perc: '60%',
    }]

    let exp = [{
      src:Cap1,
      alt:"HTML-CSS-JS project",
      heading:"Real Estate Project",
      text:"This was a project we took on as a final project in a group quickly we ran into a problem because there was no free real estate api so we took a \"World Streets\" Api broke it down to only Albanian Streets, dowloaded 12 building stock images and cycle them for the images of the buildings",
      link: "https://projekti-final-front-end-full.vercel.app/",
      linkText: "View here",
    },
    {
      src:Cap2,
      alt:"React project",
      heading:"React project",
      text:"This was a project I did to get better at react and use the atomic code structure",
      link: "https://test-react-silk-six.vercel.app/",
      linkText: "View here",
    }]



  return (
    <div className='english'>
      <Home 
        h1={'Hello I am Diart Gerxhaliu'}
        text={'Front-End Developer'}
        icons={icons}
        image_src={Me}
        image_alt={'Yours truly'}

      />
      <About
        text={'Hello! I am Diart Gerxhaliu I am a Front-End Web Developer. I enjoy coding so I want it to be my career.'}
        text2={'I am going to university to get my bachelors degree for Computer and Software engeneering!'}
      />
      <BouncyDiv>
      <Languages 
        language={language}
      />
      </BouncyDiv>
      <div className='experience'>
        {exp.map((gal,index)=>{
          return <Work
            key={index}
            src={gal.src}
            alt={gal.alt}
            heading={gal.heading}
            text={gal.text}
            link={gal.link}
            linkText={gal.linkText}
          />
        })}
      </div>
    </div>
  )
}

export default English
