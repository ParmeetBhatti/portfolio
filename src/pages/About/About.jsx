import './About.css'
import CV from '../../assets/Parmeet_CV .pdf'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'


import HeadingText from '../../components/HeadingText/HeadingText'
import Card from '../UI/Card'
import Tools from '../../components/Tools/Tools'
import Services from '../../components/Services/Services'

export default function About() {
  return (
    <>
    <section className='About'>
      <HeadingText title={'About'} titlePrimary={'Me'}/>
      
      <div className='container about-container'>
        <div className='about-left'>
          <h3>I am Parmeet Bhatti</h3>
          <p>
          I'm currently pursuing a Bachelor's in Technology with a focus on Information Technology and Honors in Artificial Inteligence from K J Somaiya College of Engineering. 
          </p>
          <p>I'm also passionate about Lawn Tennis and have been playing the sport for 9 years and was nationally ranked in Men's category and Top-200 in U-16 category.</p>
          
        </div>

        <div className='about-right'>
          
          <a href={CV} download className='btn'>
            Download CV <span><FontAwesomeIcon icon={faDownload} /></span>
          </a>
        </div>
      </div>
    </section>
    <Tools />
    <Services />
    </>
  )
}
