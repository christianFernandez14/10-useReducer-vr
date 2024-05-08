import React, { useEffect, useReducer } from 'react'
import juegoReducer from '../reducer/juegoReducer'

// Puedes probar inicianizandola dentro del componente a ver cual es el resultado
const init = () =>{
  return JSON.parse(localStorage.getItem('juegos')) || []
}

const MisJuegos = () => {

  const [juegos, dispatch] = useReducer(juegoReducer, [], init)

  useEffect(()=>{
    localStorage.setItem("juegos", JSON.stringify(juegos))
  }, [juegos])

  const conserguirDatosForm = e =>{
    e.preventDefault()

    let juego = {
      id: new Date().getTime(),
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value
    }

    // Estamos viendo si toma los datos del form.
    // console.log(juego)

    // Comenzamos a trabajar con el la accion
    const accion = {
      type: "crear",
      payload: juego
    }

    // Comenzamos a trabajar con la funcion modificadora que es el dispatch, en el caso del reducer (actulizo mi estado)
    dispatch(accion)

    // Verificamos si esta guardando en el localStorage
    console.log(juegos)

  }
  return (
    <div>
      <h1>Estos son mis videojuegos</h1>

      <p>Número de videjuegos: {juegos.length}</p>

      <ul>
        {
          juegos.map(juego =>(
            <li key={juego.id}>
              {juego.titulo}: {juego.descripcion}
              &nbsp; <button>X</button>
            </li>
          ))
        }
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