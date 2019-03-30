<template>
   <div class="app-newinfo">
     <h3>{{info.title}}</h3>
     <div>{{info.content}}</div>
     <!--保存评论子组件 3:调用子组件-->
     <comment-box :id="this.id"></comment-box>
   </div>
</template>
<script>
  //1:引入子组件     
  import comment from "../sub/comment.vue"
  export default {
    data(){
      return { info:{},id:this.$route.query.id}
    },
    created(){
       this.getNewsInfo();
    },
    methods:{
      getNewsInfo(){
        //发送ajax请求获取当前新闻详细信息
        var url = "http://127.0.0.1:3000/newsinfo";
        this.$http.get(url).then(result=>{
           //console.log(result.body);
           this.info = result.body;
        })
      }
    },components:{
      //2:注册子组件
      "comment-box":comment
    }
  }
</script>
<style>
</style>