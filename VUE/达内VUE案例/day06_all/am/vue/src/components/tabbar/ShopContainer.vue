<template>
 <div class="app-shop">
    <!--1:图片轮播-->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					  <swiper-box :list="imagelist"></swiper-box>
					</div>
				</div>
			</div>
    <!--2:商品列表-->
 			<div class="mui-card">
				<div class="mui-card-header">商品列表</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <!--2.1mui 左侧图片 右侧文字-->
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in cartList" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="">
						<div class="mui-media-body">
							  {{item.title}}
							<p class='mui-ellipsis'>
                 <span class="price">{{item.price}}</span>
                 <span class="count">
                   <!--2.2mui 数字按钮-->
         <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="cartSub(item.id)">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="item.count" />
					<button class="mui-btn mui-btn-numbox-plus" type="button"
					@click="cartAdd(item.id)">+</button>
				</div>
                 </span>
              </p>
						</div>
					</a>
				</li>
       </ul>
			 <div>合计:{{getSubTotal}}</div>
					</div>
				</div>
			</div>   
 </div>
</template>
<script>
 //1:引入子组件 轮播图
 import swiper from "../sub/swiper.vue"
 //2:注册当前对象 
 //3:在模板中调用轮播图组件
 //4:data声明数组件
 //5:发送 异步请求获取图片列保存data
 export default {
   data(){
     return {
			 imagelist:[],
			 cartList:[]  //购物车列表
		 }
   },
	 methods:{
		 cartSub(id){
			 for(var item of this.cartList){
				 if(item.id == id){
					 if(item.count < 2)return;
					 item.count--;    
					 break;
				 }
			 }
		 },
		 cartAdd(id){
			  //1:获取数组中每个元素
			 for(var item of this.cartList){
			  //2:判断参数中id与当前元素id是否相同
				if(item.id == id){
         //3:当前元素数量加1
				 item.count++;
				 break;
				}
			 }

		 },
		 getCartList(){
			 this.$http.get("shopCart").then(result=>{
				  this.cartList = result.body
			 })
		 },
		 getImageList(){
			   this.$http.get("imagelist").then(result=>{
           this.imagelist = result.body
				 });
		 }
	 },
   created(){
		  this.getImageList();
			this.getCartList();
   },
	 components:{
		 "swiper-box":swiper
	 },
	 computed:{   //计算属性
      getSubTotal:function(){
        //计算商品累加和并返回
				//1:创建临时变量
				var sum = 0;
				//2:创建循环
				for(var item of this.cartList){
				//3:计算累加和
				sum += item.price * item.count;
				}
				//4:返回累加结果
				return sum;
			}
	 }
 }
</script>
<style>
</style>