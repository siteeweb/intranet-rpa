import React from 'react';
import galeria from '../../img/galeria.jpg';
import Navbar from '../../components/navbar';

function BackToOffice () {
  return (
    <div>
      <Navbar title="Novedades"/>
      <div className="container txtNovedades">
        <p className="txt-justify">Back to office RPA Latam</p>
        <p className="txt-justify">Retomamos  nuestra modalidad de trabajo semipresencial en nuestras oficinas de San Isidro (Calle Amador Reyna N° 339. Oficina 601 A)</p>
        <p className="txt-justify">Estamos muy contentos de recibirlos en nuestras instalaciones y a la vez comentarles que tenemos todos los protocolos de bioseguridad para trabajar con normalidad en nuestras oficinas</p>
        <p className="txt-justify">Tener en cuenta que hay que evitar las concentraciones, por lo que se ha definido diferentes grupos para alternar su regreso a oficina.</p>
      </div>
      <div className="container center">
        <img src={galeria} className="img-fluid" alt="galeria"/>
      </div>
    </div>
  );
}

export default BackToOffice;
