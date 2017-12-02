export const GUESS_WORD = 'GUESS_WORD'

export default (newGuess) => {
  return {
    type: GUESS_WORD,
    payload: newGuess
  }
}
