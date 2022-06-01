import React from 'react';
import Navbar from '../../components/navbar';
import { Form, Button, Col, Row, InputGroup, FormControl } from 'react-bootstrap';

function NuevoCurso () {
  return (

    <div>
        <Navbar title="Nuevo Curso"/>

        <div className="container mt-5">
            <Form>
                <Form.Group as={Row}>
                    <Col sm="6" className="mb-3">
                        <InputGroup>
                            <InputGroup.Text id="curso">Curso</InputGroup.Text>
                            <FormControl
                            aria-label="curso"
                            aria-describedby="curso"
                            />
                        </InputGroup>
                    </Col>
                    <Col sm="6" className="mb-3">
                        <InputGroup>
                            <InputGroup.Text id="link">Link</InputGroup.Text>
                            <FormControl
                            aria-label="link"
                            aria-describedby="link"
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

export default NuevoCurso;
