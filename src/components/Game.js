import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import LetterInput from './LetterInput'
import HangmanSteps from './HangmanSteps'

class Game extends PureComponent {

  onChange(event) {
  const { guesses } = this.props.hangman
  const { value } = event.target
  if (!guesses.includes(value))
    this.props.addGuess(value)
}

  wrongGuessCount(word, guesses) {
    var count = 0;
    for (var i = 0; i < guesses.lenght; i++) {
      if (word.indexOf(guesses[i]) === -1 )
      count += 1;
    }
      return count
  }

  render() {
      let game
      // const guessCount = this.wrongGuessCount(this.word, guesses)
      if ( this.wrongGuessCount() > 10) {
        game = (
          <div>
            <p>You loose! </p>
          </div>
        )
      } else if ("test" === "tedst") {
        game = (
          <div>
            <p>You win!!</p>
          </div>
        )
      }

      else {
        game = (
          <div>
            <LetterInput context="Print dit"/>
            <HangmanSteps wrongs={guessCount} />
          </div>
        )
      }

    return (
      <div>
        { game }
      </div>
    )
  }
}


const mapStateToProps = ({ guesses }) => ({ guesses })
export default connect(mapStateToProps)(Game)
