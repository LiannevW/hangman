import React, { PureComponent } from 'react'

class Guesses extends PureComponent {
  render() {
    const { guesses } = this.props
    return (<p>Your wrong guesses: {guesses.join(", ")}</p>)
  }
}

export default Guesses
