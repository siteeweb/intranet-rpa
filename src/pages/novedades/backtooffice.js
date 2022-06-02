import React from 'react';
import backtooffice1 from '../../img/backtooffice1.jpg';
import backtooffice2 from '../../img/backtooffice2.jpg';
import backtooffice3 from '../../img/backtooffice3.jpg';
import Navbar from '../../components/navbar';
import Title from '../../components/title';

function BackToOffice () {
  return (
    <div>
        <Navbar
            linkprev="/inicio" 
            prev="inicio / "
            title="Back to office"
        />
      <div className="container">
        <div className='text-center mt-5 mb-5'>
          <Title content="Back to Office"/>
          <p className="txt-center">Retomamos  nuestra modalidad de trabajo semipresencial en nuestras oficinas</p>
          <p className="txt-center">Estamos muy contentos de recibirlos en nuestras instalaciones y a la vez comentarles que tenemos todos los protocolos de bioseguridad para trabajar con normalidad en nuestras oficinas</p>
          <p className="txt-center">Tener en cuenta que hay que evitar las concentraciones, por lo que se ha definido diferentes grupos para alternar su regreso a oficina.</p>
        </div>
      </div>
      <div className="container center mb-5">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-3">
            <img src={backtooffice1} className="img-fluid img-border" alt="backtooffice1"/>
          </div>
          <div className="col-lg-4 col-md-12 mb-3">
            <img src={backtooffice2} className="img-fluid img-border" alt="backtooffice2"/>
          </div>
          <div className="col-lg-4 col-md-12 mb-3">
            <img src={backtooffice3} className="img-fluid img-border" alt="backtooffice3"/>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackToOffice;
