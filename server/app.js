const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback')
const Order = require('./order')

const serverMsg = (result, error, extra) => {
  return { result, error, extra }
}

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(history())
app.use(express.static('dist'))
app.use(express.static('public'))

app.use((req, res, next) => {
  consola.info(req.url)
  next()
})

app.get('/hi', (req, res) => {
  res.send(serverMsg('hi', '', ''))
})

app.get('/api/all', (req, res) => {
  const result = app.order.getAll()
  res.send(serverMsg(result, '', ''))
})

app.post('/api/clear', (req, res) => {
  app.order.clearAll()
  res.send(serverMsg('ok', '', ''))
})

app.post('/api/order', (req, res) => {
  const id = req.body.id
  app.order.receiveOrder(id)
  res.send(serverMsg('ok', '', ''))
})

app.post('/api/num', (req, res) => {
  const num = req.body.num
  app.order.setNum(num)
  res.send(serverMsg('ok', '', ''))
  
})

async function start() {
  app.order = new Order()
  const port = 12331
  app.listen(port, () => { consola.info(`Server listening on port ${port}`) })
}

start()