import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import LaDolceVita from "./Pages/LaDolceVita";


const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ladolcevita" element={<LaDolceVita />}/>

    </Routes>
)

export default Rotas