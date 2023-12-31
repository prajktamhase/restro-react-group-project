import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './Image/White and Gray Illustrative Catering Logo.png'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" >
      <div className="container-fluid">
        <img src={logo} className='logo'/>
        <a className="navbar-brand" href="#">Taste Portal</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item me-5">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>

            <li className="nav-item  me-5">
              <a className="nav-link active" aria-current="page" href="/about">About Us</a>
            </li>
            <li className="nav-item  me-5">
              <a className="nav-link active" aria-current="page" href="/products">Product</a>
            </li>

            <li className="nav-item dropdown  me-5">
              <Link className="nav-link active dropdown-toggle" to="/categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </Link>
              <ul className="dropdown-menu ">
                <li><Link className="dropdown-item" to="/fastfood">Fast Food</Link></li>
                <li><Link className="dropdown-item" to="/vegeterian">Veg</Link></li>
                <li><Link className="dropdown-item" to="/nonveg">Non-Veg</Link></li>
                {/* <li><Link className="dropdown-item" to="./south">South</Link></li> */}
              </ul>
            </li>

            <li className="nav-item  me-5">
              <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
            </li>

            <li className="nav-item  me-5">
              <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </div>
    </nav>
  )
}