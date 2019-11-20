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

/**
 * websocket
 */
const server = require('http').createServer(app)
const io = require('socket.io')(server)
io.on('connection', (socket) => {
  socket.on('connect', () => {
    console.log('connect')
  })
  socket.on('message', args => {
    console.log('message', ...args)
  })
  socket.on('all', () => {
    socket.emit('all', app.order.getAll())
  })
  socket.on('order', args => {
    const { id } = args
    app.order.receiveOrder(id)
    socket.emit('all', app.order.getAll())
  })
  socket.on('num', args => {
    const { num } = args
    app.order.setNum(num)
    socket.emit('all', app.order.getAll())
  })
  socket.on('clear', args => {
    app.order.clearAll()
    socket.emit('all', app.order.getAll())
  })
  socket.on('disconnect', () => {
    console.log('disconnect')
  })
})

app.order = new Order()
const port = 12331
server.listen(port, () => { consola.info(`Server listening on port ${port}`) })
