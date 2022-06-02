import React from 'react';
import talleres from '../../img/talleres.jpg';
import Navbar from '../../components/navbar';
import Title from '../../components/title';
import SubTitle from '../../components/subtitle';

function Talleres () {
  return (
    <div>
      <Navbar
        linkprev="/inicio" 
        prev="inicio / "
        title="talleres"
      />
      <div className='container mt-5'>
        <div className='text-center mt-5 mb-5'>
          <Title content="Talleres"/>
          <p className='txt-center'>Nos preocupamos de que estén en capacitación y preparación continúa con las herramientas más demandadas en mercado.<br/>
          Durante este año iremos lanzando nuestros cursos de capacitación para sigan reforzando los conceptos y aprendiendo nuevas herramientas.</p>
        </div>
        <div className="row mb-5">
          <div className="col-lg-6 col-md-12 d-flex align-items-center">
            <div>
              <SubTitle content="Ruby on Rails"/>
              <p className="txt-justify">Ruby es un lenguaje de programación desarrollado a principios de los 90 por Yukihiro Mastumoto. Su objetivo era crear un lenguaje de programación mucho menos complejo que los conocidos Java o C++. Quería y consiguió generar un código más rápido y simple de escribir. Aun así, el lenguaje Ruby no triunfó hasta que, en 2008, se combinó con un framework llamado Rails. De esta combinación surgió el espacio de trabajo Ruby on Rails. </p>    
            </div>
          </div>
          <div className="col-lg-6 col-md-12 center">
            <img src={talleres} className="img-fluid" alt="talleres"/>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default Talleres;
