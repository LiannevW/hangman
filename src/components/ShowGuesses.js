import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class showGuesses extends PureComponent {
  render() {
    const { guesses } = this.props
    return (<p>Your wrong guesses: {guesses.join(", ")}</p>)
  }
}

const mapStateToProps = ({ guesses }) => ({ guesses })
export default connect(mapStateToProps)(showGuesses)
