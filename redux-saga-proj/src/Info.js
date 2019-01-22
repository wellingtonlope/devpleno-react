import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadDataRequest } from './actions'

class Info extends Component {
  render() {
    return (
      <p>
        Info {this.props.data}
        {!this.props.isFetching && <button onClick={() => this.props.loadData()}>Load</button>}
        {this.props.isFetching && <span>Loading...</span>}
      </p>
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.ip.isFetching,
    data: state.ip.data,
    error: state.ip.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(loadDataRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
