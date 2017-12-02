import React, { PureComponent } from 'react'

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

export default LetterInput
