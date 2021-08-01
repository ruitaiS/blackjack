const BlackJack = {
  newDeck: numOfDecks => {
    const suits = ["S", "H", "D", "C"]
    const ranks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
    const deck = []

    for (let i = 0; i < numOfDecks; i++) {
      for (const suit of suits) {
        for (let i = 0; i < ranks.length; i++) {
          deck.push({ suit, rank: ranks[i], value: values[i] })
        }
      }
    }

    return deck
  },

  shuffle: deck => {
    for (let i = 0; i < deck.length; i++) {
      let temp = deck[i]
      let swap = Math.floor(Math.random() * deck.length)
      deck[i] = deck[swap]
      deck[swap] = temp
    }

    return deck
  }
}

export default BlackJack
