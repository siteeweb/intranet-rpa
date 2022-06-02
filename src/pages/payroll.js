import React from 'react';
import Navbar from '../components/navbar';
import { Table, Form, Button, InputGroup } from 'react-bootstrap';
import SubTitle from '../components/subtitle';

function Payroll () {
  return (

    <div>
        <Navbar
            linkprev="/gestion-de-talento" 
            prev="gestion de talento / "
            title="payroll"
        />

        <div className="container mt-5">
            <SubTitle content="Payroll"/>

            <div className="row mb-3">
                <p>Boletas</p>
                <div className="col-lg-4 col-md-6 mb-3">
                    <InputGroup>
                        <InputGroup.Text id="mes">Mes: </InputGroup.Text>                    
                        <Form.Select aria-label="month" aria-describedby="mes">
                            <option></option>
                            <option value="Ene">Enero</option>
                            <option value="Feb">Febrero</option>
                            <option value="Mar">Marzo</option>
                            <option value="Abr">Abril</option>
                            <option value="May">Mayo</option>
                            <option value="Jun">Junio</option>
                            <option value="Jul">Julio</option>
                            <option value="Ago">Agosto</option>
                            <option value="Sep">Septiembre</option>
                            <option value="Oct">Octubre</option>
                            <option value="Nov">Noviembre</option>
                            <option value="Dic">Diciembre</option>
                        </Form.Select>
                    </InputGroup>
                </div>

                <div className="col-lg-4 col-md-6 mb-3">
                    <InputGroup>
                        <InputGroup.Text id="anho">Año: </InputGroup.Text>
                        <Form.Select aria-label="year" aria-describedby="anho">
                            <option></option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </Form.Select>
                    </InputGroup>
                </div>
        
                <div className="col-lg-4 col-md-12 mb-3">
                    <Button variant="success" className="form-control">Visualizar</Button>
                </div>
            </div>

            <div className="row mb-3">
                <p>Record de vacaciones</p>
                <div className="col-lg-6 col-md-6 mb-3">
                    <InputGroup>
                        <InputGroup.Text id="saldo-vacaciones">Saldo de vacaciones: </InputGroup.Text>                    
                        <Form.Control type="text" placeholder="" />
                    </InputGroup>
                </div>

                <div className="col-lg-6 col-md-6 mb-3">
                    <InputGroup>
                        <InputGroup.Text id="periodo">Periodo: </InputGroup.Text>
                        <Form.Select aria-label="periodo" aria-describedby="periodo">
                            <option></option>
                            <option value="20182019">2018 - 2019</option>
                            <option value="20192020">2019 - 2020</option>
                            <option value="20202021">2020 - 2021</option>
                            <option value="20212022">2021 - 2022</option>
                        </Form.Select>
                    </InputGroup>
                </div>
            </div>

            <p>Solicitudes de vacaciones</p>
            <Table striped bordered hover responsive> 
                <thead>
                    <tr>
                        <th>Apellidos y Nombres</th>
                        <th>Periodo</th>
                        <th>Inicio</th>
                        <th>Termino</th>
                        <th>Total de días</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Perez Llacsa, Pablo César</td>
                        <td>2020 - 2021</td>
                        <td>25/10/2021</td>
                        <td>08/11/2021</td>
                        <td>- 15</td>
                    </tr>
                </tbody>
            </Table>
        </div>

    </div>
  );
}

export default Payroll;
