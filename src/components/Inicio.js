import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      
      <h1>Hola, soy <strong>Dariel Conde</strong> y soy <strong>desarrollador web</strong> full stack.</h1>
      
      <h2>Ingeniero en Ciencias Informáticas con conocimientos de CSS, HTML, JavaScript, React, Node.js, Express y MySQL para el desarrollo de aplicaciones web. <Link to="/contacto">Contacta conmigo.</Link></h2>

      <section className='last-work'>
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>

        <ListadoTrabajos/>
      </section>

    </div>
  )
}
