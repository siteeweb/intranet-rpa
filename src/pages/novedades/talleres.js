import React from 'react';
import talleres from '../../img/talleres.jpg';
import Navbar from '../../components/navbar';

function Talleres () {
  return (
    <div>
      <Navbar title="Novedades"/>
      <div className="container txtNovedades">
        <p>Talleres de Entrenamiento y Capacitación</p>
        <p>Nos preocupamos de que estén en capacitación y preparación continúa con las herramientas más demandadas en mercado. </p>
        <p>Durante este año iremos lanzando nuestros cursos de capacitación para sigan reforzando los conceptos y aprendiendo nuevas herramientas.</p>
      </div>
      <div className="container center">
        <img src={talleres} className="img-fluid" alt="talleres"/>
      </div>
    </div>
  );
}

export default Talleres;
