import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {

    const [proyecto, setProyecto] = useState({});
    const params = useParams();
    
    useEffect(()=>{
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id)
        setProyecto(proyecto[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div className='work-page'>
        <div className='work-img'>
            <img src={""}/>
        </div>
      <h1 className='heading'>{proyecto.nombre}</h1>
      <p>{proyecto.tecnologias}</p>
      <p>{proyecto.descripcion}</p>
      <a href="url del proyecto" target="_blank" >Ir al proyecto</a>
    </div>
  )
}
