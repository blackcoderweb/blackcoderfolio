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
    <div className='work-detail'>
        <div className='work-img'>
            <img src={proyecto.url} alt="" />
        </div>
      <h1 className='heading'>{proyecto.nombre}</h1>
      <p>{proyecto.tecnologias}</p>
      <a href={proyecto.web} target="_blank" rel='noreferrer' >Ir al proyecto</a>
    </div>
  )
}
