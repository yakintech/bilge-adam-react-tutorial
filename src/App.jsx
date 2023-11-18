import { Link, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import NotFound from "./pages/NotFound"
import Customers from "./pages/Customers"

function App() {


  return (<>

    <nav>
      <ul style={{display:'flex', justifyContent:'space-evenly'}}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/customers'>Customers</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>

    <hr></hr>
    <h4>Footer</h4>
  </>



  )
}

export default App
