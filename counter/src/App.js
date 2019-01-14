import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    counter: 0
  }

  constructor(props) {
    super(props)

    this.clear = this.clear.bind(this)
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  clear() {
    this.setState({
      counter: 0
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Contador: {this.state.counter}
          <div className="button-container">
            <button className="button" onClick={this.decrement}>-</button>
            <button className="button" onClick={this.increment}>+</button>
            <button className="button" onClick={this.clear}>Clear</button>
          </div>
        </header>
      </div>
    )
  }
}

export default App
