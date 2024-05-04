import './Services.css'

import Card from '../../pages/UI/Card'
import HeadingText from '../HeadingText/HeadingText'

import { services } from '../../data/Data'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Services() {
  return (
    <section className='services'>
        <HeadingText title={'What I'}  titlePrimary={'offer'} />

        <div className="container services-container">
            {
                services.map(({id ,icon ,name ,des })=>{
                    return(
                        <Card key={id} classname={'services-card'}>
                            <span><FontAwesomeIcon icon={icon} /></span>
                            <h3>{name}</h3>
                            <p>{des}</p>
                        </Card>
                    )
                })
            }
        </div>
    </section>
  )
}
