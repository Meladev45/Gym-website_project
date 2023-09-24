import Card from '../UI/Card'

const Trainer = ({image,name,job, socials}) => {
  return (
    <Card className='trainer'>
     <div className="trainer-img">
        <img src={image} alt={name} />
     </div>
     <h3>{name}</h3>
     <p>{job}</p>
     <div className="trainer-socials">
        {
            socials.map((item,idx)=>{
                return <a href={item.link} key={idx}>{item.icon}</a>
            })
        }
     </div>
    </Card>
  )
}

export default Trainer