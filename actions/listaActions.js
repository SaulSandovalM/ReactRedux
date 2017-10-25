import firebase from '../firebase';
import * as fireMethods from '../firebase';

export function loadListaSuccess(lista) {
  return {type: 'LOAD_LISTA_SUCCESS', lista}
}

export function addItemListSuccess(item) {
  return {type: "ADD_ITEM_LIST", item}
}

export function removeItemListSuccess(item) {
  return {type: "REMOVE_ITEM_LIST", item}
}

export function tachadoItemListSuccess(item) {
  return {type: "TACHADO_ITEM_LIST", item}
}

export function loadLista() {
  return function(dispatch, getState) {
    firebase.database().ref('lista').once("value").then(s => {
      let lista = [];
      const obj = s.val();
      for (let key in obj) {
        let nObj = obj[key];
        nObj['id'] = key;
        lista.push(nObj);
      }
      dispatch(loadListaSuccess(lista));
    }).catch(e => console.log(e))
  }
}

export function tachadoItemList(item) {
  return function(dispatch, getState) {
    fireMethods.then(item => {
      dispatch(tachadoItemListSuccess(item))
    }).catch(e => console.log(e));
  }
}

export function addItemList(item) {
  return function(dispatch) {
    fireMethods.saveItem(item).then(resItem => {
      dispatch.addItemListSuccess(resItem)
    })
  }
}

export function removeItemList(item) {
  return function(dispatch) {
    fireMethods.removeItem(item).then(r => {
      dispatch(removeItemListSuccess(item))
    })
  }
}
