import React from 'react';
import Navbar from '../components/navbar';
import { Table } from 'react-bootstrap';
import SubTitle from '../components/subtitle';

function CronogramaCapa () {
  return (

    <div>
        <Navbar
            linkprev="/gestion-de-talento" 
            prev="gestion de talento / "
            title="capacitaciones"
        />

        <div className="container mt-5">
            <SubTitle content="Cronograma de Capacitaciones"/>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Taller</th>
                        <th>Fecha y Hora</th>
                        <th>Duración</th>
                        <th>Capacitador</th>
                        <th>Video</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>WorkFusion</td>
                        <td>12/08 - 8:00</td>
                        <td>36 hrs</td>
                        <td>Juan Pablo</td>
                        <td>Link del video grabado</td>
                    </tr>
                </tbody>
            </Table>
        </div>

    </div>
  );
}

export default CronogramaCapa;
