const express = require("express")

const app = express()

app.listen(4000, (res, req) => {
  console.log("app started at port 4000")
})
