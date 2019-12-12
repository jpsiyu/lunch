class Order {
  constructor() {
    this.num = 0
    this.tea = ''
    this.orderList = []
    this.remark = ''
  }

  getAll() {
    return {
      num: this.num,
      tea: this.tea,
      orderList: this.orderList,
      remark: this.remark
    }
  }

  clearAll() {
    this.num = 0
    this.remark = ''
    this.orderList = []
  }

  setNum(num) {
    this.num = Number(num)
  }

  setTea(tea) {
    this.tea = tea
  }

  setRemark(remark) {
    this.remark = remark
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