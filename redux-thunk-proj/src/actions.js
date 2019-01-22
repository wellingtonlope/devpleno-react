import axios from 'axios'
export const loadDataRequest = () => {
  return {
    type: 'LOAD_DATA_REQUEST'
  }
}
export const loadDataError = () => {
  return {
    type: 'LOAD_DATA_ERROR'
  }
}
export const loadDataSuccess = data => {
  return {
    type: 'LOAD_DATA_SUCCESS',
    data
  }
}
export const loadData = () => {
  return dispatch => {
    dispatch(loadDataRequest())
    axios
      .get('http://httpbin.org/ip')
      .then(({ data }) => dispatch(loadDataSuccess(data)))
      .catch(err => dispatch(loadDataError()))
  }
}

export const loadUARequest = () => {
  return {
    type: 'LOAD_UA_REQUEST'
  }
}
export const loadUAError = () => {
  return {
    type: 'LOAD_UA_ERROR'
  }
}
export const loadUASuccess = data => {
  return {
    type: 'LOAD_UA_SUCCESS',
    data
  }
}
export const loadUA = (axios) => {
  return dispatch => {
    dispatch(loadUARequest())
    axios
      .get('http://httpbin.org/user-agent')
      .then(({ data }) => dispatch(loadUASuccess(data)))
      .catch(err => dispatch(loadUAError()))
  }
}

export default {
  loadUA: loadUA.bind(null, axios)
}
