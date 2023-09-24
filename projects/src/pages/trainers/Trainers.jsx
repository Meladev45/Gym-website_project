import Header from '../../component/Header'
import headerimg from '../../assets/header_bg_5.jpg'
import { trainers } from './train'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import './trainers.css'
import Trainer from '../../component/Trainer'

const Trainers = () => {
  return (
   <>
   <Header tittle='Our Trainers' image={headerimg}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptate obcaecati sint voluptatem voluptatum exercitationem aperiam quod? Amet, suscipit. Necessitatibus.
   </Header>
   <section className="trainers">
    <div className="container trainers_container">
      {
        trainers.map((train,index)=>{
          return <Trainer key={index} image={train.image} name={train.name} job={train.job} socials={
            [
              {icon: <BsInstagram/>, link: train.socials[0]},
              {icon: <AiOutlineTwitter/>, link: train.socials[1]},
              {icon: <FaFacebookF/>, link: train.socials[2]},
              {icon: <FaLinkedinIn/>, link: train.socials[3]}
            ]
          }/>  
        })
      }
    </div>
   </section>
   </>
  )
}

export default Trainers