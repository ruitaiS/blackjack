import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth/index.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/auth", authRoutes)

app.get("/", (request, response) => response.send("welcome to blackjack api"))

app.listen(4000, (res, req) => {
  console.log("app started at port 4000")
})
