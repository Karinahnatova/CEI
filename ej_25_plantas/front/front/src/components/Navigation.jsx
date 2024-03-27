import {Link} from 'react-router-dom'

const Navigation = () => {

    return (
    <nav className='nav'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/card">Card</Link></li>
        <li><Link to="/login">Login</Link></li>

      </ul>
    </nav>
    )

}

export default Navigation