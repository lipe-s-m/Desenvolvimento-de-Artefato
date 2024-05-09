import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/LoginPage";
// import Home from "../Pages/Home/Home";
import Register from "../Pages/Login/RegisterPage";
import Cardapio from "../Pages/Home/Cardapio";
import AgendarHorario from "../Pages/Home/AgendarHorario";

function AppRoutes()
{
    return(
        <BrowserRouter>
            <Routes>
                {/* As Rotas do Sistema */}
                <Route path = "/" element = { <Login/> } />
                {/* <Route path = "/Home" element = { <Home/> } /> */}
                <Route path = "/Register" element = { <Register/> } />
                <Route path = "/Cardapio" element = { <Cardapio/> } />
                <Route path = "/AgendarHorario/:nomeUsuario" element = { <AgendarHorario /> } />
                


            </Routes>
        
        </BrowserRouter>
    )
}
export default AppRoutes;
