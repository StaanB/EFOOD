import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import LaDolceVita from "./Pages/LaDolceVita";
import HiokiSushi from "./Pages/HiokiSushi";
import CasaDoPorco from "./Pages/CasaDoPorco";
import ChezBernad from "./Pages/ChezBernard";
import Malimari from "./Pages/Malimari";
import BellaNapoli from "./Pages/Bellanapoli";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ladolcevita" element={<LaDolceVita />} />
    <Route path="/hiokisushi" element={<HiokiSushi />} />
    <Route path="/casadoporco" element={<CasaDoPorco />} />
    <Route path="/chezbernard" element={<ChezBernad />} />
    <Route path="/malimari" element={<Malimari />} />
    <Route path="/bellanapoli" element={<BellaNapoli />} />
  </Routes>
);

export default Rotas;
