import Sections from "./Sections"
import {FaQuestion} from 'react-icons/fa'
import { faqs } from "./faq"
import Feaky from "./Feaky"

const FAQs = () => {
  return (
    <section className="faqs">
        <div className="container faqs_container">
            <Sections icon={<FaQuestion/>} title='FAQs'/>
            <div className="faqs_wrapper">
                {
                    faqs.map((qa,index)=>{
                        return <Feaky key={index} question={qa.question} answer={qa.answer}/>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs