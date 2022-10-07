const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h3>welcome on my site<h3>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})