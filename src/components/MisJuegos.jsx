import React from 'react'
import juegoReducer from '../reducer/juegoReducer'
import { useReducer } from 'react'
import { useEffect } from 'react'

// Puedes probar declarandola dentro del componente a ver cual es el resultado
const init = () =>{
  return JSON.parse(localStorage.getItem('juegos')) || []
}

const MisJuegos = () => {

  const [juegos, dispatch] = useReducer(juegoReducer, [], init)

  useEffect(()=>{
    localStorage.setItem('juegos', JSON.stringify(juegos))
  }, [juegos])

  const conserguirDatosForm = e =>{
    e.preventDefault()

    let juego = {
      id: new Date().getTime(),
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value
    }

    console.log(juego)

  }
  return (
    <div>
      <h1>Estos son mis videojuegos</h1>

      <p>Número de videjuegos: 15</p>

      <ul>
        <li>Gta</li>
        <li>Mortal Kombat</li>
        <li>Crash Bandicoot</li>
      </ul>

      <h3>Agregar Juego</h3>

      <form onSubmit={conserguirDatosForm}>
        <input
          name='titulo'
          type="text"
          placeholder='Titulo' />

        <textarea
          name='descripcion'
          placeholder='Descripcion...'
        ></textarea>

        <input
          type="submit"
          value="Guardar" />
      </form>

    </div>
  )
}

export default MisJuegos