import React from 'react';
import Navbar from '../../components/navbar';
import ButtonRpa from '../../components/buttonRpa';

function Crud () {
  return (

    <div>
        <Navbar title="registro"/>

        <div className="container mt-5 btnpyn">
          <ButtonRpa
            url="/nuevo-personal"
            content="Registrar nuevo personal"
          />
          <ButtonRpa
            url="/nueva-capacitacion"
            content="Registrar nueva capacitacion"
          />
          <ButtonRpa
            url="/nuevo-curso"
            content="Registrar nuevo curso UDEMY"
          />
          <ButtonRpa
            url="/registro-boletas"
            content="Registro de boletas"
          />
        </div>

    </div>
  );
}

export default Crud;
