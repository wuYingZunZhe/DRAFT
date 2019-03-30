import Vue from 'vue'
import App from './App.vue'
import router from './router'

//0:引入mint-ui css
import'mint-ui/lib/style.css'
Vue.config.productionTip = false

//0:引入mui css文件 大部分组件都要使用css在 main.js引入
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//1:引入组件mintui库Header
//-引入指定组件
//import {Button,Header,Swipe,SwipeItem,Lazyload} from "mint-ui";//-注册当前项目中 <mt-header> 
//Vue.component(Button.name,Button);
//Vue.component(Header.name,Header);
//Vue.component(Swipe.name,Swipe);
//Vue.component(SwipeItem.name,SwipeItem);
//Vue.use(Lazyload);

//完整引入
import MintUI  from "mint-ui";
Vue.use(MintUI)


//2:引入vue-resource 发送ajax
//-引入vue-resource  库所有组件
import VueResource from "vue-resource";
//-将所有组件注册
Vue.use(VueResource);

//3:main.js 创建过滤器
//val  源日期对象
//返回 日期格式对象
Vue.filter("dateFilter",function(val){
  var date = new Date(val);   //创建日期对象
  var y = date.getFullYear(); //获取年份
  var m = date.getMonth()+1;  //获取月份
  var d = date.getDate();     //获取日期
  m<10&&(m="0"+m);            //如果月份小于10加前缀0
  d<10&&(d="0"+d);            //如果日小于10加前缀 0
  return `${y}-${m}-${d}`;   //拼接字符串
});
//练习:创建过滤器 年月日 时:分:秒
//datetimeFilter   9:46
//val 参数    {{日期字符串 | 过滤器}}
//val 左右日期字符串 
Vue.filter("datetimeFilter",function(val){
   var date = new Date(val);
   var y = date.getFullYear();
   var m = date.getMonth()+1;
   var d = date.getDate();
   var h = date.getHours();
   var mi =date.getMinutes();
   var s = date.getSeconds();
   m<10&&(m="0"+m);
   d<10&&(d="0"+d);   
   return `${y}-${m}-${d} ${h}:${mi}:${s}`;
});

//#配置VueResource 服务器根目录
Vue.http.options.root = "http://127.0.0.1:3000/"
//#修改请求头 POST
//Vue.http.options.emulateJSON=true


//4:创建Vuex实例对象
  //4.1:下载安装Vuex   npm i vuex -D
  //4.2:引入Vuex
  import Vuex from  "vuex"
  //4.3:注册Vuex实例
  Vue.use(Vuex)
  //4.4:创建 Vuex实例对象
  var store = new Vuex.Store({
    state:{count:0},   //购物车中商品数量
    mutations:{
       increment(state,c){
         state.count += parseInt(c)  
         //修改共享数据二个方法
       }, 
       substract(state){
         state.count--  //参数共享数据属性
       }  
    },
    getters:{
      optCount:function(state){
         return state.count; //返回共享数据
      }
    }
  });
//5:将Vuex实例对象注册Vue实例
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
