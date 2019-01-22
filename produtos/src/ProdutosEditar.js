import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class ProdutosEditar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: ''
    }
  }

  componentDidMount() {
    this.props.readProduto(this.props.match.params.id)
      .then(res => {
        this.setState({
          produto: res.data
        })
        this.refs.categoria.value = res.data.categoria
        this.refs.produto.value = res.data.produto
      })
  }

  handleEditProduto = () => {
    const produto = {
      id: this.props.match.params.id,
      produto: this.refs.produto.value,
      categoria: this.refs.categoria.value,
    }

    this.props.editProduto(produto)
      .then(res => this.setState({
        redirect: '/produtos/categoria/' + produto.categoria
      }))
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div>
        <h2>Editar produto</h2>
        <select ref='categoria' >
          {this.props.categorias.map(c =>
            <option key={c.id} value={c.id}>{c.categoria}</option>
          )}
        </select>
        <input ref='produto'
          className='form-control'
          placeholder='Nome do novo produto'
        // defaultValue={this.state.produto.produto}
        />
        <button onClick={this.handleEditProduto}>Salvar</button>
      </div>
    )
  }
}

export default ProdutosEditar
