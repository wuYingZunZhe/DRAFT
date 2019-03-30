$(function(){
  //ajax("http://localhost:3000/index")
  $.ajax({
    url:"http://localhost:3000/index",
    type:"get",
    dataType:"json" //JSON.parse(res)
  })
  .then(products=>{
    //var products=JSON.parse(res);
    var vm_f1=new Vue({
      el:"#f1",
      data:{
        products,
      }
    })
  });
});