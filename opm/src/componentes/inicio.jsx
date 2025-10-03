import { Typewriter } from "react-simple-typewriter"
import Nav from "./nav"
import Carrusel from "./carrusel"
import { AiFillBackward } from "react-icons/ai"
import './styles/inicio.css'
const Inicio=()=>(
    <div>
    <div className="fondo">
        {/* Titulo */}
        <h1 className="letra">
            <Typewriter
            words={['Tutu']}
            loop={Infinity}
            cursor
            cursorStyle={<AiFillBackward />}
            typeSpeed={700}
            deleteSpeed={500}
            delaySpeed={3000}
            />
        </h1>
        <Nav/>
        </div>
        <div className="center">
        <div className="fondonav">
        <Carrusel/>
        </div>
        </div>
    </div>
)
export default Inicio