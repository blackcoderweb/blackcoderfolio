import React from 'react';
import { Link } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>

      <section className='works'>
      {trabajos.map(trabajo => (
        <article key={trabajo.id} className="work-item">
          <div className='work-img'>
            <img src={trabajo.url} alt=""/>
          </div>
          <span>{trabajo.categoria}</span>
          <h2><Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link></h2>
        </article>
      ))}
      </section>

    </div>
  )
}
