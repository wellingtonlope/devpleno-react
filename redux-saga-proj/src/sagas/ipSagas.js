import axios from 'axios'
import { put } from 'redux-saga/effects'
import { loadDataSuccess } from '../actions'

function* getIP() {
  const dados = yield axios.get('http://httpbin.org/ip')
  yield put(loadDataSuccess(dados.data.origin))
}

export default getIP

