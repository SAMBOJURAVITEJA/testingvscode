import {Component} from 'react'
import {Link,Navigate} from 'react-router-dom'

import './index.css'



class Bank extends Component {
  
  state = {
    personalData: {
      FullName: 'Raviteja Samboju',

      PhoneNumber: 9381250033,

      Email: 'ravitejasamboju@gmail.com',
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gi
      AadharNumber: 45679969000,

      PanNumber: 'CCYPT1120A',

      PermanentAddress: 'MustafaNagar Near Lumbini School Khammam',

      TemporaryAddress: 'MustafaNagar Near Lumbini School Khammam',

      AccountNumber: 345677880,
    },
    uploadStatus:false
  }

  submitForm = event => {
    event.preventDefault()
    const {personalData} = this.state
    console.log(personalData)
    this.setState({uploadStatus:true})
    
  }

  changeFullName = event => {
    this.setState(prevState => ({
      personalData: {...prevState.personalData, FullName: event.target.value},
    }))
  }

  changePhoneNumber = event => {
    this.setState(prevState => ({
      personalData: {
        ...prevState.personalData,

        PhoneNumber: event.target.value,
      },
    }))
  }

  changeEmail = event => {
    this.setState(prevState => ({
      personalData: {...prevState.personalData, Email: event.target.value},
    }))
  }

  changeAccountNumber = event => {
    this.setState(prevState => ({
      personalData: {
        ...prevState.personalData,

        AccountNumber: event.target.value,
      },
    }))
  }

  changeAadharNumber = event => {
    this.setState(prevState => ({
      personalData: {
        ...prevState.personalData,

        AadharNumber: event.target.value,
      },
    }))
  }

  changePanNumber = event => {
    this.setState(prevState => ({
      personalData: {...prevState.personalData, PanNumber: event.target.value},
    }))
  }

  changeTemporaryAddress = event => {
    this.setState(prevState => ({
      personalData: {
        ...prevState.personalData,

        TemporaryAddress: event.target.value,
      },
    }))
  }

  changePermanentAddress = event => {
    this.setState(prevState => ({
      personalData: {
        ...prevState.personalData,

        PermanentAddress: event.target.value,
      },
    }))
  }
  

  renderFullName = () => {
    const {personalData} = this.state

    const {FullName} = personalData
    
    return (
      <>
        <label className="input-label" htmlFor="FullName">
          FULL NAME
        </label>

        <input
          type="text"
          className="phoneNumber-input-field"
          onChange={this.changeFullName}
          id="FullName"
          defaultValue={FullName}
          placeholder="Enter Your Full Name"
        />
      </>
    )
  }

  renderEmail = () => {
    const {personalData} = this.state

    const {Email} = personalData

    return (
      <>
        <label className="input-label" htmlFor="Email">
          EMAIL
        </label>

        <input
          type="text"
          className="phoneNumber-input-field"
          onChange={this.changeEmail}
          id="Email"
          defaultValue={Email}
          placeholder="Enter Your Email"
        />
      </>
    )
  }

  renderPhoneNumber = () => {
    const {personalData} = this.state

    const {PhoneNumber} = personalData

    return (
      <>
        <label className="input-label" htmlFor="PhoneNumber">
          PHONE NUMBER
        </label>

        <input
          type="text"
          className="phoneNumber-input-field"
          placeholder="Enter Your Phone Number"
          onChange={this.changePhoneNumber}
          id="PhoneNumber"
          defaultValue={PhoneNumber}
        />
      </>
    )
  }

  renderPanNumber = () => {
    const {personalData} = this.state

    const {PanNumber} = personalData

    return (
      <>
        <label className="input-label" htmlFor="PanNumber">
          PAN NUMBER
        </label>

        <input
          type="text"
          id="PanNumber"
          className="password-input-field"
          defaultValue={PanNumber}
          onChange={this.changePanNumber}
          placeholder="Enter Your Pan Number"
        />
      </>
    )
  }

  renderAccountNumber = () => {
    const {personalData} = this.state

    const {AccountNumber} = personalData

    return (
      <>
        <label className="input-label" htmlFor="AccountNumber">
          ACCOUNT NUMBER
        </label>

        <input
          type="text"
          id="AccountNumber"
          className="password-input-field"
          defaultValue={AccountNumber}
          onChange={this.changeAccountNumber}
          placeholder="Enter Your Account Number"
        />
      </>
    )
  }

  renderAadharNumber = () => {
    const {personalData} = this.state

    const {AadharNumber} = personalData

    return (
      <>
        <label className="input-label" htmlFor="AadharNumber">
          AADHAR NUMBER
        </label>

        <input
          type="text"
          id="AadharNumber"
          className="password-input-field"
          defaultValue={AadharNumber}
          onChange={this.changeAadharNumber}
          placeholder="Enter Your Aadhar Number"
        />
      </>
    )
  }

  renderPermanentAddress = () => {
    const {personalData} = this.state

    const {PermanentAddress} = personalData

    return (
      <>
        <label className="input-label" htmlFor="PermanentAddress">
          PERMANENT ADDRESS
        </label>

        <input
          type="text"
          id="PermanentAddress"
          className="password-input-field"
          defaultValue={PermanentAddress}
          onChange={this.changePermanentAddress}
          placeholder="Enter Your Permanent Address"
        />
      </>
    )
  }

  renderTemporaryAddress = () => {
    const {personalData} = this.state

    const {TemporaryAddress} = personalData

    return (
      <>
        <label className="input-label" htmlFor="TemporaryAddress">
          TEMPORARY ADDRESS
        </label>

        <input
          type="text"
          id="TemporaryAddress"
          className="password-input-field"
          defaultValue={TemporaryAddress}
          onChange={this.changeTemporaryAddress}
          placeholder="Enter Your Temporary Address"
        />
      </>
    )
  }

  render() {
    const {uploadStatus} = this.state 
    if(uploadStatus){
      return <Navigate to='/'/>
    }
    return (
      <div className="bankContainer">
        <h1>You Can Edit Your Personal Information</h1>

        <div className="login-form-container">
          <form className="form-container signup" onSubmit={this.submitForm} >
            <Link to="/">
              <img
                className="originalLogo"
                alt="originalCompanyLogo"
                src="https://res.cloudinary.com/dkajxnnlq/image/upload/v1689052014/sar_home_new_n18oxo.png"
              />
            </Link>

            <div className="input-container">{this.renderFullName()}</div>

            <div className="input-container">{this.renderPhoneNumber()}</div>

            <div className="input-container">{this.renderEmail()}</div>

            <div className="input-container">
              {this.renderPermanentAddress()}
            </div>


            <div className="input-container">
              {this.renderTemporaryAddress()}
            </div>

            <div className="input-container">{this.renderAccountNumber()}</div>

            <div className="input-container">{this.renderPanNumber()}</div>

            <div className="input-container">{this.renderAadharNumber()}</div>

            <button type="submit" className="login-button" >
              Update Details
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Bank