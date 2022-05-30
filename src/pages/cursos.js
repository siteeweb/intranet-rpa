import React from 'react';
import Navbar from '../components/navbar';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Cursos () {
  return (

    <div>
        <Navbar title="Gestion de talento"/>

        <div className="container mt-5">
        <h1 className="display-6">Cursos UDEMY</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Cursos de UDEMY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Link to="//www.udemy.com" className="a-nov" target="_blank">
                            TypeScript: Tu completa guía y manual de mano (Edición 2021)
                        </Link></td>
                    </tr>
                    <tr>
                        <td>React Native: Aplicaciones nativas para IOS y Android</td>
                    </tr>
                    <tr>
                        <td>The Complete 2022 Web Development Bootcamp</td>
                    </tr>
                    <tr>
                        <td>Web Design Specialist Practice Exam --> Practice Test 2021</td>
                    </tr>
                    <tr>
                        <td>Learn C# and make a videogame with Unity 2020</td>
                    </tr>
                    <tr>
                        <td>Python for beginners - Learn all the basics of python</td>
                    </tr>
                    <tr>
                        <td>Complete Machine Learning with R Studio - ML for 2021</td>
                    </tr>
                    <tr>
                        <td>Python Bootcamp 2021 Build 15 working Applications and Games</td>
                    </tr>
                    <tr>
                        <td>SAP Basis Essential Training</td>
                    </tr>
                    <tr>
                        <td>The Complete SAP S/4HANA Bootcamp 2021</td>
                    </tr>
                    <tr>
                        <td>Mastery in Java Web Services and RESTful API with SpringBoot</td>
                    </tr>
                    <tr>
                        <td>Color Correction & Grading with Adobe Premiere Pro 2021</td>
                    </tr>
                    <tr>
                        <td>[2021] Scrum Master Certificación</td>
                    </tr>
                    <tr>
                        <td>Kanban Introducción basado Certificación de CertiProf</td>
                    </tr>
                    <tr>
                        <td>Curso WordPress 2021: Cómo Crear una Página Web Desde Cero</td>
                    </tr>
                    <tr>
                        <td>Microsoft Power Automate Desktop Course | Zecurro to Expert (1)</td>
                    </tr>
                    <tr>
                        <td>Desarrollo Profesional de Temas y Plugins de WordPress</td>
                    </tr>
                    <tr>
                        <td>Desarrollo de Tiendas Virtuales con WordPress y WooCommerce</td>
                    </tr>
                    <tr>
                        <td>Cypress: Master en automatización Test QA (En Español)</td>
                    </tr>
                    <tr>
                        <td>Cypress V6- UI Automation Testing + API Testing + Frameworks</td>
                    </tr>
                    <tr>
                        <td>Cypress: Web Automation Testing from Zero to Hero</td>
                    </tr>
                    <tr>
                        <td>React: De cero a experto ( Hooks y MERN )</td>
                    </tr>
                    <tr>
                        <td>Modern HTML & CSS From The Beginning (Including Sass)</td>
                    </tr>
                    <tr>
                        <td>React Native - Crea aplicaciones para Android y iOS c/ React</td>
                    </tr>
                    <tr>
                        <td>React testing con jest y enzyme</td>
                    </tr>
                    <tr>
                        <td>Growth Marketing: Aprende Growth Hacking desde Cero</td>
                    </tr>
                    <tr>
                        <td>Robotic Process Automation - Automation Anywhere 360 / A2019</td>
                    </tr>
                </tbody>
            </Table>          
        </div>

    </div>
  );
}

export default Cursos;
