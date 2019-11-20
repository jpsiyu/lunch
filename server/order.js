class Order {
  constructor() {
    this.num = 0
    this.orderList = []
  }

  getAll() {
    return {
      num: this.num,
      orderList: this.orderList
    }
  }

  clearAll() {
    this.num = 0
    this.orderList = []
  }

  setNum(num) {
    this.num = Number(num)
  }

  receiveOrder(id) {
    const target = this.orderList.findIndex(e => e === id)
    if (target === -1)
      this.orderList.push(id)
    else
      this.orderList.splice(target, 1)
  }
}

module.exports = Order