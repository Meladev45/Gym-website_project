import './home.css'
import MainHeader from '../../component/MainHeader'
import Program from '../../component/Program'
import Values from '../../component/Values'
import FAQs from '../../component/FAQs'
import Testimonials from '../../component/Testimonials'



const Home = () => {
  return (
  <div>
     <MainHeader/>
   <Program/>
   <Values/>
   <FAQs/>
   <Testimonials/>
  </div>
  )
}

export default Home