import React from 'react';
import Navbar from '../../components/navbar';
import { Form, Button, Col, Row, InputGroup, FormControl } from 'react-bootstrap';

function RegistroBoletas () {
  return (

    <div>
        <Navbar title="Registro de boletas "/>

        <div className="container mt-5">
            <Form>
                <Form.Group as={Row}>
                    <Col sm="6" className="mb-3">
                        <InputGroup>
                            <InputGroup.Text id="dni">DNI</InputGroup.Text>
                            <FormControl
                            aria-label="dni"
                            aria-describedby="dni"
                            />
                        </InputGroup>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm="4" className="mb-3">
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
                    </Col>
                    <Col sm="4" className="mb-3">
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
                    </Col>
                    <Col sm="4" className="mb-3">
                        <FormControl
                            aria-label="boleta"
                            aria-describedby="boleta"
                            type="file"
                        />
                    </Col>
                </Form.Group>

                <Button variant="success" className="form-control">Registrar</Button>

            </Form>

        </div>

    </div>
  );
}

export default RegistroBoletas;
