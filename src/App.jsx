import { Route, Routes } from "react-router-dom"
import Landingpage from "./pages/Landingpage"
import Home from "./pages/Home"
import Header from "./componets/Header"
import Footer from "./componets/Footer"


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    <Footer/>
 
    </>
  )
}

export default App
