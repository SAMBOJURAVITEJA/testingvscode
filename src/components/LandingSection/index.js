import {Component} from 'react'

import {Link} from 'react-router-dom'

import {AiFillEdit} from 'react-icons/ai'

import './index.css'

class LandingSection extends Component {
  state = {
    personalData: {
      FullName: 'Raviteja Samboju',

      PhoneNumber: 9381250033,

      Email: 'ravitejasamboju@gmail.com',

      AadharNumber: 45679969000,

      PanNumber: 'CCYPT1120A',

      PermanentAddress: 'MustafaNagar Near Lumbini School Khammam',

      TemporaryAddress: 'MustafaNagar Near Lumbini School Khammam',

      AccountNumber: '345677880',

      FranchiseLogo:
        'https://res.cloudinary.com/dkajxnnlq/image/upload/v1689051197/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector_zmxdvg.jpg',
    },
  }

  render() {
    const {personalData} = this.state

    const {
      FranchiseLogo,

      AccountNumber,

      FullName,

      PhoneNumber,

      Email,

      AadharNumber,

      PanNumber,

      PermanentAddress,

      TemporaryAddress,
    } = personalData

    return (
      <div className="LandingContainer">
        <div className="originalCompanyLogo">
          <Link to="/" className="Link">
            <img
              className="originalLogo"
              alt="originalCompanyLogo"
              src="https://res.cloudinary.com/dkajxnnlq/image/upload/v1689052014/sar_home_new_n18oxo.png"
            />
          </Link>
        </div>

        <h1>Hi {FullName}! Welcome To the Landing Page</h1>

        <p className="para">COMPANY LOGO</p>

        <ul className="LogoContainer">
          <li>
            <img src={FranchiseLogo} alt="FranchiseLogo" className="Logo" />
          </li>

          <Link className="Link" to="/Logo">
            <li>
              <AiFillEdit size="30" color="black" />
            </li>
          </Link>
        </ul>

        <p className="para">PERSONAL INFORMATION</p>

        <div className="personalContainer">
          <ul>
            <li>
              <span>FULL NAME:</span>

              {FullName}
            </li>

            <li>
              <span>PHONE NUMBER:</span>

              {PhoneNumber}
            </li>

            <li>
              <span>EMAIL:</span>

              {Email}
            </li>

            <li>
              <span>PERMANENT ADDRESS:</span>

              {PermanentAddress}
            </li>

            <li>
              <span>TEMPORARY ADDRESS:</span>

              {TemporaryAddress}
            </li>

            <li>
              <span>ADDHAR NUMBER</span>

              {AadharNumber}
            </li>

            <li>
              <span>PAN NUMBER</span>

              {PanNumber}
            </li>

            <li>
              <span>ACCOUNT NUMBER:</span>

              {AccountNumber}
            </li>
          </ul>

          <Link to="/bank" className="Link">
            <div className="editLogoImage">
              <AiFillEdit size="30" color="black" />
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default LandingSection