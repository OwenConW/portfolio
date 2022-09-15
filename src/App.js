import Home from "./components/Home/home"
import "./global.css"
import { Route, Routes} from "react-router-dom"
import Technologies from "./components/Technologies/Technologies"

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path= "/tecnologies" element={<Technologies/>}/>
    </Routes>
    </>
  );
}

export default App;
