import React, { Component } from 'react'

class Categoria extends Component {
  render() {
    const { match } = this.props
    return (
      <h1>Categoria {match.params.catId}</h1>
    )
  }
}

export default Categoria
