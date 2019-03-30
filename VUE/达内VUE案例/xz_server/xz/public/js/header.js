//ajax("http://localhost:3000/header.html")
$(function(){
  $.ajax({
    url:"http://localhost:3000/header.html",
    type:"get"
  })
  .then(res=>{
    document.getElementById("header")
      .innerHTML=res;

    var input=$("div.form-inline>div>input");

    if(location.search.indexOf("kw=")!=-1){
      input.value=
        decodeURI(location.search.split("=")[1]);
    }
    function isLogin(){
      $.ajax({
        url:"http://localhost:3000/users/islogin",
        type:"get",
        dataType:"json",
        success:function(data){
          if(data.ok==0){
            $("#signout").show().next().hide();
          }else{
            $("#signout").hide().next().show();
            $("#uname").html(data.uname);
          }
        }
      })
    }
    isLogin();
    new Vue({
      el:"#header",
      data:{
        kw:"",
        shelp:[],
        shelp_show:false
      },
      methods:{
        search(){
          if(this.kw.trim()!=="")
            location.href=`http://localhost:3000/products.html?kw=${this.kw}`;
        },
        login(){
          location.href=
            "http://localhost:3000/login.html?back="+location.href;
        },
        signout(){
          $.ajax({
            url:"http://localhost:3000/users/signout",
            type:"get",
            success:isLogin
          })
        },
        shelpToggle(){
          this.shelp_show=!this.shelp_show
        }
      },
      watch:{
        kw(){
          var vm=this;
          $.ajax({
            url:"http://localhost:3000/products/shelp",
            type:"get",
            data:{kw:this.kw},
            dataType:"json",
            success:function(data){
              vm.shelp=data;
            }
          })
        }
      }
    })
  });
})
//每个页面body结尾:
  //script src="js/ajax.js"
  //script src="js/header.js"
