const express = require('express')
const app = express()
const port = 3000


app.get('/your', (req, res) => {
    res.send('<h1>Hello yours!<h1>')
  })


app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.listen(port)