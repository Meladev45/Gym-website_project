import Sections from "./Sections"
import {ImQuotesLeft} from 'react-icons/im'
import Card from "../UI/Card"
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import { testimonials } from "./testi"
import { useState } from "react"

const Testimonials = () => {

    const [index,setindex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index]


      const prevTesti = ()=>{
        setindex(index - 1)

        if(index <= 0){
            setindex(testimonials.length - 1)
        }
      }    

      const nextTesti = ()=>{

        setindex(index + 1)

         if(index >= testimonials.length - 1){
            setindex(0)
         }
        

      }    


  return (
    <section className="testimonials">
        <div className="container testimonial_container">
            <Sections className='testimonial_head' icon={<ImQuotesLeft/>} title='Testimonials'/>
            <Card className='testimonial'>
            <div className="testimonial_avater">
               <img src={avatar} alt="avatar" />
            </div>
            <p className="testimonial_quote">{quote}</p>
            <h5>{name}</h5>
            <small className="testimonial_tittle">
                {job}
            </small>
            </Card>
            <div className="testimonails_btn-container">
                <button className="testimonials_btn" onClick={prevTesti}><IoIosArrowDropleftCircle/></button>
                <button className="testimonials_btn" onClick={nextTesti}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials