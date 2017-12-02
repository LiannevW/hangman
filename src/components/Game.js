import React, { PureComponent } from 'react'
import LetterInput from './LetterInput'
import HangmanSteps from './HangmanSteps'
import Guesses from './Guesses'
import Word from './Words'

class Game extends PureComponent {

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
            <HangmanSteps  />
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

export default Game
