import {FaCrown} from 'react-icons/fa'
import Sections from './Sections'
import { programs } from './programs'
import Card from '../UI/Card'
import {SiOpenaigym} from 'react-icons/si'
import {Link}from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'

const Program = () => {
  return (
   <section className="programs">
    <div className="container programs_container">
       <Sections icon={<FaCrown/>} title='Programs'/>
       {/* from here */}

       <div className="programs_wrap">
         {programs.map((items,index)=>{
            return <Card key={items.id} className='programs_program'>
               <span>{<SiOpenaigym/>}</span>
               <h4>{items.title}</h4>
               <small>{items.info}</small>
               <Link to={items.path} className='btn sm'>Learn More <AiFillCaretRight/></Link>
            </Card>
         })}
       </div>

{/* stop here */}
    </div>
   </section>
  )
}

export default Program