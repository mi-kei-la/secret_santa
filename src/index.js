const express = require('express')
const { addData } = require('./writeFile')
const app = express()
const cors = require('cors')
const port = 3000

app.use(express.json());
cors({credentials: true, origin: true})
app.use(cors());

app.get('/', (req, res) => {
  res.send('Holis!')
})

app.post('/add', (req, res) => {
  addData(req, res)
})

app.listen(port, () => {
  console.log(`Secret santa listening on port ${port}`)
})
