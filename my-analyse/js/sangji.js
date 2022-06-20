my_sangji = echarts.init(document.getElementById('container6-top'));
var option;

link1 = [
        
  {
    source: '深大',
    target: '高新园',
    value: 10384.949975416064*21
  },
  {
    source: '深大',
    target: '宝安中心',
    value: 10384.949975416064*7
  },
  {
    source: '深大',
    target: '世界之窗',
    value: 10384.949975416064*4
  },
  {
    source: '深大',
    target: '香蜜',
    value: 10384.949975416064*14
  },
  {
    source: '深大',
    target: '购物公园',
    value: 10384.949975416064*20
  },
  {
    source: '深大',
    target: '华强北',
    value: 10384.949975416064*37
  },
  {
    source: '深大',
    target: '蛇口港',
    value: 10384.949975416064*3
  },
  //高新园
  {
    source: '高新园',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '餐饮',
    value: 10384.949975416064
  },
  //蛇口港
  {
    source: '蛇口港',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '餐饮',
    value: 10384.949975416064
  },
  //华强北
  {
    source: '华强北',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '餐饮',
    value: 10384.949975416064
  },
  //购物公园
  {
    source: '购物公园',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '餐饮',
    value: 10384.949975416064
  },
  //香蜜
  {
    source: '香蜜',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '餐饮',
    value: 10384.949975416064
  },
  //世界之窗
  {
    source: '世界之窗',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '餐饮',
    value: 10384.949975416064
  },
  //宝安中心
  {
    source: '宝安中心',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '餐饮',
    value: 10384.949975416064
  }

  
]
link2 = [
        
  {
    source: '华强北',
    target: '高新园',
    value: 10384.949975416064*21
  },
  {
    source: '华强北',
    target: '宝安中心',
    value: 10384.949975416064*7
  },
  {
    source: '华强北',
    target: '世界之窗',
    value: 10384.949975416064*4
  },
  {
    source: '华强北',
    target: '香蜜',
    value: 10384.949975416064*14
  },
  {
    source: '华强北',
    target: '购物公园',
    value: 10384.949975416064*20
  },
  {
    source: '华强北',
    target: '深大',
    value: 10384.949975416064*37
  },
  {
    source: '华强北',
    target: '蛇口港',
    value: 10384.949975416064*3
  },
  //高新园
  {
    source: '高新园',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '餐饮',
    value: 10384.949975416064
  },
  //蛇口港
  {
    source: '蛇口港',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '餐饮',
    value: 10384.949975416064
  },
  //华强北
  {
    source: '深大',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '餐饮',
    value: 10384.949975416064
  },
  //购物公园
  {
    source: '购物公园',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '餐饮',
    value: 10384.949975416064
  },
  //香蜜
  {
    source: '香蜜',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '餐饮',
    value: 10384.949975416064
  },
  //世界之窗
  {
    source: '世界之窗',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '餐饮',
    value: 10384.949975416064
  },
  //宝安中心
  {
    source: '宝安中心',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '餐饮',
    value: 10384.949975416064
  }

  
]
link3 = [
        
  {
    source: '高新园',
    target: '华强北',
    value: 10384.949975416064*21
  },
  {
    source: '高新园',
    target: '宝安中心',
    value: 10384.949975416064*7
  },
  {
    source: '高新园',
    target: '世界之窗',
    value: 10384.949975416064*4
  },
  {
    source: '高新园',
    target: '香蜜',
    value: 10384.949975416064*14
  },
  {
    source: '高新园',
    target: '购物公园',
    value: 10384.949975416064*20
  },
  {
    source: '高新园',
    target: '深大',
    value: 10384.949975416064*37
  },
  {
    source: '高新园',
    target: '蛇口港',
    value: 10384.949975416064*3
  },
  //高新园
  {
    source: '华强北',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '餐饮',
    value: 10384.949975416064
  },
  //蛇口港
  {
    source: '蛇口港',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '餐饮',
    value: 10384.949975416064
  },
  //华强北
  {
    source: '深大',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '餐饮',
    value: 10384.949975416064
  },
  //购物公园
  {
    source: '购物公园',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '餐饮',
    value: 10384.949975416064
  },
  //香蜜
  {
    source: '香蜜',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '餐饮',
    value: 10384.949975416064
  },
  //世界之窗
  {
    source: '世界之窗',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '餐饮',
    value: 10384.949975416064
  },
  //宝安中心
  {
    source: '宝安中心',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '餐饮',
    value: 10384.949975416064
  }

  
]
link4 = [
        
  {
    source: '购物公园',
    target: '华强北',
    value: 10384.949975416064*21
  },
  {
    source: '购物公园',
    target: '宝安中心',
    value: 10384.949975416064*7
  },
  {
    source: '购物公园',
    target: '世界之窗',
    value: 10384.949975416064*4
  },
  {
    source: '购物公园',
    target: '香蜜',
    value: 10384.949975416064*14
  },
  {
    source: '购物公园',
    target: '高新园',
    value: 10384.949975416064*20
  },
  {
    source: '购物公园',
    target: '深大',
    value: 10384.949975416064*37
  },
  {
    source: '购物公园',
    target: '蛇口港',
    value: 10384.949975416064*3
  },
  //高新园
  {
    source: '华强北',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '餐饮',
    value: 10384.949975416064
  },
  //蛇口港
  {
    source: '蛇口港',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '餐饮',
    value: 10384.949975416064
  },
  //华强北
  {
    source: '深大',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '餐饮',
    value: 10384.949975416064
  },
  //购物公园
  {
    source: '高新园',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '餐饮',
    value: 10384.949975416064
  },
  //香蜜
  {
    source: '香蜜',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '餐饮',
    value: 10384.949975416064
  },
  //世界之窗
  {
    source: '世界之窗',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '餐饮',
    value: 10384.949975416064
  },
  //宝安中心
  {
    source: '宝安中心',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '餐饮',
    value: 10384.949975416064
  }

  
]

link5 = [
        
  {
    source: '香蜜',
    target: '华强北',
    value: 10384.949975416064*21
  },
  {
    source: '香蜜',
    target: '宝安中心',
    value: 10384.949975416064*7
  },
  {
    source: '香蜜',
    target: '世界之窗',
    value: 10384.949975416064*4
  },
  {
    source: '香蜜',
    target: '购物公园',
    value: 10384.949975416064*14
  },
  {
    source: '香蜜',
    target: '高新园',
    value: 10384.949975416064*20
  },
  {
    source: '香蜜',
    target: '深大',
    value: 10384.949975416064*37
  },
  {
    source: '香蜜',
    target: '蛇口港',
    value: 10384.949975416064*3
  },
  //高新园
  {
    source: '华强北',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '餐饮',
    value: 10384.949975416064
  },
  //蛇口港
  {
    source: '蛇口港',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '餐饮',
    value: 10384.949975416064
  },
  //华强北
  {
    source: '深大',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '餐饮',
    value: 10384.949975416064
  },
  //购物公园
  {
    source: '高新园',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '餐饮',
    value: 10384.949975416064
  },
  //香蜜
  {
    source: '购物公园',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '餐饮',
    value: 10384.949975416064
  },
  //世界之窗
  {
    source: '世界之窗',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '餐饮',
    value: 10384.949975416064
  },
  //宝安中心
  {
    source: '宝安中心',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '餐饮',
    value: 10384.949975416064
  }

  
]

link6 = [
        
  {
    source: '蛇口港',
    target: '高新园',
    value: 10384.949975416064*21
  },
  {
    source: '蛇口港',
    target: '宝安中心',
    value: 10384.949975416064*7
  },
  {
    source: '蛇口港',
    target: '世界之窗',
    value: 10384.949975416064*4
  },
  {
    source: '蛇口港',
    target: '香蜜',
    value: 10384.949975416064*14
  },
  {
    source: '蛇口港',
    target: '购物公园',
    value: 10384.949975416064*20
  },
  {
    source: '蛇口港',
    target: '华强北',
    value: 10384.949975416064*37
  },
  {
    source: '蛇口港',
    target: '深大',
    value: 10384.949975416064*3
  },
  //高新园
  {
    source: '高新园',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '餐饮',
    value: 10384.949975416064
  },
  //蛇口港
  {
    source: '深大',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '餐饮',
    value: 10384.949975416064
  },
  //华强北
  {
    source: '华强北',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '餐饮',
    value: 10384.949975416064
  },
  //购物公园
  {
    source: '购物公园',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '餐饮',
    value: 10384.949975416064
  },
  //香蜜
  {
    source: '香蜜',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '餐饮',
    value: 10384.949975416064
  },
  //世界之窗
  {
    source: '世界之窗',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '餐饮',
    value: 10384.949975416064
  },
  //宝安中心
  {
    source: '宝安中心',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '餐饮',
    value: 10384.949975416064
  }

  
]

link7 = [
        
  {
    source: '世界之窗',
    target: '高新园',
    value: 10384.949975416064*21
  },
  {
    source: '世界之窗',
    target: '宝安中心',
    value: 10384.949975416064*7
  },
  {
    source: '世界之窗',
    target: '蛇口港',
    value: 10384.949975416064*4
  },
  {
    source: '世界之窗',
    target: '香蜜',
    value: 10384.949975416064*14
  },
  {
    source: '世界之窗',
    target: '购物公园',
    value: 10384.949975416064*20
  },
  {
    source: '世界之窗',
    target: '华强北',
    value: 10384.949975416064*37
  },
  {
    source: '世界之窗',
    target: '深大',
    value: 10384.949975416064*3
  },
  //高新园
  {
    source: '高新园',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '餐饮',
    value: 10384.949975416064
  },
  //蛇口港
  {
    source: '深大',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '餐饮',
    value: 10384.949975416064
  },
  //华强北
  {
    source: '华强北',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '餐饮',
    value: 10384.949975416064
  },
  //购物公园
  {
    source: '购物公园',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '餐饮',
    value: 10384.949975416064
  },
  //香蜜
  {
    source: '香蜜',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '餐饮',
    value: 10384.949975416064
  },
  //世界之窗
  {
    source: '蛇口港',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '餐饮',
    value: 10384.949975416064
  },
  //宝安中心
  {
    source: '宝安中心',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '宝安中心',
    target: '餐饮',
    value: 10384.949975416064
  }

  
]

link8 = [
        
  {
    source: '宝安中心',
    target: '高新园',
    value: 10384.949975416064*21
  },
  {
    source: '宝安中心',
    target: '深大',
    value: 10384.949975416064*7
  },
  {
    source: '宝安中心',
    target: '世界之窗',
    value: 10384.949975416064*4
  },
  {
    source: '宝安中心',
    target: '香蜜',
    value: 10384.949975416064*14
  },
  {
    source: '宝安中心',
    target: '购物公园',
    value: 10384.949975416064*20
  },
  {
    source: '宝安中心',
    target: '华强北',
    value: 10384.949975416064*37
  },
  {
    source: '宝安中心',
    target: '蛇口港',
    value: 10384.949975416064*3
  },
  //高新园
  {
    source: '高新园',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '高新园',
    target: '餐饮',
    value: 10384.949975416064
  },
  //蛇口港
  {
    source: '蛇口港',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '蛇口港',
    target: '餐饮',
    value: 10384.949975416064
  },
  //华强北
  {
    source: '华强北',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '华强北',
    target: '餐饮',
    value: 10384.949975416064
  },
  //购物公园
  {
    source: '购物公园',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '购物公园',
    target: '餐饮',
    value: 10384.949975416064
  },
  //香蜜
  {
    source: '香蜜',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '香蜜',
    target: '餐饮',
    value: 10384.949975416064
  },
  //世界之窗
  {
    source: '世界之窗',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '世界之窗',
    target: '餐饮',
    value: 10384.949975416064
  },
  //宝安中心
  {
    source: '深大',
    target: '交通设施',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '住宿服务',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '体育休闲',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '公共设施',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '医疗',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '商务住宅',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '教育',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '生活服务',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '金融保险',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '风景',
    value: 10384.949975416064
  },
  {
    source: '深大',
    target: '餐饮',
    value: 10384.949975416064
  }

  
]
// my_sangji.showLoading();
option = {
  title: {
    text: "站点客流-来去之间",
            textAlign: "center",
            left: "50%",
            top: "2%",
  },

  backgroundColor: '#FFFFFF',


  series: [
    {
      type: 'sankey',
      // xAxisIndex:0,
      // yAxisIndex:0,
      // left: 50.0,
      top: 50.0,
      // right: 50.0,
      // bottom: 55.0,
      data: [
        {
          name: '交通设施',
          itemStyle: {
            color: '#f18bbf',
            borderColor: '#f18bbf'
          }
        },
        {
          name: '住宿服务',
          itemStyle: {
            color: '#0078D7',
            borderColor: '#0078D7'
          }
        },


        {
          name: '体育休闲',
          itemStyle: {
            color: '#964305',
            borderColor: '#964305'
          }
        },
        {
          name: '公共设施',
          itemStyle: {
            color: '#485FB5',
            borderColor: '#485FB5'
          }
        },
        {
          name: '医疗',
          itemStyle: {
            color: '#87a0c7',
            borderColor: '#87a0c7'
          }
        },
        {
          name: '商务住宅',
          itemStyle: {
            color: '#FFE2C5',
            borderColor: '#FFE2C5'
          }
        },
        {
          name: '教育',
          itemStyle: {
            color: '#40699D',
            borderColor: '#40699D'
          }
        },
        {
          name: '生活服务',
          itemStyle: {
            color: '#7e7eb2',
            borderColor: '#7e7eb2'
          }
        },
        {
          name: '金融保险',
          itemStyle: {
            color: '#587C7D',
            borderColor: '#587C7D'
          }
        },
        {
          name: '风景',
          itemStyle: {
            color: '#F07F09',
            borderColor: '#F07F09'
          }
        },
        {
          name: '餐饮',
          itemStyle: {
            color: '#E3008C',
            borderColor: '#E3008C'
          }
        },
        {
          name: '蛇口港',
          itemStyle: {
            color: '#B58B80',
            borderColor: '#B58B80'
          }
        },
        {
          name: '华强北',
          itemStyle: {
            color: 'rgba(159,65,62,255)',
            borderColor: 'rgba(159,65,62,255)'
          }
        },
        {
          name: '购物公园',
          itemStyle: {
            color: '#6A5286',
            borderColor: '#6A5286'
          }
        },
        {
          name: '香蜜',
          itemStyle: {
            color: '#F89746',
            borderColor: '#F89746'
          }
        },
        {
          name: '世界之窗',
          itemStyle: {
            color: '#744DA9',
            borderColor: '#744DA9'
          }
        },
        {
          name: '高新园',
          itemStyle: {
            color: '#E8B7B7',
            borderColor: '#E8B7B7'
          }
        },
        {
          name: '宝安中心',
          itemStyle: {
            color: '#C32D2E',
            borderColor: '#C32D2E'
          }
        },

        {
          name: '深大',
          itemStyle: {

            color: '#4dc0a6',
            borderColor: '#4dc0a6'
          }
        },
      ],
      links: link1,
      lineStyle: {
        color: 'source',
        curveness: 0.5
      },
      itemStyle: {
        color: '#1f77b4',
        borderColor: '#1f77b4'
      },
      label: {
        color: 'rgba(0,0,0,0.7)',
        fontFamily: 'Arial',
        fontSize: 10
      }
    }
  ],
  tooltip: {
    trigger: 'item'
  }
};

option && my_sangji.setOption(option);



var chartDom_para = document.getElementById('container6-bottom');
var myChart_para = echarts.init(chartDom_para);
var option;

// Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
const shenda = [
  [1, 4, 9, 6, 7, 8, 10, '优秀'],

];
var huaqiangbei = [
  [3, 2, 3, 7, 1, 2, 3, '良好'],
  
];
var gaoxinyuan = [
  [1, 3, 4, 5, 8, 7, 9, '合格'],
];
var gouwugongyuan = [
  [4, 2, 1, 4, 8, 4, 9, '适中'],
];
var xiangmi = [
  [9, 4, 4, 5, 8, 8,7, '优秀'],
];
var shekougang = [
  [2, 3, 4, 3, 2, 7, 2, '较差'],
];
var shijiezhichuang = [
  [4, 1, 2, 4, 2, 4,1, '良好'],
];
var baoanzhongxin = [
  [5, 5, 5,4, 2, 5,5, '合格'],
];
var schema = [
  { name: 'date', index: 0, text: '客流情况' },
  { name: 'AQIindex', index: 1, text: '容积率' },
  { name: 'PM25', index: 2, text: '站台滞留率' },
  { name: 'PM10', index: 3, text: '换乘距离' },
  { name: 'CO', index: 4, text: ' 无障碍完备度' },
  { name: 'NO2', index: 5, text: '最大消散时间' },
  { name: 'SO2', index: 6, text: '最大拥挤密度' },
  { name: '等级', index: 7, text: '综合评分' }
];
var lineStyle = {
  width: 1,
  opacity: 0.5
};
option = {
  // top:300,
  // backgroundColor:'#ffeda0',
  title: {
    text: "站点指标平行坐标",
            textAlign: "center",
            textStyle:{
color:"#fff"
            },
            left: "50%",
            top: "0%",
  },
  backgroundColor: '#333',
  legend: {
    bottom: 30,
    data: ['深大', '华强北', '高新园', '购物公园', '香蜜', '蛇口港', '世界之窗', '宝安中心'],
    itemGap: 20,
    textStyle: {
      color: '#fff',
      fontSize: 14
    }
  },
  tooltip: {
    padding: 10,
    backgroundColor: '#222',
    borderColor: '#777',
    borderWidth: 1,
    // show:false
  },
  parallelAxis: [
    {
      dim: 0,
      name: schema[0].text,
      inverse: false,
      max: 10,
      // nameLocation: 'start'
    },
    { dim: 1, name: schema[1].text,
      max: 10, },
    { dim: 2, name: schema[2].text,
      max: 10, },
    { dim: 3, name: schema[3].text,
      max: 10, },
    { dim: 4, name: schema[4].text,
      max: 10, },
    { dim: 5, name: schema[5].text,
      max: 10, },
    { dim: 6, name: schema[6].text,
      max: 10, },
    {
      dim: 7,
      name: schema[7].text,
      type: 'category',
      inverse:false,
      data: [
        '差',
        '较差',
        '合格',
        '适中',
        '良好',
        '优秀'
      ]
    }
  ],
  visualMap: {
    show: false,
    min: 0,
    max: 10,
    dimension: 2,
    inRange: {
      color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
      // colorAlpha: [0, 1]
    }
  },
  parallel: {
    left: '5%',
    right: '15%',
    bottom: 100,
    parallelAxisDefault: {
      type: 'value',
      name: 'AQI指数',
      nameLocation: 'end',
      nameGap: 20,
      nameTextStyle: {
        color: '#fff',
        fontSize: 12
      },
      axisLine: {
        lineStyle: {
          color: '#aaa'
        }
      },
      axisTick: {
        lineStyle: {
          color: '#777'
        }
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        color: '#fff'
      }
    }
  },
  series: [
    {
      name: '深大',
      type: 'parallel',
      lineStyle: lineStyle,
      data: shenda
    },
    {
      name: '华强北',
      type: 'parallel',
      lineStyle: lineStyle,
      data: huaqiangbei
    },
    {
      name: '高新园',
      type: 'parallel',
      lineStyle: lineStyle,
      data: gaoxinyuan
    },
    {
      name: '购物公园',
      type: 'parallel',
      lineStyle: lineStyle,
      data: gouwugongyuan
    },
    {
      name: '香蜜',
      type: 'parallel',
      lineStyle: lineStyle,
      data: xiangmi
    },
    {
      name: '蛇口港',
      type: 'parallel',
      lineStyle: lineStyle,
      data: shekougang
    },
    {
      name: '世界之窗',
      type: 'parallel',
      lineStyle: lineStyle,
      data: shijiezhichuang
    },
    {
      name: '宝安中心',
      type: 'parallel',
      lineStyle: lineStyle,
      data: baoanzhongxin
    }
  ]
};

option && myChart_para.setOption(option);