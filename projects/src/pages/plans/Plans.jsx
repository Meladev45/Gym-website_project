import Header from '../../component/Header'
import headerimg from '../../assets/header_bg_4.jpg'
import Card from '../../UI/Card'
import { plan } from './plan'
import './plans.css'

const Plans = () => {
  return (
   <>
   <Header tittle='Membership Plans' image={headerimg}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nulla animi obcaecati omnis voluptatum molestiae, cupiditate amet harum expedita perspiciatis.

   </Header>
   <section className="plans">
    <div className="container plans_container">
      {plan.map((item,index)=>{
        return <Card key={index} className='plan'>
           <h3>{item.name}</h3>
           <small>{item.desc}</small>
           <h1>{`$${item.price}`}</h1><h2>/mo</h2>
           <h4>Features</h4>
           {
            item.features.map((feature,idx)=>{
               return <p key={idx} className={!feature.available ? 'disable':''}>{feature.feature}</p>
            })
           }
           <button className='btn kg'>Choose Plan</button>
        </Card>
      })}
    </div>
   </section>
   </>
  )
}

export default Plans