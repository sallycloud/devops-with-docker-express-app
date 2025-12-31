const express = require('express')
const app = express()
const { version } = require('./package.json')
const message = `<h1>Hello World! (v${version})</h1>`

app.get('/', (req, res) => {
  res.send(message)
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server (v${version}) running on port ${PORT}`)
})