const express = require('express')
const app = express()

const server = app.listen(80)

app.get('/', (req, res, next) => {
  res.send('hello world')
})
