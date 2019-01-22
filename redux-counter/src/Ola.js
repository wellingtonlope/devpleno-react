import React, { Component } from 'react'
import PropTypes from 'prop-types'


// class Ola extends Component {
//   render() {
//     return <span>Olá {this.props.nome}</span>
//   }
// }

const Ola = ({ nome }) =>
  <span>Olá {nome}</span>

Ola.protoTypes = {
  nome: PropTypes.string.isRequired
}

Ola.defaultProps = {
  nome: 'Zé ninguém'
}

export default Ola
