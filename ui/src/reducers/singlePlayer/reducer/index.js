import { getCardValue } from "../action"

export const status = {
  BLACKJACK: "blackjack",
  WIN: "win",
  LOSE: "lose",
  PUSH: "push",
  BET: "bet",
  ACTION: "action",
  SHUFFLE: "shuffle"
}

const initialState = {
  deck: [],
  bet: 0,
  dealerHand: [],
  dealerScore: 0,
  playerHand: [],
  playerScore: 0,
  playerBank: 0,
  status: status.BET,
  gameLog: []
}

export const singlePlayer = (state = initialState, action) => {
  switch (action.type) {
    case "INIT":
      return {
        ...initialState,
        deck: action.data.deck,
        playerBank: action.data.amount
      }

    case "DEAL":
      // destructure first four cards to deal
      let [p1, d1, p2, d2, ...afterDeal] = state.deck
      // face down for one of dealer cards
      d1 = { ...d1, face: true }
      return {
        ...state,
        deck: afterDeal,
        dealerHand: [d1, d2],
        playerHand: [p1, p2],
        status: status.ACTION,
        bet: state.bet + action.bet
      }

    case "HIT":
      // destructure first card out of deck
      const [hitCard, ...afterHit] = state.deck
      // create a string that will match state key
      // either playerHand or dealerHand
      const hitTurn = `${action.turn}Hand`
      // get the computed key's value
      // which will be dealerHand or playerHand
      const personCards = state[hitTurn]

      return {
        ...state,
        deck: afterHit,
        [hitTurn]: [...personCards, hitCard]
      }

    case "TALLY":
      return {
        ...state,
        dealerScore: getCardValue(state.dealerHand),
        playerScore: getCardValue(state.playerHand)
      }

    case "OUTCOME":
      const { dealerScore, playerScore, playerHand, dealerHand } = state

      const outcome = () => {
        if (playerScore === 21 && dealerScore < 17) return status.ACTION
        if (playerScore === dealerScore) return status.PUSH
        if (playerScore === 21 && playerHand.length > 2 && dealerScore > 16) return status.WIN
        if (playerScore === 21) return status.BLACKJACK
        if (playerScore > 21) return status.LOSE
        if (dealerScore > 21) return status.WIN
        if (playerScore >= dealerScore) return status.WIN
        if (playerScore < dealerScore) return status.LOSE
        return status.ACTION
      }

      const bookkeeping = () => {
        const result = outcome()
        if (result === status.LOSE) return state.playerBank - state.bet
        if (result === status.WIN) return state.playerBank + state.bet
        if (result === status.PUSH) return state.playerBank
      }

      dealerHand.map(card => (card.face = false))

      return {
        ...state,
        status: outcome(),
        playerBank: bookkeeping(),
        bet: 0,
        dealerHand
      }

    case "GAME_LOG":
      const log = state.gameLog
      return {
        ...state,
        gameLog: [...log, action.data]
      }

    default:
      return state
  }
}
