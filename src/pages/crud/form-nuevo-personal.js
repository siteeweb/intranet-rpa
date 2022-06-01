import React from 'react';
import Navbar from '../../components/navbar';
import { Form, Button, Col, Row, InputGroup, FormControl } from 'react-bootstrap';

function NuevoPersonal () {
  return (

    <div>
        <Navbar title="Nuevo personal"/>

        <div className="container mt-5">
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Col sm="6">
                        <InputGroup>
                            <InputGroup.Text id="name">Nombre</InputGroup.Text>
                            <FormControl
                            aria-label="name"
                            aria-describedby="name"
                            />
                        </InputGroup>
                    </Col>
                    <Col sm="6">
                        <InputGroup>
                            <InputGroup.Text id="last-name">Apellido</InputGroup.Text>
                            <FormControl
                            aria-label="last-name"
                            aria-describedby="last-name"
                            />
                        </InputGroup>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm="4">
                        <InputGroup>
                            <InputGroup.Text id="dni">DNI</InputGroup.Text>
                            <FormControl
                            aria-label="dni"
                            aria-describedby="dni"
                            type="number"
                            />
                        </InputGroup>
                        <Form.Text className="text-muted">* Verificar antes de registrar.</Form.Text>
                    </Col>
                    <Col sm="4">
                        <InputGroup>
                            <InputGroup.Text id="fech-nac">F. Nacimiento</InputGroup.Text>
                            <FormControl
                            aria-label="fech-nac"
                            aria-describedby="fech-nac"
                            type="date"
                            />
                        </InputGroup>
                    </Col>
                    <Col sm="4">
                        <InputGroup>
                            <InputGroup.Text id="phone">Telefono</InputGroup.Text>
                            <FormControl
                            aria-label="phone"
                            aria-describedby="phone"
                            type="number"
                            />
                        </InputGroup>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm="4">
                        <InputGroup>
                            <InputGroup.Text id="cargo">Cargo</InputGroup.Text>
                            <FormControl
                            aria-label="cargo"
                            aria-describedby="cargo"
                            />
                        </InputGroup>
                    </Col>
                    <Col sm="4">
                        <InputGroup>
                            <InputGroup.Text id="correo">Correo</InputGroup.Text>
                            <FormControl
                            aria-label="correo"
                            aria-describedby="correo"
                            />
                        </InputGroup>
                    </Col>
                    <Col sm="4">
                        <InputGroup>
                            <InputGroup.Text id="fech-ing">F. Ingreso</InputGroup.Text>
                            <FormControl
                            aria-label="fech-ing"
                            aria-describedby="fech-nac"
                            type="date"
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

export default NuevoPersonal;
