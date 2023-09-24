import Header from '../../component/Header'
import headerimg from '../../assets/header_bg_3.jpg'
import './gallery.css'
import { image } from './img'



const Gallery = () => {

 
  return (
   <>
   <Header tittle='Our Gallery' image={headerimg}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ratione veniam aliquam quos nostrum fugiat, aliquid incidunt blanditiis iusto, vitae possimus repellat soluta explicabo facere dolorum repellendus dignissimos beatae nam.
   </Header>

   <section className="gallery">
    <div className="container gallery_container">
    {
      image.map((img,index)=>{
        return  <article key={index}>
        <img src={img} alt="img" />
       </article>
      })
    }
    </div>
   </section>
   </>
  )
}

export default Gallery