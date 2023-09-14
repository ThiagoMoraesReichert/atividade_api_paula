import Login from "../Login/login"
import Home from "../Home/home"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="home" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas