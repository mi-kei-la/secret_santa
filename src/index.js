const express = require('express')
const { addData } = require('./writeFile')
const app = express()
const port = 3000
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Holis!')
})

app.post('/add', (req, res) => {
  addData(req, res)
})

app.listen(port, () => {
  console.log(`Secret santa listening on port ${port}`)
})
