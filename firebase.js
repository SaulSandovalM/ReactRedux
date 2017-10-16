import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAtvOAx_ys2BK3SlN7Gn9VORa7E3S4LDr4",
    authDomain: "reactnotificacion.firebaseapp.com",
    databaseURL: "https://reactnotificacion.firebaseio.com",
    projectId: "reactnotificacion",
    storageBucket: "reactnotificacion.appspot.com",
    messagingSenderId: "614596991281"
  };
  firebase.initializeApp(config);

  export default firebase;

export function toogleTachado(item){
  item['tachado'] = !item.tachado;
  let updates = {};
  updates['lista/' + item.id] = item;
  return firebase.database().ref().update(updates)
  .then(r=>{
    return item;
  })
  .catch(e=>console.log(e))
}


export function saveItem(item){
  return firebase.database().ref('lista')
  .push(item)
  .then(s=>{
    item['id'] = s.key;
    return item;
  })
  .catch(e=>console.log(e))
}

export function removeItem(item){
  let updates = {};
  updates['lista/' +item.id] = null;
  firebase.database().ref().update(updates)
  .then(s=>{
    return;
  })
  .catch(e=>console.log(e))
}
