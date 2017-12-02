import React, { PureComponent } from 'react';

class hangmanSteps extends PureComponent {

  wrongGuessCount(word, guesses) {
    var count = 0;
    for (var i = 0; i < guesses.lenght; i++) {
      if (word.indexOf(guesses[i]) === -1 )
      count += 1;
    }
      return count
  }

  renderHangMan(){
    if (this.wrongGuessCount() === 0) {
      return <img src='http://www.justhangman.com/images/hangman_0.gif' alt = "0"/>
    } else if (this.wrongGuessCount()=== 1) {
      return <img src='http://www.sightwordsgame.com/wp-content/uploads/2011/11/Hangman.jpg' alt="1"/>
    } else if (this.wrongGuessCount()=== 2) {
      return <img src='https://vignette.wikia.nocookie.net/austinally/images/c/ce/Hangman_game.png/revision/latest?cb=20140725033826' alt="2"/>
    } else {
      return null
    }
  }

  render(){
    return(
      <div>
        { this.renderHangMan()}
      </div>
    )
  }

}

export default hangmanSteps
