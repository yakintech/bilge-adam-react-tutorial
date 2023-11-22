import { Link, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import NotFound from "./pages/NotFound"
import Customers from "./pages/Customers"
import EffectSample from "./effect/EffectSample"
import AxiosSample from "./effect/AxiosSample"
import Users from "./pages/Users"
import UserDetail from "./pages/UserDetail"
import Films from "./pages/Films"
import Intro from "./mui/Intro"
import GridSample from "./mui/GridSample"
import DataGridSample from "./mui/DataGridSample"

function App() {


  return (<>
    <nav>
      <ul style={{display:'flex', justifyContent:'space-evenly'}}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/customers'>Customers</Link></li>
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/films'>Films</Link></li>
        <li><Link to='/mui'>MUI Intro</Link></li>
        <li><Link to='/grid'>MUI Grid</Link></li>
        <li><Link to='/datagrid'>MUI Data Grid</Link></li>
        

      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetail />} />
      <Route path="/films" element={<Films />} />
      <Route path="/mui" element={<Intro />} />
      <Route path="/grid" element={<GridSample />} />
      <Route path="/datagrid" element={<DataGridSample />} />

      <Route path="*" element={<NotFound/>} />
    </Routes>

    <hr></hr>
    <h4>Footer</h4>
  </>



  )
}

export default App
