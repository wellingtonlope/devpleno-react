import axios from 'axios'
import { put } from 'redux-saga/effects'
import { loadDataUASuccess } from '../actions'

function* getUA() {
  const dados = yield axios.get('http://httpbin.org/user-agent')
  yield put(loadDataUASuccess(dados.data['user-agent']))
}

export default getUA

