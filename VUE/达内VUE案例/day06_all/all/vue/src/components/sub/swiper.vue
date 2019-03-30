<template>
  <div class="app-subswipe">
     <mt-swipe :auto="4000">
       <mt-swipe-item  v-for="item in list" :key="item.id">
          <img :src="item.img_url" />
       </mt-swipe-item>
     </mt-swipe>
  </div>
</template>
<script>
  export default {
    data(){
      return {}
    },
    props:["list"] //子组件接收父组件数据
  }
</script>
<style>
 .app-subswipe .mint-swipe{
   height:200px;
 }
 .app-subswipe .mint-swipe img{
   width:100%;
 } 
</style>