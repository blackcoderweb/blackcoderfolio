import React from 'react'

export const Contacto = () => {
  return (

  <section className='contact-section'>
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <form className='contact' action='mailto:blackcoderweb@gmail.com'>

        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellidos' />
        <input type="text" placeholder='email' />
        <textarea rows="6" placeholder='Motivo de contacto'></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
    <div className='mexico-img'>
      <img src="images/mexico.png" alt="" />
      </div>
  </section>
  )
}
