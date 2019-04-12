function nav_1(){
	 window.location.href='index.html';	
}
function nav_2(){
	 window.location.href='jia_gong.html';	
}
function nav_3(){
	 window.location.href='yun_shu.html';	
}
function nav_4(){
	 window.location.href='xiao_shou.html';	
}

  /**表格跳转页面*/
   function tab_nav_click (event) {
	console.log(event);
	var obj=event.srcElement;  
    alert(obj.innerHTML);
   
  }
