class SocketMgr {
  constructor() {
    this.socketList = []
  }

  add(socket) {
    this.socketList.push(socket)
  }

  delete(socket) {
    const targetIndex = this.socketList.findIndex(e => e === socket)
    if (targetIndex !== -1) {
      this.socketList.splice(targetIndex, 1)
    }
  }

  broadcast(msg, args) {
    this.socketList.forEach(socket => {
      socket.emit(msg, args)
    })
  }
}

module.exports = SocketMgr