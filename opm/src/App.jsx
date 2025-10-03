import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./componentes/inicio"
import Fregistro from "./Pages/Fregistro"
import Nav from "./componentes/nav"
import InicioS from "./Pages/InicioS"
import Fcatalogo from "./Pages/pelis"





const App=()=>(

  <BrowserRouter>
   <Nav/>
    <Routes>
      <Route exact path="/" element={<Inicio/>}/>
      <Route exact path="/R_I" element={<Fregistro/>}/>
        <Route path="/login" element={<InicioS />} />
        <Route path="/P_L" element={<Fcatalogo />} />
   
    </Routes>

  </BrowserRouter>
  
)
export default App
