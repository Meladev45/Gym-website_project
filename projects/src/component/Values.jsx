import image from '../assets/values.jpg'
import Sections from './Sections'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from './value'
import Card from '../UI/Card'
import {SiOpenaigym} from 'react-icons/si'

const Values = () => {
  return (
   <section className="values">
    <div className="container values_container">
        <div className="values_left">
        <div className="values_image">
            <img src={image} alt="valuesimg" />
        </div>
        </div>
        <div className="values_right">
            <Sections icon={<GiCutDiamond/>} title='Values'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nostrum perferendis dolores fuga sequi sint assumenda ratione voluptates, est quae ullam esse asperiores reprehenderit dignissimos laboriosam molestias dolor et atque.</p>
            <div className="values_wrapper">
                {
                    values.map((value,index)=>{
                        return <Card className='values_value' key={index}>
                             <span>{<SiOpenaigym/>}</span>
                             <h4>{value.title}</h4>
                               <small>{value.desc}</small>
                        </Card>
                    })
                }
            </div>
        </div>
    </div>
   </section>
  )
}

export default Values