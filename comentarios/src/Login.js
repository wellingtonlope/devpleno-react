import React, { Component } from 'react'

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value
    })
  }

  login = () => {
    this.props.login(this.state.email, this.state.password)
  }

  render() {
    const errorMessages = {
      'auth/wrong-password': 'E-mail e/ou senha inválidos',
      'auth/user-not-found': 'Usuário não encontrado.',
      'auth/invalid-email': 'E-mail inválido',
    }
    return (
      <div>
        <h4>Entre para comentar!</h4>
        <form className='form-inline'>
          <input type='text' className='form-control mr-1' onChange={this.handleChange('email')} placeholder='email' />
          <input type='password' className='form-control mr-1' onChange={this.handleChange('password')} placeholder='senha' />
          <button type='button' className='btn btn-primary mr-1' onClick={this.login}>Entrar</button>
          <button type='button' className='btn' onClick={() => this.props.changeScreen('signup')}>Criar conta</button>
        </form>
        {
          this.props.isAuthError &&
          <div className='card text-white bg-danger mt-2'>
            <div className='card-header'>
              Erro ao entrar
            </div>
            <div className='card-body'>
              {errorMessages[this.props.authError]}
            </div>
          </div>
        }
      </div>

    )
  }
}

export default Login
