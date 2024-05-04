import './Projects.css'

import Card from '../UI/Card'
import HeadingText from '../../components/HeadingText/HeadingText'

import { projects } from '../../data/Data'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
  return (
    <section className='portfolio'>
      <HeadingText title={'Recent'} titlePrimary={'Work'} />

      <div className="container portfolio-container">
        {
          projects.map(({id, img, name, des, github, host})=>{
            return(
              <Card classname={'project'} key={id}>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{des}</p>
                <div className="links">
                <span><a href={github} target='_blank'><FontAwesomeIcon icon={faGithub} /></a></span>
                <span><a href={host} target='_blank'><FontAwesomeIcon icon={faGlobe} /></a></span>
                </div> 
              </Card>
            )
          })
        }
      </div>
    </section>
  )
}
