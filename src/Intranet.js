import React from "react";
import './style/Intranet.css';
import Login from './pages/login';
import Inicio from './pages/inicio';
import Nosotros from './pages/nosotros';
import GestiondeTalento from './pages/gestiondeltalento';
import PoliticasyNormas from './pages/politicasynormas';
import Cursos from './pages/cursos';
import Pdf from './pages/pdf/pdf';
import BackToOffice from "./pages/novedades/backtooffice";
import Talleres from "./pages/novedades/talleres";
import Navidad from "./pages/novedades/navidad";
import CronogramaCapa from "./pages/cronogramacapa";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function Intranet() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/gestion-de-talento" element={<GestiondeTalento/>}/>
          <Route path="/politicas-y-normas" element={<PoliticasyNormas/>}/>
          <Route path="/cursos" element={<Cursos/>}/>
          <Route path="/pdf" element={<Pdf/>}/>
          <Route path="/back-to-office" element={<BackToOffice/>}/>
          <Route path="/talleres-y-certificaciones" element={<Talleres/>}/>
          <Route path="/navidad" element={<Navidad/>}/>
          <Route path="/cronograma-de-capacitaciones" element={<CronogramaCapa/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default Intranet;