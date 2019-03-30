<template>
   <div  class="app-homeContainer">
      <!--顶部导航条 1：-->
      <mt-header fixed title="学子商城"></mt-header>
      <!--轮播图    2：-->
      <mt-swipe  :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.id">
           <img :src="item.img_url" />
        </mt-swipe-item>
      </mt-swipe>
      <!--六宫格    3：-->
 	        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
           <router-link to="/home/newslist">
		        <img src="../../img/menu1.png" />
		         <div class="mui-media-body">新闻资讯</div>
           </router-link>
             </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <!--a  @click.stop.prevent="jumpShop()"-->
                <router-link to="/home/goodslist">
                 <img src="../../img/menu2.png" />
                 <div class="mui-media-body">商品</div>
                </router-link>        
                <!--/a-->
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu3.png" />
		                    <div class="mui-media-body"> 点餐</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photo">
		                    <img src="../../img/menu4.png" />
		                    <div class="mui-media-body">图片列表</div>
                </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../img/menu5.png" />
		                    <div class="mui-media-body">成功</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../img/menu6.png" />
		                    <div class="mui-media-body">列表</div></a></li>
		        </ul>     
   </div>
</template>
<script>
  export default {
    data(){
      return {list:[]}  //创建data属性保存数据
    },
    methods:{ 
      //jumpShop(){
      //编程跳转方式
      //this.$router.push("/home/shop?id=15");
      ///this.$router.push("/home/shop/19");
            
      //},   
      getImage(){
        //发送ajax请求并且获取图片列表并且显示
        var url = "http://127.0.0.1:3000/imagelist";
        this.$http.get(url).then(result=>{
          //获取返回数据，保存 list属性中
          this.list = result.body;
        })
      }
    },
    created(){
      this.getImage();
    }
  }
</script>
<style>
  /*自定义组件的样式*/
  .app-homeContainer header.mint-header{
    /*background-color:yellow;*/
    /*color:red;*/
  }
  /*图片轮播设置高度*/
  .app-homeContainer .mint-swipe{
    height:200px;
  }
  .app-homeContainer .mint-swipe img{
    width:100%;
  }

  /*调整六宫格  */
  .app-homeContainer .mui-grid-view.mui-grid-9{
    background:#fff;
    border:0;
  }
  .app-homeContainer .mui-grid-view.mui-grid-9 img{
    width:60px;
    height:60px;
  }
  .app-homeContainer .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size:13px;
  }





</style>