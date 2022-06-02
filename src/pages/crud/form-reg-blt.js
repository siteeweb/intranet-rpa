import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import { Form, Button, Col, Row, InputGroup, FormControl, Alert } from 'react-bootstrap';
import axios from "axios";

function RegistroBoletas () {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [fileUpload, setFileUpload] = useState(null);
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);

  const onChangeMonth = (e) => {
    setMonth(e.target.value);
  };

  const onChangeYear = (e) => {
    setYear(e.target.value);
  };

  const onFileUpload = (e) => {
    setFileUpload(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", fileUpload);
    data.append("folder", "boletas");
    data.append("fileName", month+"_"+year+".pdf");
    var config = {
      method: "post",
      url: "https://qigo043dp3.execute-api.us-east-1.amazonaws.com/apirpa/putObject",
      headers: {
        "content-type": "multipart/form-data",
      },
      data: data,
    };
    axios(config)
      .then((response) => {
        setShow(true);
        setTimeout(function(){
          setShow(false);
          window.location.reload();
        }, 2500);
      })
      .catch((e) => {
        console.log(e);
        setShowError(true);
        setTimeout(function(){
          setShowError(false);
        }, 2000);
      });
  }  

  return (

    <div>
        <Navbar title="Registro de boletas "/>

        <div className="container mt-5">
            <Form className="mb-3">
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
                            <Form.Select onChange={onChangeMonth} aria-label="month" aria-describedby="mes">
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
                            <Form.Select onChange={onChangeYear} aria-label="year" aria-describedby="anho">
                                <option></option>
                                <option value="2022">2022</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>
                    <Col sm="4" className="mb-3">
                        <FormControl 
                            onChange={onFileUpload}
                            aria-label="boleta"
                            aria-describedby="boleta"
                            type="file"
                        />
                    </Col>
                </Form.Group>

                <Button onClick={onSubmit} variant="success" className="form-control" disabled={!month || !year}>Registrar</Button>

            </Form>
            <div className='form-alerts'>
              <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
                Se cargo correctamente la boleta.
              </Alert>
              <Alert show={showError} variant="danger" onClose={() => setShowError(false)} dismissible>
                Ocurrio un problema al cargar la boleta.
              </Alert>
            </div>
        </div>

    </div>
  );
}

export default RegistroBoletas;
