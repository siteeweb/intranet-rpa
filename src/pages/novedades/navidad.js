import React from 'react';
import navidad1 from '../../img/navidad1.jpg';
import navidad2 from '../../img/navidad2.jpg';
import navidad3 from '../../img/navidad3.jpg';
import Navbar from '../../components/navbar';
import Title from '../../components/title';

function Navidad () {
  return (
    <div>
      <Navbar
        linkprev="/inicio" 
        prev="inicio / "
        title="Compartir navideño"
      />
      <div className="container">
        <div className='text-center mt-5 mb-5'>
          <Title content="Compartir Navideño"/>
          <p className="txt-center">Entre esfuerzos, logros y reconocimiento transcurrió el año 2021 que no podemos finalizar sin agradecer por su compromiso y dedicación.</p>
          <p className="txt-center">Agradecemos a cada uno de los miembros de la familia RPA Latam , por compartir estas fiestas y pasar un momento de confraternidad.</p>
        </div>
      </div>
      <div className="container center mb-5">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-3">
            <img src={navidad1} className="img-fluid img-border" alt="navidad1"/>
          </div>
          <div className="col-lg-4 col-md-12 mb-3">
            <img src={navidad2} className="img-fluid img-border" alt="navidad2"/>
          </div>
          <div className="col-lg-4 col-md-12 mb-3">
            <img src={navidad3} className="img-fluid img-border" alt="navidad3"/>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navidad;
