const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello World<h1>')
})

app.get('/durai', function (req, res) {
    res.send('<h1>Durai wants to sleep<h1>')
  })

app.listen(3000)