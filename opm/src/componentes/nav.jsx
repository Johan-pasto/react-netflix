import { Link } from "react-router-dom"
import { VscBookmark } from "react-icons/vsc"
import { IoAccessibility } from "react-icons/io5"
import './styles/nav.css'
const Nav=()=>(
    <div className="aling">
        <Link><p className="text"><VscBookmark />Inicio</p></Link>
        <Link><p className="text"><IoAccessibility />Peliculas</p></Link>
        <Link to='/R_I'><p className="text">Registro</p></Link>
        <Link to='/Login'><p className="text">Login</p></Link>
        
    </div>
)
export default Nav