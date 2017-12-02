import React, { PureComponent } from 'react'

class Guesses extends PureComponent {
  render() {
    return <p>Your wrong guesses: { this.props.content }</p>
  }
}

export default Guesses
