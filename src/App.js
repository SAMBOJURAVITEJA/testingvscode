import { Routes, Route} from 'react-router-dom'

import Bank from './components/Bank'

import Logo from './components/Logo'

import Navbar from './components/Navbar'

import LandingSection from './components/LandingSection'

import './App.css'

const App = () => (
  <div className="totalAppContainer">
      <Routes>
        <Route exact path="/" element={<Navbar/>} />
        <Route exact path="/landing" element={<LandingSection/>} />
        <Route exact path="/logo" element={<Logo/>}/>
        <Route exact path="/bank" element={<Bank/>}/>
      </Routes>
  </div>
)

export default App