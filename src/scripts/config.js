const dishes = [
  { id: 999, name: '椒盐鱼件', img: require('@/assets/images/999.png'), price: 18.8, vipPrice: 18.8 },
  { id: 998, name: '云吞鱼茸烩冬瓜', img: require('@/assets/images/998.png'), price: 18.8, vipPrice: 18.8 },
  { id: 997, name: '紫苏焗围虾', img: require('@/assets/images/997.png'), price: 18.8, vipPrice: 18.8 },
  { id: 2, name: '土炮烧鹅', img: require('@/assets/images/2.png'), price: 68, vipPrice: 48 },
  { id: 3, name: '深海鱼柳叉烧', img: require('@/assets/images/3.png'), price: 55, vipPrice: 48 },
  { id: 4, name: '手撕鸡', img: require('@/assets/images/4.png'), price: 58, vipPrice: 50 },
  { id: 5, name: '土炮烧乳鸭', img: require('@/assets/images/5.png'), price: 35, vipPrice: 28 },
  { id: 6, name: '蜜汁叉烧', img: require('@/assets/images/6.png'), price: 55, vipPrice: 45 },
  { id: 7, name: '传统烧排骨', img: require('@/assets/images/7.png'), price: 55, vipPrice: 45 },
  { id: 8, name: '串烧大节虾', img: require('@/assets/images/8.png'), price: 18, vipPrice: 13 },
  { id: 9, name: '红烧乳鸽', img: require('@/assets/images/9.png'), price: 38, vipPrice: 28 },
  { id: 10, name: '爽皮白切鸡', img: require('@/assets/images/10.png'), price: 58, vipPrice: 50 },
  { id: 11, name: '沙姜蒜香烧鸡', img: require('@/assets/images/11.png'), price: 58, vipPrice: 50 },
  { id: 12, name: '桶子豉油鸡', img: require('@/assets/images/12.png'), price: 58, vipPrice: 50 },
  { id: 13, name: '好味汁拆骨猪手', img: require('@/assets/images/13.png'), price: 48, vipPrice: 38 },
  { id: 14, name: '卤水鹅肾', img: require('@/assets/images/14.png'), price: 38, vipPrice: 28 },
  { id: 15, name: '卤水鸭掌', img: require('@/assets/images/15.png'), price: 45, vipPrice: 35 },
  { id: 16, name: '卤水鹅翼', img: require('@/assets/images/16.png'), price: 45, vipPrice: 35 },
  { id: 17, name: '鲍汁鸡脚', img: require('@/assets/images/17.png'), price: 40, vipPrice: 30 },
  { id: 18, name: '土炮佛跳墙', img: require('@/assets/images/18.png'), price: 248, vipPrice: 198 },
  { id: 19, name: '椰子炖鸡', img: require('@/assets/images/19.png'), price: 23, vipPrice: 18 },
  { id: 20, name: '煎蛋时蔬肉片汤', img: require('@/assets/images/20.png'), price: 38, vipPrice: 28 },
  { id: 21, name: '笋壳鱼', img: require('@/assets/images/21.png'), price: 58, vipPrice: 38 },
  { id: 22, name: '脆肉大罗非', img: require('@/assets/images/22.png'), price: 42, vipPrice: 30 },
  { id: 23, name: '从化瘦身鲩鱼', img: require('@/assets/images/23.png'), price: 20, vipPrice: 13 },
  { id: 24, name: '大连鲍鱼', img: require('@/assets/images/24.png'), price: 15, vipPrice: 9.8 },
  { id: 25, name: '元贝', img: require('@/assets/images/25.png'), price: 55, vipPrice: 45 },
  { id: 26, name: '波士顿龙虾仔', img: require('@/assets/images/26.png'), price: 138, vipPrice: 118 },
  { id: 27, name: '基围虾', img: require('@/assets/images/27.png'), price: 58, vipPrice: 38 },
  { id: 28, name: '水鱼仔', img: require('@/assets/images/28.png'), price: 48, vipPrice: 35 },
  { id: 29, name: '海青斑鱼', img: require('@/assets/images/29.png'), price: 68, vipPrice: 58 },
  { id: 30, name: '土炮独家一口虾', img: require('@/assets/images/30.png'), price: 48, vipPrice: 35 },
  { id: 31, name: '香西花生捞鲜支竹', img: require('@/assets/images/31.png'), price: 35, vipPrice: 28 },
  { id: 32, name: '大豆芽捞海蜇皮', img: require('@/assets/images/32.png'), price: 35, vipPrice: 28 },
  { id: 33, name: '海虾瘦身鲩', img: require('@/assets/images/33.png'), price: 55, vipPrice: 48 },
  { id: 34, name: '韭黄鲜虾炒老蛋', img: require('@/assets/images/34.png'), price: 48, vipPrice: 38 },
  { id: 35, name: '土炮一品煲', img: require('@/assets/images/35.png'), price: 98, vipPrice: 68 },
  { id: 36, name: '砂锅焗鱼头', img: require('@/assets/images/36.png'), price: 58, vipPrice: 50 },
  { id: 37, name: '绍菜粉丝双虾煲', img: require('@/assets/images/37.png'), price: 55, vipPrice: 38 },
  { id: 38, name: '生面筋掌亦煲', img: require('@/assets/images/38.png'), price: 45, vipPrice: 35 },
  { id: 39, name: '鱼珠鱼宝', img: require('@/assets/images/39.png'), price: 98, vipPrice: 88 },
  { id: 40, name: '牛肉酱纹茄子豆角', img: require('@/assets/images/40.png'), price: 35, vipPrice: 28 },
  { id: 41, name: '香煎黄花鱼', img: require('@/assets/images/41.png'), price: 48, vipPrice: 32 },
  { id: 42, name: '台山菜花炒烧肉', img: require('@/assets/images/42.png'), price: 48, vipPrice: 38 },
  { id: 43, name: '榄菜豆干炒猪耳', img: require('@/assets/images/43.png'), price: 45, vipPrice: 38 },
  { id: 44, name: '凉瓜豆豉鲮鱼', img: require('@/assets/images/44.png'), price: 35, vipPrice: 28 },
  { id: 45, name: '莲肉纹双丸', img: require('@/assets/images/45.png'), price: 45, vipPrice: 35 },
  { id: 46, name: '云耳支竹红烧豆腐', img: require('@/assets/images/46.png'), price: 42, vipPrice: 32 },
  { id: 47, name: '香麻辣子鸡', img: require('@/assets/images/47.png'), price: 48, vipPrice: 38 },
  { id: 48, name: '干煸四季豆', img: require('@/assets/images/48.png'), price: 35, vipPrice: 25 },
  { id: 49, name: '香辣鲜鱿圈', img: require('@/assets/images/49.png'), price: 55, vipPrice: 45 },
  { id: 50, name: '酸菜鱼', img: require('@/assets/images/50.png'), price: 55, vipPrice: 45 },
  { id: 51, name: '香婆酱蒸鱼头', img: require('@/assets/images/51.png'), price: 58, vipPrice: 50 },
  { id: 52, name: '花生焖鸡脚', img: require('@/assets/images/52.png'), price: 38, vipPrice: 28 },
  { id: 53, name: '面酱捞豆角', img: require('@/assets/images/53.png'), price: 35, vipPrice: 25 },
  { id: 54, name: '顺德捞鱼皮', img: require('@/assets/images/54.png'), price: 35, vipPrice: 28 },
  { id: 55, name: '葱捞牛肉牛丸', img: require('@/assets/images/55.png'), price: 55, vipPrice: 45 },
  { id: 56, name: '芥末菜花捞鲜鱿片', img: require('@/assets/images/56.png'), price: 55, vipPrice: 42 },
  { id: 57, name: '紫苏剪焗酿尖椒', img: require('@/assets/images/57.png'), price: 45, vipPrice: 35 },
  { id: 58, name: '蛋角萝卜肉丸', img: require('@/assets/images/58.png'), price: 38, vipPrice: 28 },
  { id: 59, name: '大良剪虾饼', img: require('@/assets/images/59.png'), price: 48, vipPrice: 38 },
  { id: 60, name: '鲜沙姜蒜头焗鲜鱿筒', img: require('@/assets/images/60.png'), price: 58, vipPrice: 48 },
  { id: 61, name: '白灼鲜鱿片', img: require('@/assets/images/61.png'), price: 55, vipPrice: 45 },
  { id: 62, name: '韭菜猪红煲', img: require('@/assets/images/62.png'), price: 35, vipPrice: 26 },
  { id: 63, name: '肉碎豆角煎蛋', img: require('@/assets/images/63.png'), price: 38, vipPrice: 28 },
  { id: 64, name: '羌酒煮鸡什', img: require('@/assets/images/64.png'), price: 38, vipPrice: 28 },
  { id: 65, name: '小葱剪酿豆腐', img: require('@/assets/images/65.png'), price: 38, vipPrice: 28 },
  { id: 66, name: '粉莲肉绿豆筒骨煲', img: require('@/assets/images/66.png'), price: 48, vipPrice: 38 },
  { id: 67, name: '香葱炒烧肉', img: require('@/assets/images/67.png'), price: 48, vipPrice: 38 },
  { id: 68, name: '香菇炒牛肉', img: require('@/assets/images/68.png'), price: 55, vipPrice: 45 },
  { id: 69, name: '潮式凉瓜烧骨煲', img: require('@/assets/images/69.png'), price: 48, vipPrice: 38 },
  { id: 70, name: '脆炸生蚝', img: require('@/assets/images/70.png'), price: 58, vipPrice: 48 },
  { id: 71, name: '大良炸牛奶', img: require('@/assets/images/71.png'), price: 38, vipPrice: 28 },
  { id: 72, name: '道滘蒸肉丸', img: require('@/assets/images/72.png'), price: 48, vipPrice: 38 },
  { id: 73, name: '凤肉片炒藕带', img: require('@/assets/images/73.png'), price: 48, vipPrice: 38 },
  { id: 74, name: '咖喱茨仔焖虾', img: require('@/assets/images/74.png'), price: 38, vipPrice: 28 },
  { id: 75, name: '鱼香茄子煲', img: require('@/assets/images/75.png'), price: 38, vipPrice: 28 },
  { id: 76, name: '咸鱼蒸肉饼', img: require('@/assets/images/76.png'), price: 48, vipPrice: 38 },
  { id: 77, name: '韭菜鸡子生蚝煲', img: require('@/assets/images/77.png'), price: 65, vipPrice: 55 },
  { id: 78, name: '香菠咕噜肉', img: require('@/assets/images/78.png'), price: 38, vipPrice: 28 },
  { id: 79, name: '五柳松子鱼', img: require('@/assets/images/79.png'), price: 38, vipPrice: 30 },
  { id: 80, name: '子萝炒牛肉', img: require('@/assets/images/80.png'), price: 45, vipPrice: 28 },
  { id: 81, name: '芥兰炒烧肉', img: require('@/assets/images/81.png'), price: 48, vipPrice: 38 },
  { id: 82, name: '香芋扣肉煲', img: require('@/assets/images/82.png'), price: 55, vipPrice: 45 },
  { id: 83, name: '干蒸上汤桑叶', img: require('@/assets/images/83.png'), price: 38, vipPrice: 28 },
  { id: 84, name: '鸡汁蒸珍珠菌', img: require('@/assets/images/84.png'), price: 38, vipPrice: 30 },
  { id: 85, name: '盐水菜心', img: require('@/assets/images/85.png'), price: 28, vipPrice: 25 },
  { id: 86, name: '南瓜粒炒栗米粒', img: require('@/assets/images/86.png'), price: 35, vipPrice: 25 },
  { id: 87, name: '香葱焗生肉包', img: require('@/assets/images/87.png'), price: 28, vipPrice: 22 },
  { id: 88, name: '菜心粒吓人煲', img: require('@/assets/images/88.png'), price: 38, vipPrice: 30 },
  { id: 89, name: '头抽鸡蛋炒面', img: require('@/assets/images/89.png'), price: 26, vipPrice: 20 },
  { id: 90, name: '香煎葱油饼', img: require('@/assets/images/90.png'), price: 28, vipPrice: 22 },
  { id: 91, name: '鹅汁蒸陈村粉', img: require('@/assets/images/91.png'), price: 28, vipPrice: 20 },
  { id: 92, name: '台山黄鳝饭', img: require('@/assets/images/92.png'), price: 58, vipPrice: 48 },
  { id: 93, name: '干炒牛肉河粉', img: require('@/assets/images/93.png'), price: 38, vipPrice: 25 },
  { id: 94, name: '阳江鹅乸饭', img: require('@/assets/images/94.png'), price: 38, vipPrice: 30 },
]

export default { dishes } 