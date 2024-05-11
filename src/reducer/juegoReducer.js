

const juegoReducer = (state = [], action) => {

  switch (action.type) {
    case "crear":

      return [...state, action.payload]

    case "borrar":

      return state.filter(juego => juego.id !== action.payload)

    case "editar":
      // Ubico la posicion (el indice)  programaticamente, en el array de objetos el elemento que quiero editar
      let indice = state.findIndex(juego => juego.id === action.payload.id)

      // Vemos si nos traemos el incice correcto del elemento que queremos editar
      // console.log(indice)

      state[indice] = action.payload

      return [...state]

    default:
      return state
  }
}

export default juegoReducer