/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

export const ContactBar = () => {
  return (
    <section className='contact-bar'>
        <div id='linkedin'><a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/dariel-conde-villa-29b61212a/' className='fa fa-linkedin'></a></div>
        <div id='whatsapp'><a target="_blank" rel="noreferrer" href='https://wa.me/5215527579215' className='fa fa-whatsapp'></a></div>
        <div id='email'><a target="_blank" rel="noreferrer" href='mailto:darielconde@gmail.com' className='fa fa-solid fa-envelope'></a></div>
    </section>
  )
}
