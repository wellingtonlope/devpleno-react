import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import Sobre from './Sobre'
import Produtos from './Produtos'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categorias: [],
      categoria: {},
      produtos: [],
    }
  }

  loadCategorias = () => {
    this.props.api.loadCategorias()
      .then(res => {
        this.setState({
          categorias: res.data
        })
      })
  }

  removeCategoria = categoria => {
    this.props.api.deleteCategoria(categoria.id)
      .then(() => this.loadCategorias())
  }

  createCategoria = categoria => {
    this.props.api.createCategoria(categoria)
      .then(res => this.loadCategorias())
  }

  editCategoria = categoria => {
    this.props.api.editCategoria(categoria)
      .then(res => this.loadCategorias())
  }

  createProduto = produto => {
    return this.props.api.createProduto(produto)
  }

  loadProdutos = categoria => {
    this.props.api.loadProdutos(categoria)
      .then(res => this.setState({
        produtos: res.data
      }))
  }

  loadCategoria = categoria => {
    this.props.api.readCategoria(categoria)
      .then(res => this.setState({
        categoria: res.data
      }))
  }

  removeProduto = produto => {
    return this.props.api.deleteProduto(produto.id)
  }

  readProduto = id => {
    return this.props.api.readProduto(id)
  }

  editProduto = produto => {
    return this.props.api.editProduto(produto)
  }

  render() {
    return (
      <Router>
        <div>
          <nav className='navbar navbar-inverse'>
            <div className='container'>
              <div className='navbar-header'>
                <Link to='/' className='navbar-brand'>
                  Gerenciador de Produtos
              </Link>
              </div>
              <ul className='nav navbar-nav'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/produtos'>Produtos</Link></li>
                <li><Link to='/Sobre'>Sobre</Link></li>
              </ul>
            </div>
          </nav>
          <div className='container'>
            <Route exact path='/' component={Home} />
            <Route exact path='/sobre' component={Sobre} />
            <Route path='/produtos'
              render={(props) => <Produtos {...props}
                loadCategorias={this.loadCategorias}
                removeCategoria={this.removeCategoria}
                createCategoria={this.createCategoria}
                editCategoria={this.editCategoria}
                categorias={this.state.categorias}

                readProduto={this.readProduto}
                createProduto={this.createProduto}
                editProduto={this.editProduto}
                loadProdutos={this.loadProdutos}
                loadCategoria={this.loadCategoria}
                removeProduto={this.removeProduto}
                produtos={this.state.produtos}
                categoria={this.state.categoria} />} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
