import BlackJack from "../../blackjack/index.js"

export const getNewDeck = (req, res) => {
  const { numOfDecks } = req.params

  try {
    const newDeck = BlackJack.newDeck(numOfDecks)
    const shuffled = BlackJack.shuffle(newDeck)

    return res.status(200).json(shuffled)
  } catch (err) {
    console.log(err)
  }
}
