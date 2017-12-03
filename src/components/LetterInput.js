import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class LetterInput extends PureComponent {
  render() {
    return (
      <form>
        <label>
          It is your trun to guess:
            <input placeholder="Guess a letter!"  />
        </label>
      </form>
    )
  }
}

const mapStateToProps = ({  }) => ({  })
export default connect(mapStateToProps)(LetterInput)
