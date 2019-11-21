<template>
  <el-collapse class="fm">
    <el-collapse-item name="formula">
      <template slot="title">
        <span class="fm-tips">最划算</span>
        <img class="fm-gongfu" src="@/assets/gongfu.gif" alt />
      </template>
      <p class="fm-title">定义:</p>
      <div class="fm-group">
        <p>normal, 为一般情况的费用</p>
        <p>deposit, 充进会员卡的钱</p>
        <p>count, 卡可用次数</p>
        <p>avg, 平均费用，含免费那次</p>
      </div>
      <p class="fm-title">则有:</p>
      <div class="fm-group">
        <p>count = deposit / normal</p>
        <p>avg = deposit / (count + 1)</p>
        <p>avg = deposit / (deposit / normal + 1)</p>
        <p>avg = (deposit * normal) / (deposit + normal)</p>
      </div>
      <p class="fm-title">结论:</p>
      <div class="fm-group">
        normal不变，随着deposit增大，分子比分母增长更快，平均每顿饭的成本会更高。
        这是因为每次充钱时可以免费一顿，deposit越小，免费一顿的频率越高。
      </div>
      <p class="fm-title">演算:</p>
      <div class="fm-group">
        <p>normal=200, deposit=1000, avg=166.67</p>
        <p>normal=200, deposit=2000, avg=181.82</p>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<style scoped>
.fm {
  font-size: 14px;
  margin-top: 20px;
}

.fm-title {
  margin: 10px 0 0 0;
}

.fm-group {
  margin-left: 10px;
}

.fm-group p {
  margin: 0;
}

.fm-gongfu {
  height: 100%;
}

.fm-tips {
  word-break: keep-all;
}
</style>