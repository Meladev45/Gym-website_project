import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import Notfound from './pages/notfound/Notfound'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

function App() {
  return (
   <BrowserRouter>
    <Navbar/>
   <Routes>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='gallery' element={<Gallery/>}/>
    <Route path='plans' element={<Plans/>}/>
    <Route path='trainers' element={<Trainers/>}/>
    <Route path='*' element={<Notfound/>}/>
   </Routes>
   <Footer/>
    </BrowserRouter>
  
  )
}

export default App