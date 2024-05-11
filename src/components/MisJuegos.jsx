import React, { useEffect, useReducer } from 'react'
import juegoReducer from '../reducer/juegoReducer'

const init = () => {
  return JSON.parse(localStorage.getItem('juegos')) || []
}

const MisJuegos = () => {

  const [juegos, dispatch] = useReducer(juegoReducer, [], init)

  useEffect(() => {
    localStorage.setItem("juegos", JSON.stringify(juegos))
  }, [juegos])

  const conserguirDatosForm = e => {
    e.preventDefault()

    let juego = {
      id: new Date().getTime(),
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value
    }

    const accion = {
      type: "crear",
      payload: juego
    }

    dispatch(accion)

  }

  const borrarJuego = id => {
    const accion = {
      type: "borrar",
      payload: id
    }

    dispatch(accion)
  }

  const editarJuego = (e, id) => {

    let juego = {
      id,
      titulo: e.target.value,
      descripcion: e.target.value
    }

    const accion = {
      type: "editar",
      payload: juego
    }

    dispatch(accion)
  }

  return (
    <div>
      <h1>Estos son mis videojuegos</h1>

      <p>Número de videjuegos: {juegos.length}</p>

      <ul>
        {
          juegos.map(juego => (
            <li key={juego.id}>
              {juego.titulo}: {juego.descripcion}
              &nbsp; <button onClick={e => borrarJuego(juego.id)}>X</button>
              <input type="text" onBlur={e => editarJuego(e, juego.id)} 
                                 onKeyPress={e => {
                                  if(e.key === "Enter"){
                                    editarJuego(e, juego.id)
                                  }
                                 }}                  
              />
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