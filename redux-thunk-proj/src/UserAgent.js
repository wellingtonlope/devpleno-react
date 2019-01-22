import React from 'react'
import { connect } from 'react-redux'

import actions from './actions'

class UserAgent extends React.Component {
  componentDidMount() {
    this.props.loadUA()
  }
  render() {
    if (this.props.isFetching) {
      return <span>Loading...</span>
    }
    if (this.props.error) {
      return <span>Error</span>
    }
    return (
      <span>User-agent: {this.props.data['user-agent']}</span>
    )

  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.ua.isFetching,
    data: state.ua.data,
    error: state.ua.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUA: () => dispatch(actions.loadUA())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAgent)
