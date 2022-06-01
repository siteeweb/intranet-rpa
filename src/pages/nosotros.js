import React from 'react';
import Navbar from '../components/navbar';
import SubTitle from '../components/subtitle';
import Title from '../components/title';
import nosotros from '../img/nosotros.jpeg'
import logoLogin from '../img/logo-login-rpa.png';
import valores1 from '../img/nuestrosvalores1.jpg';
import valores2 from '../img/nuestrosvalores2.jpg';

function Nosotros () {
  return (

    <div>
        <Navbar title="Acerca de Nosotros"/>
        <div className="container mt-5 mb-5">
            <div className="row mb-5">
              <div className="col-lg-7 col-md-12 d-flex align-items-center">
                <div>
                  <SubTitle content="Nosotros"/>
                  <p className="txt-justify">Somos una empresa dedicada a brindar servicios de calidad. Nuestra orientación empresarial está en convertirnos en los socios estratégicos y asesores tecnológicos de nuestros clientes. </p>
                  <p className="txt-justify">Siempre buscamos impactar positivamente; por ello, combinamos creatividad y conocimientos de TI en el desarrollo de soluciones innovadoras que puedan transformar y potenciar tu empresa.</p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <img src={nosotros} className="img-fluid img-border" alt="nosotros" />
              </div>
            </div>
            
            <div className="row mb-5">
              <div className="text-center mb-5">
                <Title content="Nuestros Principios"/>
                <p className="txt-center">El sentido de ética merece destacarse como el pilar fundamental de nuestra empresa donde descansa nuestra cultura organizacional y está formada por un conjunto de valores que soportan nuestra visión, misión y guían nuestro accionar diario en la empresa.</p>
              </div>
              <div className="col-lg-7 col-md-12 d-flex align-items-center">
                <div>
                  <SubTitle content="Misión"/>
                  <p className="txt-justify">Somos una compañía dedicada a la creación y mejora de productos en tecnología digital, combinado las mejores prácticas de ingeniería, innovación y diseño.</p>

                  <SubTitle content="Visión"/>
                  <p className="txt-justify">Transformar digitalmente al Perú y Latinoamérica</p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 d-flex align-items-center justify-content-center">
                <img src={logoLogin} className="img-fluid" alt="logologin" style={{width:"300px"}}/>
              </div>
            </div>

            <div className="row mb-5">
              <div className="text-center mb-5">
                <Title content="Nuestros valores"/>
                <p className="txt-center">Desde sus inicios la empresa ha mantenido tres valores fundamentales: Compromiso, Excelencia y Transparencia. Estos valores ahora han sido descompuestos en seis valores individuales que responden a la mayor madurez de nuestra organización para perseguir nuestra visión y misión.</p>
              </div>
              <div className="col-lg-5 mb-5 col-md-12 d-flex align-items-center justify-content-center">
                <img src={valores1} className="img-fluid img-border" alt="valores1"/>
              </div>
              <div className="col-lg-7 col-md-12 d-flex align-items-center">
                <div>
                  <ul className="txt-justify">
                    <li><p><strong>Integridad: </strong>Mantener y cumplir nuestros compromisos hacia los clientes, la empresa con transparencia y honestidad.</p></li>
                    <li><p><strong>Pasión: </strong>Por ser los mejores profesionales, por nuestra empresa y por nuestros clientes.</p></li>
                    <li><p><strong>Respeto: </strong>Tratar a los demás con paciencia, imparcialidad y dignidad.</p></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-lg-7 col-md-12 d-flex align-items-center">
                <div>
                  <ul className="txt-justify">
                    <li><p><strong>Excelencia: </strong>Ejecutar las cosas de la mejor forma, entregando servicios de calidad con retroalimentación y mejora continua.</p></li>
                    <li><p><strong>Responsabilidad: </strong>Cumpliendo con nuestros objetivos y compromisos frente a los clientes, la empresa y al medio ambiente.</p></li>
                    <li><p><strong>Diversidad: </strong>Respetar y valorar las diferencias culturales e individuales de todos con un ambiente de trabajo inclusivo amigable con las distintas perspectivas y pensamientos.</p></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 d-flex align-items-center justify-content-center">
                <img src={valores2} className="img-fluid img-border" alt="valores2"/>
              </div>
            </div>

        </div>

    </div>
  );
}

export default Nosotros;
