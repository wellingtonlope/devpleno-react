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
      categorias: []
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
                categorias={this.state.categorias} />} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
