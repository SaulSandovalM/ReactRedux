import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as listaActions from '../../actions/listaActions';
import {ListaDisplay} from './ListaDisplay';

function alertar(item) {
  alert(`${item.name}, borrado`);
}

function mapStateToProps(state, ownProps) {
  return {
    lista: state.lista, //datos
    fetched: state.lista.length > 0
  }
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(listaActions, dispatch);
  return {
    guardar: actions.addItemList, //funciones
    remove: actions.removeItemList,
    tachado: actions.tachadoItemList,
    alertar
  }
}

export const ListaContainer = connect(mapStateToProps, mapDispatchToProps)(ListaDisplay);
