import React from 'react';
import Navbar from '../../components/navbar';
import { Form, Button, Col, Row, InputGroup, FormControl } from 'react-bootstrap';

function NuevaCapacitacion () {
  return (

    <div>
        <Navbar title="Nueva Capacitacion"/>

        <div className="container mt-5">
            <Form>
                <Form.Group as={Row}>
                    <Col sm="6" className="mb-3">
                        <InputGroup>
                            <InputGroup.Text id="name">Nombre</InputGroup.Text>
                            <FormControl
                            aria-label="name"
                            aria-describedby="name"
                            />
                        </InputGroup>
                    </Col>
                    <Col sm="6" className="mb-3">
                        <InputGroup>
                            <InputGroup.Text id="capacitador">Capacitador</InputGroup.Text>
                            <FormControl
                            aria-label="capacitador"
                            aria-describedby="capacitador"
                            />
                        </InputGroup>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm="4" className="mb-3">
                        <InputGroup>
                            <InputGroup.Text id="fech_hora">Fecha y Hora</InputGroup.Text>
                            <FormControl
                            aria-label="fech_hora"
                            aria-describedby="fech_hora"
                            />
                        </InputGroup>
                    </Col>
                    <Col sm="4" className="mb-3">
                        <InputGroup>
                            <InputGroup.Text id="duracion">Duración</InputGroup.Text>
                            <FormControl
                            aria-label="duracion"
                            aria-describedby="duracion"
                            />
                        </InputGroup>
                    </Col>
                    <Col sm="4" className="mb-3">
                        <InputGroup>
                            <InputGroup.Text id="phone">Video Guardado</InputGroup.Text>
                            <FormControl
                            aria-label="video"
                            aria-describedby="video"
                            />
                        </InputGroup>
                    </Col>
                </Form.Group>

                <Button variant="success" className="form-control">Registrar</Button>

            </Form>

        </div>

    </div>
  );
}

export default NuevaCapacitacion;
