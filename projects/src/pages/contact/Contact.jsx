import './contact.css'
import Header from '../../component/Header'
import headerimg from '../../assets/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <>
    <Header tittle='Get In Touch' image={headerimg}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sunt? Animi pariatur consequatur est blanditiis neque nobis ad culpa 
    </Header>
    <section className="contact">
      <div className="container contact_container">
        <div className="contact_wrapper">
          <a href="#"><MdEmail/></a>
          <a href="#"><BsMessenger/></a>
          <a href="#"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact