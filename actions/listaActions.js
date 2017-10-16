import firebase from '../firebase';

export function loadListaSuccess(lista){
  return {
    type: 'LOAD_LISTA_SUCCESS',
    lista
  }
}

export function addItemList(item){
  return {
    type: "ADD_ITEM_LIST",
    item
  }
}

export function removeItemList(item){
  return {
    type: "REMOVE_ITEM_LIST",
    item
  }
}

export function tachadoItemList(item) {
  return {
    type: "TACHADO_ITEM_LIST",
    item
  }
}

export function loadLista(){
  return function(dispatch, getState){
    firebase.database().ref('lista')
      .once("value")
      .then(s=>{
        let lista = [];
        const obj = s.val();
        for(let key in obj){
          lista.push(obj[key]);
        }
        dispatch(loadListaSuccess(lista));
      })
  }
}
