import {Link} from 'react-router-dom'

import './index.css'

const Logo = () => (
  <div className="EditLogoContainer">
    <div className="originalCompanyLogo">
      <Link to="/">
        <img
          className="originalLogo"
          alt="originalCompanyLogo"
          src="https://res.cloudinary.com/dkajxnnlq/image/upload/v1689052014/sar_home_new_n18oxo.png"
        />
      </Link>
    </div>

    <div className="editDetails">
      <h1>You Can edit Your Company Logo Image</h1>

      <input className="LogoFileInput" type="file" />

      <Link to="/" className="Link">
        <button className="login-button" id="LogoButton" type="button">
          Update
        </button>
      </Link>
    </div>
  </div>
)

export default Logo