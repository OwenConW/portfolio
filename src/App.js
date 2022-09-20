import Home from "./components/Home/home"
import "./global.css"
import { Route, Routes} from "react-router-dom"
import Technologies from "./components/Technologies/Technologies"
import Proyects from "./components/Proyects/Proyects"
import Contactme from "./components/Contactme/Contactme"

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path= "/tecnologies" element={<Technologies/>}/>
      <Route exact path= "/proyects" element={<Proyects/>}/>
      <Route exact path= "/contactme" element={<Contactme/>}/> 
    </Routes>
    </>
  );
}

export default App;
