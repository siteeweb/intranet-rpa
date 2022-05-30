import React from 'react';
import Navbar from '../components/navbar';
import ButtonPdf from '../components/buttonPdf';

function PoliticasyNormas () {
  return (

    <div>
        <Navbar title="Politicas y Normas"/>

        <div className="container mt-5 btnpyn">
          <ButtonPdf
            url="/pdf"
            content="Enlace: HR001-01 Vacaciones"
          />
          <ButtonPdf
            url="#"
            content="Enlace: POE - HR004-01 Permisos y Licencias"
          />
          <ButtonPdf
            url="#"
            content="Enlace: POE - HR008-01 Descansos Médicos"
          />
          <ButtonPdf
            url="/nosotros"
            content="Enlace: POE - HR 006-01 Subsidios por Enfermedad"
          />
          <ButtonPdf
            url="#"
            content="Enlace: POE - HR009-01 Licencia por Paternidad"
          />
          <ButtonPdf
            url="#"
            content="Enlace: POE - HR007-01 Subsidio por Maternidad"
          />
          <ButtonPdf
            url="#"
            content="Enlace: HR005-01 Cese de Personal"
          />
        </div>

    </div>
  );
}

export default PoliticasyNormas;
