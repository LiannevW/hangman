import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Word extends PureComponent {

  showGuess( ) {
      const { secretWord, guesses } = this.props
      var wordArray = secretWord.split("").map(function(letter) {
        if (guesses.includes(letter)) return letter;
        else return "_";
      })
      return wordArray.join(" ");
  }

  render(){
    return(
      <div>
        { this.showGuess }
      </div>
    )
  }

}

const mapStateToProps = ({ secretWord, guesses }) => ({ secretWord, guesses })
export default connect(mapStateToProps)(Word)
