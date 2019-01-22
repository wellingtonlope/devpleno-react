import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import ProdutosHome from './ProdutosHome'
import Categoria from './Categoria'
import ProdutosNovo from './ProdutosNovo'
import ProdutosEditar from './ProdutosEditar'

class Produtos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editingCategoria: ''
    }
  }

  componentDidMount() {
    this.props.loadCategorias()
  }

  handleNewCategoria = key => {
    if (key.keyCode === 13) {
      this.props.createCategoria({
        categoria: this.refs.categoria.value
      })
      this.refs.categoria.value = ''
    }
  }

  handleEditCategoria = key => {
    if (key.keyCode === 13) {
      this.props.editCategoria({
        id: this.state.editingCategoria,
        categoria: this.refs['cat-' + this.state.editingCategoria].value
      })
      this.setState({
        editingCategoria: ''
      })
    }
  }

  editCategoria = categoria => {
    this.setState({
      editingCategoria: categoria.id
    })
  }

  cancelEditing = () => {
    this.setState({
      editingCategoria: ''
    })
  }

  renderCategoria = cat =>
    <li key={cat.id}>
      {this.state.editingCategoria === cat.id &&
        <div className='input-group'>
          <div className='input-group-btn'>
            <input className='form-control'
              ref={'cat-' + cat.id}
              type='text'
              defaultValue={cat.categoria}
              onKeyUp={this.handleEditCategoria} />
            <button className='btn' onClick={this.cancelEditing}>cancel</button>
          </div>
        </div>
      }
      {this.state.editingCategoria !== cat.id &&
        <div>
          <button className='btn btn-small' onClick={() => this.props.removeCategoria(cat)}>
            <span className='glyphicon glyphicon-remove' />
          </button>
          <button className='btn btn-small' onClick={() => this.editCategoria(cat)}>
            <span className='glyphicon glyphicon-pencil' />
          </button>
          <Link to={`/produtos/categoria/${cat.id}`}> {cat.categoria}</Link >
        </div>
      }
    </li>

  render() {
    const { match, categorias } = this.props
    return (
      <div className='row'>
        <div className='col-md-2'>
          <h3>Categorias</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {categorias.map(this.renderCategoria)}
          </ul>
          <div className='well well-sm'>
            <input
              type='text'
              ref='categoria'
              className='form-control'
              placeholder='Nova categoria'
              onKeyUp={this.handleNewCategoria} />
          </div>
          <Link to='/produtos/novo'>Novo Produto</Link>
        </div>
        <div className='col-md-10'>
          <h1>Produtos</h1>
          <Route exact path={match.url} component={ProdutosHome} />
          <Route exact path={match.url + '/novo'}
            render={props => <ProdutosNovo {...props}
              categorias={categorias}
              createProduto={this.props.createProduto} />} />
          <Route path={match.url + '/editar/:id'}
            render={props => <ProdutosEditar {...props}
              categorias={categorias}
              readProduto={this.props.readProduto}
              editProduto={this.props.editProduto} />} />
          <Route exact path={match.url + '/categoria/:catId'}
            render={props => <Categoria {...props}
              loadProdutos={this.props.loadProdutos}
              loadCategoria={this.props.loadCategoria}
              produtos={this.props.produtos}
              categoria={this.props.categoria}
              removeProduto={this.props.removeProduto} />} />
        </div>
      </div>
    )
  }
}

export default Produtos
