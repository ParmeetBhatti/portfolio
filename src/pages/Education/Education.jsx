import './Education.css'

import Card from '../UI/Card'
import HeadingText from '../../components/HeadingText/HeadingText'

import { education } from '../../data/Data'

export default function Education() {
  return (
    <section className='portfolio'>
      <HeadingText title={'My'} titlePrimary={'Education'} />

      <div className="container portfolio-container">
        {
          education.map(({id, level, school, year ,percent})=>{
            return(
              <Card classname={'project'} key={id}>
                <h1>{level}</h1>
                <h3>{school}</h3>
                <p>{year}</p>
                <p>{percent}</p>
              </Card>
            )
          })
        }
      </div>
    </section>
  )
}
