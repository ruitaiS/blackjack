//These are mostly ideas rn

const { default: Card } = require("../Components/card")

class card {
  constructor(rank, suit, shown) {
    this.rank = rank // int
    this.suit = suit // str
    this.shown = shown // bool
  }

  flip() {
    if (this.shown) {
      this.shown = false
    } else {
      this.shown = true
    }
  }
}

class hand {
  constructor(cards) {
    this.cards = cards // Array of cards
  }

  addCard(card) {
    this.cards.push(card)
  }

  flipCard(index) {
    cards[index].flip()
  }
}

class deck {
  constructor() {
    //syntax is messed up but w/e
    this.cards = []
    for (let i = 1; i < 14; i++) {
      this.cards.push(new card(i, "C"))
      this.cards.push(new card(i, "D"))
      this.cards.push(new card(i, "H"))
      this.cards.push(new card(i, "S"))
    }

    this.shuffle()
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      // Generate random number
      let j = Math.floor(Math.random() * (i + 1))

      let temp = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = temp
    }
  }

  draw() {
    return this.cards.pop()
  }
}

class player {
  constructor(name, money) {
    this.name = name
    this.money = money
  }

  //Usually only has one hand, but can have more if they split
  //Not totally sure how to model wagering and player actions
}

class game {
  constructor() {
    //players
    //decks
    //idk, some other stuff
  }
}
