import {Link} from 'react-router-dom'
import './index.css'

const Navbar = () => (
  <div className="navbarTotalContainer">
    <nav className="navbarContainer">
      <div className="navbarImageContainer">
        <img
          src="https://res.cloudinary.com/dkajxnnlq/image/upload/v1689052014/sar_home_new_n18oxo.png"
          className="navbarImage"
          alt="navbarImage"
        />
      </div>
      <ul className="navbarListContainer">
        <Link to="/landing" className="Link">
          <li className="navbarList">Profile</li>
        </Link>
        <li className="navbarList logout">
          <button type="button" className="login-button">
            LogOut
          </button>
        </li>
      </ul>
    </nav>
    <div className="footerContainer">
      <img
        className="footerImage"
        alt="footerImage"
        src="https://res.cloudinary.com/dkajxnnlq/image/upload/v1689052014/sar_home_new_n18oxo.png"
      />
    </div>
  </div>
)

export default Navbar