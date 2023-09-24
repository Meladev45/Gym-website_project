import './about.css'
import Header from '../../component/Header'
import aboutimg from '../../assets/header_bg_1.jpg'
import story from '../../assets/about1.jpg'
import vision from '../../assets/about2.jpg'
import mission from '../../assets/about3.jpg'

function About() {
  return (
   <>
   <Header tittle='About Us' image={aboutimg}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab labore corporis exercitationem quisquam modi esse veritatis non numquam tempore quos?
   </Header>
   <section className="about_story">
    <div className="container about_story-container">
      <div className="about_image">
        <img src={story} alt="image" />
      </div>
      <div className="about_content">
        <h1>Our Story</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sit reiciendis ratione sapiente soluta repudiandae vero numquam dolore doloribus, dolor nostrum id provident accusantium quam aperiam cum iste? Quam, facere.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel placeat delectus iure vitae magnam cumque adipisci dolor. Reprehenderit, obcaecati distinctio?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, adipisci?</p>
      </div>
    </div>
   </section>

   <section className="about_vision">
    <div className="container about_vision-container">
      <div className="about_content">
        <h1>Our Vision</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sit reiciendis ratione sapiente soluta repudiandae vero numquam dolore doloribus, dolor nostrum id provident accusantium quam aperiam cum iste? Quam, facere.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel placeat delectus iure vitae magnam cumque adipisci dolor. Reprehenderit, obcaecati distinctio?</p>
       
      </div>
      <div className="about_image">
        <img src={vision} alt="image" />
      </div>
    </div>
   </section>


   <section className="about_mission">
    <div className="container about_mission-container">
      <div className="about_image">
        <img src={mission} alt="image" />
      </div>
      <div className="about_content">
        <h1>Our Mission</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sit reiciendis ratione sapiente soluta repudiandae vero numquam dolore doloribus, dolor nostrum id provident accusantium quam aperiam cum iste? Quam, facere.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel placeat delectus iure vitae magnam cumque adipisci dolor. Reprehenderit, obcaecati distinctio?</p>
       
      </div>
    </div>
   </section>
   </>
  )
}

export default About