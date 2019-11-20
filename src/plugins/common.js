import Vue from 'vue'

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:12331' : ''

const _common = {
  baseURL
}

Vue.prototype.$common = _common
export default _common