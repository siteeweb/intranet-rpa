import React from 'react';
import Navbar from '../components/navbar';
import { Table } from 'react-bootstrap';
import ButtonRpa from '../components/buttonRpa';
import Title from '../components/title';

function GestiondeTalento () {
  return (

    <div>
        <Navbar title="Gestion de Talento"/>

        <div className="container mt-5">
            <Title title="Directorio"/>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Apellidos y Nombres</th>
                        <th>Cargo</th>
                        <th>Correo</th>
                        <th>Movil</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jimenez Castillo, Christian Albert</td>
                        <td>Delivery Manager BPO</td>
                        <td>c.jimenez@rpalatam.com.pe</td>
                        <td>989324534</td>
                    </tr>
                    <tr>
                        <td>Pacora Vasquez, Mauricio Javier</td>
                        <td>Delivery Manager BPI</td>
                        <td>m.pacora@rpalatam.com.pe</td>
                        <td>994825455</td>
                    </tr>
                    <tr>
                        <td>Millasaky Valenzuela, Alice Cecilia</td>
                        <td>Administration Manager</td>
                        <td>a.millasaky@rpalatam.com.pe</td>
                        <td>923730453</td>
                    </tr>
                    <tr>
                        <td>Collachagua Rivera, Brighit Katherine</td>
                        <td>HR Manager</td>
                        <td>b.collachagua@rpalatam.com.pe</td>
                        <td>937631463</td>
                    </tr>
                    <tr>
                        <td>Rondón Vargas, Cinthia del Rosario</td>
                        <td>HR Analyst</td>
                        <td>c.rondon@rpalatam.com.pe</td>
                        <td>989824317</td>
                    </tr>
                    <tr>
                        <td>Porteros Barragán, Emilio Alberto</td>
                        <td>Especialista de soporte</td>
                        <td>e.porteros@rpalatam.com.pe</td>
                        <td>992769615</td>
                    </tr>
                </tbody>
            </Table>

            <ButtonRpa
                url="/cronograma-de-capacitaciones"
                content="Cronograma de capacitaciones"
            />
            <br/>
            <ButtonRpa
                url="/cursos"
                content="Cursos UDEMY"
            />
        </div>

    </div>
  );
}

export default GestiondeTalento;
