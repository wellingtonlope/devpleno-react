import React, { Component } from 'react'
import axios from 'axios'

class Categoria extends Component {
  constructor(props) {
    super(props)
    this.state = {
      produtos: [],
      categoria: {}
    }
  }

  loadData = id => {
    axios.get('http://localhost:3001/produtos?categoria=' + id)
      .then(res => {
        this.setState({
          produtos: res.data,
        })
      })
    axios.get('http://localhost:3001/categorias/' + id)
      .then(res => {
        this.setState({
          categoria: res.data,
        })
      })
  }

  componentDidMount() {
    this.loadData(this.props.match.params.catId)
  }

  componentWillReceiveProps(newProps) {
    this.loadData(newProps.match.params.catId)
  }

  renderProduto(produto) {
    return (
      <p key={produto.id} className='well'>{produto.produto}</p>
    )
  }

  render() {
    const { categoria, produtos } = this.state
    return (
      <div>
        <h1>Categoria {categoria.categoria}</h1>
        {produtos.map(this.renderProduto)}
      </div>
    )
  }
}

export default Categoria
