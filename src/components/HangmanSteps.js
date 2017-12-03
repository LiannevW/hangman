import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

class HangmanSteps extends PureComponent {

  renderHangMan() {
    if ((this.props.wrongs) === 0) {
      return <img src='http://www.justhangman.com/images/hangman_0.gif' alt = "0"/>
    } else if ((this.props.wrongs) === 1) {
      return <img src='http://www.sightwordsgame.com/wp-content/uploads/2011/11/Hangman.jpg' alt="1"/>
    } else if ((this.props.wrongs) === 2) {
      return <img src='https://vignette.wikia.nocookie.net/austinally/images/c/ce/Hangman_game.png/revision/latest?cb=20140725033826' alt="2"/>
    } else {
      return null
    }
  }

  render(){
    return(
      <div>
        { this.renderHangMan() }
      </div>
    )
  }

}

const mapStateToProps = ({  }) => ({  })
export default connect(mapStateToProps)(HangmanSteps)
