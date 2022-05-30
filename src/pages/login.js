import React from 'react';
import logoLogin from '../img/logo-login-rpa.png';
import { Form, Button, InputGroup, FormControl} from 'react-bootstrap';
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login () {
  return (

    <div className="container-fluid login">

        <div className="center">
            <img src={logoLogin} className="img-fluid mb-5" alt="logo" width="250px"/>
        </div>

        <div className="center">
            <div className="login-form">
                <p className="login-form-title"><FontAwesomeIcon icon={faUser}/> Iniciar sesión</p>
                <Form>
                    <InputGroup className="mb-3">
                        <FormControl type="email" placeholder="Nombre de usuario"/>
                        <InputGroup.Text><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <FormControl type="password" placeholder="Contraseña"/>
                        <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                    </InputGroup>

                    <Button variant="primary" type="submit" className="form-control">
                        Iniciar sesión
                    </Button>
                </Form>
            </div>
        </div>
        
    </div>
  );
}

export default Login;
