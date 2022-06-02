import React from 'react';
import Navbar from '../components/navbar';
import ButtonPdf from '../components/buttonPdf';
import SubTitle from '../components/subtitle';

function PoliticasyNormas () {
  return (

    <div>
        <Navbar
            linkprev="/inicio" 
            prev="inicio / "
            title="Politicas y Normas"
        />

        <div className="container mt-5 btnpyn">
          <SubTitle content="Politicas y Normas"/>
          <ButtonPdf
            url="/pdf-vacaciones"
            content="Enlace: HR001-01 Vacaciones"
          />
          <ButtonPdf
            url="/pdf-permisos-y-licencias"
            content="Enlace: POE - HR004-01 Permisos y Licencias"
          />
          <ButtonPdf
            url="/pdf-descanso-medico"
            content="Enlace: POE - HR008-01 Descansos Médicos"
          />
          <ButtonPdf
            url="/pdf-subsidio-por-enfermedad"
            content="Enlace: POE - HR 006-01 Subsidios por Enfermedad"
          />
          <ButtonPdf
            url="/pdf-licencia-por-paternidad"
            content="Enlace: POE - HR009-01 Licencia por Paternidad"
          />
          <ButtonPdf
            url="/pdf-subsidio-por-maternidad"
            content="Enlace: POE - HR007-01 Subsidio por Maternidad"
          />
          <ButtonPdf
            url="/pdf-cese-de-personal"
            content="Enlace: HR005-01 Cese de Personal"
          />
        </div>

    </div>
  );
}

export default PoliticasyNormas;
