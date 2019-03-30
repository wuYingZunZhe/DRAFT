<template>
  <div class="app-testContainer">
     <h1>testContainer.vue</h1>
     <h1>生命周期</h1>
     <h1>当前vue 实例创建后自动触发事件</h1>
     <h1>事件调用一些函数(钩子函数)</h1>
<input type="button" value="修改" @click="msg='ok'"/>
     <p id="h3">{{msg}}</p>
  </div>
</template>
<script>
   export default {    
     data(){
       return {msg:"脚手架"}
     },
     methods:{
       show(){console.log("执行 show  方法 ")}
     },
     beforeCreate() {
       //生命周期第一个函数,实例被创建'之前',会执行它
       //注意:执行函数时 data和 methods还没有初始化
       //console.log(this.msg);//undefined
       //this.show();//报错
     },
     created() {
       //生命周期第二函数,实例被创建'之后'
       //注意:执行函数时data和method初始化好了
       //最早操作data和methods
       this.show();
       console.log(this.msg);
     },
     beforeMount() {
       //生命周期第三个函数,模板己经在内存中编辑完成,
       //但是尚未把模板渲染页面
       //var h3 = document.getElementById("h3");
       //console.log(h3)   //报错误
       //console.log(h3.innerText) //报错误
     },
     mounted() {
       //生命周期第四个函数,模板己经在内存中编辑完成,
       //把模板渲染页面结束
       //mounted 实例创建最后一个生命周期函数，
       //当执行完 mounted表示实例己经完全创建好了
       //如果没有其它的操作，静静躺内存中一动不动 
       var h3 = document.getElementById("h3");
       console.log("4:"+h3.innerText)
     },
     beforeUpdate() {
       //接下运行二个事件
       //当执行beforeUpdate 页面中显示数据旧
       //此时                    data数据新
       console.log("5:内存中DATA变量:"+this.msg);
       var h3 = document.getElementById("h3");
       console.log("5:模板中数据:"+h3.innerText);
     },
     updated() {
       console.log("6:内存的Data:"+this.msg);
       var h3 = document.getElementById("h3");
       console.log("6:"+h3.innerText);
     },
   }
</script>
<style>
</style>