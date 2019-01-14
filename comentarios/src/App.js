import React, { Component } from 'react';

class App extends Component {
  state = {
    comments: [
      'Comment 1',
      'Comment 2',
      'Comment 3',
      'Comment 4',
    ]
  }

  sendComment = () => {
    this.setState({
      comments: [...this.state.comments, 'Comentário']
    })
  }

  render() {
    return (
      <div>
        {/* NewComment */}
        <div>
          <textarea></textarea>
          <button onClick={this.sendComment}>Enviar</button>
        </div>
        {/* Comments */}
        <div>
          {/* Comment */}
          {this.state.comments.map(comment => (
            <div>{comment}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
