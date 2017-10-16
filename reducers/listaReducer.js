import initialState from '../store/initialState';

export default function listaReducer(state=initialState.lista, action){
  switch (action.type) {
    case "LOAD_LISTA_SUCCESS":
      return action.lista;

    case "ADD_ITEM_LIST":
      return [...state, action.item];

    case "REMOVE_ITEM_LIST":
      return [...state.filter(i=>i.id !== action.item.id)];

    case "TACHADO_ITEM_LIST":
      // let item = Object.assign({}, action.item);
      let item = action.item;
      item.tachado = !item.tachado;
      const nuevaLista = state.map(i=>{
        if(i.id === action.item.id){
          return item;
        } else {
          return i;
        }
      });
      return nuevaLista;

    default:
      return state;
  }
}
