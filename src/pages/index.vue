<template>
  <div class="home">
    <div class="home-left">
      <el-form label-width="50px" label-position="top">
        <el-form-item label="已定:">
          <div class="orders">
            <div class="order" v-for="(item, index) in selected" :key="item.id">
              <span>{{index}}</span>
              <span class="order-name">{{item.name}}</span>
              <span>{{item.price}}</span>
              <span>{{item.vipPrice}}</span>
            </div>
            <div class="order" v-show="num">
              <span>茶位</span>
              <span>{{3 * num}}</span>
              <span>{{3 * num}}</span>
            </div>
            <div class="order" v-show="num">
              <span>米饭</span>
              <span>{{3 * num}}</span>
              <span>{{3 * num}}</span>
            </div>
            <span v-if="selected.length === 0 && num === 0">暂无</span>
          </div>
        </el-form-item>
      </el-form>
      <el-form label-width="80px" label-position="left" @submit.native.prevent>
        <el-form-item label="人数:">
          <el-input-number v-model="num" :min="0" :max="100"></el-input-number>
        </el-form-item>
        <el-form-item label="VIP:">
          <el-switch v-model="vip" active-color="#13ce66"></el-switch>
        </el-form-item>
        <el-form-item label="总价:">
          <span class="home-total">{{orderTotal}}</span>
        </el-form-item>
        <el-form-item label="人均:">
          <span class="home-total">{{avg}}</span>
        </el-form-item>
      </el-form>
      <el-button @click="clearOrder" type="warning" style="margin-top:20px">清空</el-button>
    </div>
    <div class="home-right">
      <div class="dish" v-for="(item,index) in dishes" :key="index" @click="sendOrder(item)">
        <p class="dish-name">{{item.name}}</p>
        <img :src="item.img" alt />
        <div class="dish-price">
          <span>价格: {{item.price}}</span>
          <span>VIP: {{item.vipPrice}}</span>
        </div>
        <div class="dish-selected" v-show="isSelected(item.id)">
          <i class="el-icon-check"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/scripts/config'
export default {
  data() {
    return {
      vip: true,
      num: 0,
      selected: [],
    }
  },
  computed: {
    orderTotal() {
      let sum = 0
      this.selected.forEach(e => {
        this.vip
          ? sum += e.vipPrice
          : sum += e.price
      })
      sum += this.num * 6
      return sum
    },
    dishes() {
      return config.dishes
    },
    avg(){
      const avg = this.num ? this.orderTotal / this.num : this.orderTotal
      return avg.toFixed(2)
    }
  },
  watch: {
    num(val, oldVal) {
      if (val !== oldVal) {
        this.sendNum(val)
      }
    }
  },
  mounted() {
    setInterval(this.getOrderId, 500)
  },
  methods: {
    getOrderId() {
      this.$axios.get('/api/all')
        .then(res => {
          const dishes = []
          const { num, orderList } = res.result
          orderList.forEach(id => {
            const target = this.dishes.find(cfg => id === cfg.id)
            if (target)
              dishes.push(target)
          })
          this.selected = dishes
          this.num = num
        })
    },
    sendOrder(item) {
      this.$axios.post('/api/order', { id: item.id })
    },

    sendNum() {
      this.$axios.post('/api/num', { num: this.num })
    },

    clearOrder() {
      this.$axios.post('/api/clear')
    },

    isSelected(id) {
      const target = this.selected.find(e => e.id === id)
      return target !== undefined
    },
  }
}
</script>

<style scoped>
.home {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  color: #909399;
}

.home-left {
  flex: 1;
  min-width: 200px;
  border-right: 1px solid #909399;
  padding: 10px;
  height: 100%;
  overflow-y: auto;
}

.orders {
  padding: 0 30px;
}

.order {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #909399;
}

.order-name {
  width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.home-right {
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 100%;
  overflow-y: auto;
}

.dish {
  position: relative;
  padding: 10px;
  cursor: pointer;
}

.dish img {
  width: 200px;
  height: 200px;
}

.dish-price span {
  display: inline-block;
  margin-right: 20px;
}

.dish-selected {
  position: absolute;
  top: 16%;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: #67c23a;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
}

.home-total {
  display: inline-block;
  transform: scale(2);
  color: #f56c6c;
  text-decoration: underline;
}
</style>