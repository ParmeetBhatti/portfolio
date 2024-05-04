import './Home.css'
import HeaderImage from '../../assets/header.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <header>
      <div className="container container-lg header-container">
        <img src={HeaderImage} alt="" />
      
        <div className='header-right'>
          <h1>
            <span>Hi,   I am Parmeet Bhatti</span><br/>
            Web Programmer
          </h1>
          <p>
            Welcome to my portfolio! I'm currently pursuing a Bachelor's in Technology with a focus on Information Technology and Honors in Artificial Inteligence from K J Somaiya College of Engineering. 
          </p>
          <Link className='btn' to={'/about'}>
            About Me
            <span><FontAwesomeIcon icon={faArrowRight} /></span>
          </Link>
          <div className="cont">
            <a href="tel:+9619584106"><FontAwesomeIcon icon={faPhone} /></a>
            <a href="mailto:parmeetbhatti2003@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="https://github.com/ParmeetBhatti" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
      </div>
    </header>
  )
}
