import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import {FaLinkedin,FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
   <footer>
    <div className="container footer_container">
     <article>
        <Link to='/' className='logo'>
            <img src={logo} alt='logo'/>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi temporibus, saepe alias illo beatae deleniti porro distinctio aspernatur architecto ipsum?</p>
        <div className="footer_socials">
            <a href="#"><FaLinkedin/></a>
            <a href="#"><FaFacebook/></a>
            <a href="#"><AiOutlineTwitter/></a>
            <a href="#"><AiFillInstagram/></a>
        </div>
     </article>
     <article>
        <h4>Permalinks</h4>
        <Link to='/about'>About</Link>
        <Link to='/plans'>Plans</Link>
        <Link to='/trainers'>Trainers</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/contact'>Contact</Link>
     </article>

     <article>
        <h4>Insight</h4>
        <Link to='/a'>Blog</Link>
        <Link to='/s'>Case studies</Link>
        <Link to='/t'>Events</Link>
        <Link to='/s'>Communities</Link>
        <Link to='/c'>FAQs</Link>
     </article>

     <article>
        <h4>Get in touch</h4>
        <Link to='/contact'>Contact us</Link>
        <Link to='/s'>support</Link>
     </article>
    </div>
    <div className="footer_copyright">
        <small>2023 Chiemela Emmanuel &copy; All right reserved</small>
    </div>
   </footer>
  )
}

export default Footer