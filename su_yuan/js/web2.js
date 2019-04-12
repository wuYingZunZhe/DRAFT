function nav_1(){
	 window.location.href='html/index.html';	
}
function nav_2(){
	 window.location.href='html/jia_gong.html';	
}
function nav_3(){
	 window.location.href='html/yun_shu.html';	
}
function nav_4(){
	 window.location.href='html/xiao_shou.html';	
}

  /**表格跳转页面*/
   function tab_nav_click (event) {
	console.log(event);
	var obj=event.srcElement;  
    alert(obj.innerHTML);
   
  }
