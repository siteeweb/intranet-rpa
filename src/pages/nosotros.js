import React from 'react';
import Navbar from '../components/navbar';

function Nosotros () {
  return (

    <div>
        <Navbar title="Acerca de Nosotros"/>

        <div className="container mt-5">
            <p>Somos una empresa dedicada a brindar servicios de calidad. Nuestra orientación empresarial está en convertirnos en los socios estratégicos y asesores tecnológicos de nuestros clientes. </p>
            <p>Siempre buscamos impactar positivamente; por ello, combinamos creatividad y conocimientos de TI en el desarrollo de soluciones innovadoras que puedan transformar y potenciar tu empresa.</p>
            
            <strong>Misión</strong>
            <p>Somos una compañía dedicada a la creación y mejora de productos en tecnología digital, combinado las mejores prácticas de ingeniería, innovación y diseño.</p>

            <strong>Visión</strong>
            <p>Transformar digitalmente al Perú y Latinoamérica</p>

            <strong>Nuestros valores:</strong>
            <ul>
                <li><p><strong>Integridad: </strong>Mantener y cumplir nuestros compromisos hacia los clientes, la empresa con transparencia y honestidad.</p></li>
                <li><p><strong>Pasión: </strong>Por ser los mejores profesionales, por nuestra empresa y por nuestros clientes.</p></li>
                <li><p><strong>Respeto: </strong>Tratar a los demás con paciencia, imparcialidad y dignidad.</p></li>
                <li><p><strong>Excelencia: </strong>Ejecutar las cosas de la mejor forma, entregando servicios de calidad con retroalimentación y mejora continua.</p></li>
                <li><p><strong>Responsabilidad: </strong>Cumpliendo con nuestros objetivos y compromisos frente a los clientes, la empresa y al medio ambiente.</p></li>
                <li><p><strong>Diversidad: </strong>Respetar y valorar las diferencias culturales e individuales de todos con un ambiente de trabajo inclusivo amigable con las distintas perspectivas y pensamientos.</p></li>
            </ul>
        </div>

    </div>
  );
}

export default Nosotros;
