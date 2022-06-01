import React from 'react';
import navidad from '../../img/navidad.jpg';
import Navbar from '../../components/navbar';

function Navidad () {
  return (
    <div>
      <Navbar title="Novedades"/>
      <div className="container txtNovedades">
        <p className="txt-justify">Compartir Navideño RPA Latam</p>
        <p className="txt-justify">Agradecemos a cada uno de los miembros de la familia RPA Latam , por compartir estas fiestas y pasar un momento de confraternidad.</p>
        <p className="txt-justify">Entre esfuerzos, logros y reconocimiento transcurrió este año 2021 que no podemos finalizar sin agradecer por su compromiso y dedicación.</p>
      </div>
      <div className="container center">
        <img src={navidad} className="img-fluid" alt="navidad"/>
      </div>
    </div>
  );
}

export default Navidad;
