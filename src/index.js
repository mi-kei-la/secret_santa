const express = require('express')
const { addData } = require('./writeFile')
const app = express()
const port = 3000
app.use(express.json());

// Count middleware for ID
let count = 0;
function countMiddleware(req, res, next) {
  count++
  next()
}
app.use(countMiddleware);


app.get('/', (req, res) => {
  res.send('Holis!')
})


app.post('/add', (req, res) => {
  req.count = count
  addData(req, res)
})

app.listen(port, () => {
  console.log(`Secret santa listening on port ${port}`)
})
