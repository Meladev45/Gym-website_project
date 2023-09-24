import { useState } from 'react'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'


const Feaky = ({question,answer}) => {

    const [faq,setfaq] = useState(false)
  return (
   <article className="faq" onClick={()=>{setfaq(!faq)}}>
    <div>
        <h4>{question}</h4>
        <button className="faq_icon" >
        {faq ? <AiOutlineMinus/>: <AiOutlinePlus/>}
        </button>
    </div>
   {faq &&  <p>{answer}</p>}
   </article>
  )
}

export default Feaky