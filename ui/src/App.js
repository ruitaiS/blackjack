import { useState, useEffect } from "react"
import axios from "axios"
import Card from "./Components/card"

function App() {
  const [deck, setDeck] = useState([])

  useEffect(() => {
    const getADeck = async () => {
      const { data } = await axios.get(`http://localhost:4000/deck/1`)
      setDeck(data)
    }

    getADeck()
  }, [])

  console.log(deck)

  return <Card rank={"1"} suit={"C"} shown={true} />
}

export default App
