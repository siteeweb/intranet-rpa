import React from 'react';
import ButtonRpa from '../components/buttonRpa';
import { Card } from 'react-bootstrap';
import Navbar from '../components/navbar';
import galeria from '../img/galeria.jpg';
import { Link } from 'react-router-dom';

function Inicio () {
  return (

    <div>
        <Navbar title="Inicio"/>
        <div className="container-fluid">
            <div className="row">

                <div className="col-lg-3 col-md-12 col-sm-12 sidebar pb-3">
                    <ButtonRpa
                    url="/nosotros"
                    content="Acerca de nosotros"
                    />
                    <ButtonRpa
                    url="/gestion-de-talento"
                    content="Gestion de Talento"
                    />
                    <ButtonRpa
                    url="/politicas-y-normas"
                    content="Politicas y Normas"
                    />
                </div>

                <div className="col-lg-9 col-md-12 col-sm-12">

                    <div className="row mt-3">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <Card className="alert-secondary">
                                <Card.Body>
                                    <Card.Title className="text-center">Novedades</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li><Link exact to="/back-to-office" className="a-nov">Back to office RPA Latam</Link></li>
                                            <li><Link exact to="/talleres-y-certificaciones" className="a-nov">Talleres y Certificaciones</Link></li>
                                            <li><Link exact to="/navidad" className="a-nov">Compartir Navideño</Link></li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <Card className="alert-primary text-center">
                                <Card.Body>
                                    <Card.Title>Cumpleaños</Card.Title>
                                    <Card.Text>
                                        <p>06/12 Cumpleaños de Frank Palma</p>
                                        <p>13/12 Cumpleaños de Luis Alvarado</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>             
                        </div>
                    </div> 

                    <div className="row mt-3">
                    <h3 className="text-center">Galeria de fotos</h3>
                    <img src={galeria} className="img-fluid" alt="galeria" />
                    </div> 

                </div>
            </div>
        </div>
    </div>
  );
}

export default Inicio;
