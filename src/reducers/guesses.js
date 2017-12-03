import hangman from '../fixtures/hangman'
import { GUESS_WORD } from '../actions/guess'

export default (state = hangman, action = {}) => {
  switch(action.type) {
    case GUESS_WORD :
      return state.concat([ action.payload ])

  default :
    return state
  }
}
