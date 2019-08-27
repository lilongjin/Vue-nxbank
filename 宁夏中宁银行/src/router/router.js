// 一级路由文件
import home from '../components/one/home.vue'
import wenhua from '../components/one/wenhua.vue'
import hangye from '../components/one/hangye.vue'
import shehui from '../components/one/shehui.vue'
import bianming from '../components/one/bianming.vue'
import qiye from '../components/one/qiye.vue'
import xiuxian from '../components/one/xiuxian.vue'
import tousu from '../components/one/tousu.vue'
import guanyu from '../components/one/guanyu.vue'
import footer from '../components/one/footer.vue'
// 二级路由文件
import new_detail from '../components/two/new_detail.vue'
import zs_detail from '../components/two/zs_detail.vue'
import search_list from '../components/two/search_list.vue'
// 路由内容设置
export const routes=[
  //首页路由
  {
    path:'/home',name:"home",components:{
    default:home,
    },meta: {title: '宁夏中宁青银村镇银行'}
  //   children:[
  //   {path:'mine_bank',name:"mine_bank",components:{
  //     default:mine_bank,
  //     }
  //   },
  //   {path:'qiye_bank',name:"qiye_bank",component:qiye_bank},
  //   {path:'about_download',name:"about_download",component:about_download},
  // ]
  },
  //一级路由
  {path:'/wenhua',name:"wenhua",component:wenhua,meta: {title: '文化建设-宁夏中宁青银村镇银行'}},
  {path:'/hangye',name:"hangye",component:hangye,meta: {title: '行业新闻-宁夏中宁青银村镇银行'}},
  {path:'/shehui',name:"shehui",component:shehui,meta: {title: '社会责任-宁夏中宁青银村镇银行'}},
  {path:'/bianming',name:"bianming",component:bianming,meta: {title: '便民服务-宁夏中宁青银村镇银行'}},
  {path:'/qiye',name:"qiye",component:qiye,meta: {title: '企业荣誉-宁夏中宁青银村镇银行'}},
  {path:'/xiuxian',name:"xiuxian",component:xiuxian,meta: {title: '休闲专区-宁夏中宁青银村镇银行'}},
  {path:'/tousu',name:"tousu",component:tousu,meta: {title: '投诉建议-宁夏中宁青银村镇银行'}},
  {path:'/guanyu',name:"guanyu",component:guanyu,meta: {title: '关于我行-宁夏中宁青银村镇银行'}},
  {path:'/footer',name:"footer",component:footer},
  //二级路由
  {path:'/new_detail/:id',name:"new_detail",component:new_detail,props:true,},
  {path:'/zs_detail/:id',name:"zs_detail",component:zs_detail,props:true,},
  {path:'/search_list/:search',name:"search_list",component:search_list,props:true,},
  // 以上都不匹配默认跳转为首页
  {path:'*',redirect:'/home'},
];

