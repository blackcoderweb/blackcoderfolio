import React from 'react'
import { herramientas } from '../data/herramientas'

export const Herramientas = () => {
  return (
      <section className='tools'>
      {herramientas.map(herramienta => (
          <div key={herramienta.id} className='single-tool'>
            <img src={herramienta.url} alt="" className='tool-img'/>
          </div>
      ))}
      </section>
  )
}
