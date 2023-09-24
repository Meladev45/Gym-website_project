import {Link} from 'react-router-dom'
import './notfound.css'

const Notfound = () => {
  return (
  <section>
    <div className="container notfound_container">
      <h2>page Not found</h2>
      <Link to='/' className='btn'>Go Back Home</Link>
    </div>
  </section>
  )
}

export default Notfound