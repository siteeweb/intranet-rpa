import React from "react";
import './style/Intranet.css';
import Login from './pages/login';
import Crud from "./pages/crud/dashboard";
import Inicio from './pages/inicio';
import Nosotros from './pages/nosotros';
import GestiondeTalento from './pages/gestiondeltalento';
import PoliticasyNormas from './pages/politicasynormas';
import Cursos from './pages/cursos';
import BackToOffice from "./pages/novedades/backtooffice";
import Talleres from "./pages/novedades/talleres";
import Navidad from "./pages/novedades/navidad";
import CronogramaCapa from "./pages/cronogramacapa";
import Payroll from "./pages/payroll";

import PdfVacaciones from './pages/pdf/hr001-01';
import PdfPermisosyLicencias from "./pages/pdf/hr004-01";
import PdfCesePersonal from "./pages/pdf/hr005-01";
import PdfSubsidiosxEnfermedad from "./pages/pdf/hr006-01";
import PdfSubsidiosxMaternidad from "./pages/pdf/hr007-01";
import PdfDescansoMedico from "./pages/pdf/hr008-01";
import PdfLicenciaxPaternidad from "./pages/pdf/hr009-01";

import NuevoPersonal from "./pages/crud/form-nuevo-personal";
import NuevaCapacitacion from "./pages/crud/form-nueva-capacitacion";
import NuevoCurso from "./pages/crud/form-nuevo-curso";
import RegistroBoletas from "./pages/crud/form-reg-blt";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function Routers() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/dashboard" element={<Crud/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/gestion-de-talento" element={<GestiondeTalento/>}/>
          <Route path="/politicas-y-normas" element={<PoliticasyNormas/>}/>
          <Route path="/cursos" element={<Cursos/>}/>
          <Route path="/back-to-office" element={<BackToOffice/>}/>
          <Route path="/talleres-y-certificaciones" element={<Talleres/>}/>
          <Route path="/navidad" element={<Navidad/>}/>
          <Route path="/cronograma-de-capacitaciones" element={<CronogramaCapa/>}/>
          <Route path="/payroll" element={<Payroll/>}/>

          <Route path="/pdf-vacaciones" element={<PdfVacaciones/>}/>
          <Route path="/pdf-permisos-y-licencias" element={<PdfPermisosyLicencias/>}/>
          <Route path="/pdf-descanso-medico" element={<PdfDescansoMedico/>}/>
          <Route path="/pdf-subsidio-por-enfermedad" element={<PdfSubsidiosxEnfermedad/>}/>
          <Route path="/pdf-licencia-por-paternidad" element={<PdfLicenciaxPaternidad/>}/>
          <Route path="/pdf-subsidio-por-maternidad" element={<PdfSubsidiosxMaternidad/>}/>
          <Route path="/pdf-cese-de-personal" element={<PdfCesePersonal/>}/>

          <Route path="/nuevo-personal" element={<NuevoPersonal/>}/>
          <Route path="/nueva-capacitacion" element={<NuevaCapacitacion/>}/>
          <Route path="/nuevo-curso" element={<NuevoCurso/>}/>
          <Route path="/registro-boletas" element={<RegistroBoletas/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default Routers;