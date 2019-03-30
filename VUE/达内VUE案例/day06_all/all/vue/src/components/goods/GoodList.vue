<template>
  <div class="app-goodslist">
     <!--商品列表项-->
     <div class="goods-item" v-for="item in list" :key="item.id">
      <img src="http://127.0.0.1:3000/img/banner1.png"
      @click="getDetail(item.id)" />
      <h3 class="title">{{item.title}}</h3>
      <div class="info">
        <p class="price">
           <span class="now">{{item.now}}</span>
           <span class="old">{{item.old}}</span>
        </p>
        <p class="sell">
           <span>热卖中</span>
           <span>剩 {{item.q}}件</span>
        </p>
      </div>  
     </div>
     <!--end-->

  </div>
</template>
<script>
export default {
   data(){
     return {
       list:[
{id:1,title:"小辣椒",now:"99.99",old:"1999",q:2},
{id:2,title:"中辣椒",now:"1169.99",old:"1999",q:1},
{id:3,title:"大辣椒",now:"1119.99",old:"1999",q:2}
       ]
     }
   },
   methods:{
     getDetail(id){
       //参数:商品id    
       //创建商品详情组件接收参数
       //goods/GoodInfo.vue
       //console.log(id)
       this.$router.push("/home/goodsinfo/"+id);
     }
   }
 }
</script>
<style>
   .app-goodslist{
     display:flex;     /*最外层设置弹性布局*/
     flex-wrap:wrap;   /*子元素换行*/
     justify-content:space-between;/*两端对齐*/
     padding:7px;      /*为子元素内补丁*/
   }
   .app-goodslist .goods-item{
      width:49%;               /*元素宽度*/
      border:1px solid #ccc;   /*边框*/
      box-shadow:0 0 8px #ccc; /*阴影*/
      margin:4px 0 ;
      padding:2px;
      display:flex;           /*弹性布局*/
      flex-direction:column;  /*垂直布局*/
      justify-content:space-between;/*两端对齐*/
      min-height:293px;       /*最小高度*/
   }
   .app-goodslist .goods-item img{
      width:100%;
   }
   /*修改价格颜色*/
   .app-goodslist .goods-item .now{
     color:red;
     font-weight:bold;
     font-size:16px;
   }
   .app-goodslist .goods-item .old{
    font-size:12px;
    text-decoration:line-through;
    margin-left:10px;
   }
   
</style>