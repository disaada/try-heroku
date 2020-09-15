const express = require('express')
const port = process.env.PORT
const app = express()

const model = require('./db/models')
app.get('/', (req, res) => {
  model.user.findAll()
  .then((data) => res.send(data))
  .catch((err) => res.send(err))
})

app.listen(port, () => console.log(`listening app to ${port}`))