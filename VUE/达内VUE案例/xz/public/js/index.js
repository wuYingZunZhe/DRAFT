$(function(){
  $.ajax({
    url:"http://localhost:3000/index/getIndexProducts",
    type:"get",
    dataType:"json",//ajax可自动将json转为obj
    success:function(res){
      new Vue({
        el:"#main>div:nth-child(2)>h3:first-child",
        data:{ res }
      })
    }
  })
})