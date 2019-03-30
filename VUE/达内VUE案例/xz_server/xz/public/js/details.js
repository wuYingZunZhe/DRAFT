$(function(){
  var lid=location.search.split("=")[1];
  //ajax("http://localhost:3000/details",{lid})
  $.ajax({
    url:"http://localhost:3000/details",
    type:"get",
    data:{ lid },
    dataType:"json"
  })
  .then(res=>{
    //res=JSON.parse(res);
    var {product,specs,pics}=res;
    var {title,subtitle,price,promise}=product;
    var html=`<h6 class="font-weight-bold">${title}</h6>
    <h6>
      <a class="small text-dark font-weight-bold" href="javascript:;">${subtitle}</a>
    </h6>
    <div class="alert alert-secondary small" role="alert">
      <div>
        <span>学员售价：</span>
        <h2 class="d-inline text-primary font-weight-bold">¥${price.toFixed(2)}</h2>
      </div>
      <div>
        <span>服务承诺：</span>
        <span>${promise}</span>
      </div>
    </div>`;
    var divDetails=document.getElementById("details");
    divDetails.innerHTML=html+divDetails.innerHTML;

    var html="";
    for(var {lid:id,spec} of specs){
      html+=`<a class="btn btn-sm btn-outline-secondary ${id==lid?'active':''}" href="product_details.html?lid=${id}" class="">${spec}</a>`;
    }
    document.querySelector(
      "#details>div:nth-child(5)>div:nth-child(2)"
    ).innerHTML=html;

    var html="";
    for(var {sm,md,lg} of pics){
      html+=`<li class="float-left p-1">
        <img src="${sm}" data-md="${md}" data-lg="${lg}">
      </li>`;
    }
    var ulImgs=document.querySelector(
      "#preview>div>div:nth-child(5)>div:nth-child(2)>ul"
    )
    ulImgs.innerHTML=html;
    ulImgs.style.width=`${pics.length*62}px`;
    var mImg=document.querySelector(
      "#preview>div>img"
    );
    mImg.src=pics[0].md;
    var divLg=document.getElementById("div-lg");
    divLg.style.backgroundImage=`url(${pics[0].lg})`;

    ulImgs.onmouseover=function(e){
      if(e.target.nodeName=="IMG"){
        var img=e.target;
        mImg.src=img.dataset.md;
        divLg.style.backgroundImage=
          `url(${img.dataset.lg})`;
      }
    }
    var mask=document.getElementById("mask");
    var sMask=document.getElementById("super-mask");
    sMask.onmouseover=function(){
      mask.className=mask.className.replace("d-none","");
      divLg.className=divLg.className.replace("d-none","");
    }
    sMask.onmousemove=function(e){
      var {offsetX,offsetY}=e;
      var top=offsetY-88;
      var left=offsetX-88;
      top=top<0?0:top>176?176:top;
      left=left<0?0:left>176?176:left;
      mask.style.top=`${top}px`;
      mask.style.left=`${left}px`;
      divLg.style.backgroundPosition=`${-16/7*left}px ${-16/7*top}px`;
    }
    sMask.onmouseout=function(){
      mask.className+=" d-none";
      divLg.className+=" d-none";
    }

    var btnLeft=document.querySelector(
      "#preview>div>div:nth-child(5)>img"
    );
    var btnRight=
      btnLeft.nextElementSibling.nextElementSibling;
    if(pics.length<=4)
      btnRight.className+=" disabled";
    var moved=0;
    btnLeft.onclick=function(){
      var btn=this;
      if(btn.className.indexOf("disabled")==-1){
        moved--;
        ulImgs.style.marginLeft=`${-moved*62}px`;
        if(moved==0) btn.className+=" disabled";
        if(moved<pics.length-4)
          btnRight.className=btnRight.className.replace("disabled","");
      }
    }
    btnRight.onclick=function(){
      var btn=this;
      if(btn.className.indexOf("disabled")==-1){
        moved++;
        ulImgs.style.marginLeft=`${-moved*62}px`;
        if(pics.length-moved==4)
          btn.className+=" disabled";
        if(moved>0){
          btnLeft.className=btnLeft.className.replace("disabled","");
        }
      }
    }

    var {lname,os,memory,resolution,video_card,cpu,video_memory,category,disk}=product;
    var html=`<li class="float-left mb-2"><a class="text-muted small" href="#">商品名称：${lname}</a></li>
    <li class="float-left mb-2"><a class="text-muted small" href="#">系统：${os}</a></li>
    <li class="float-left mb-2"><a class="text-muted small" href="#">内存容量：${memory}</a></li>
    <li class="float-left mb-2"><a class="text-muted small" href="#">分辨率：${resolution}</a></li>
    <li class="float-left mb-2"><a class="text-muted small" href="#">显卡型号：${video_card}</a></li>
    <li class="float-left mb-2"><a class="text-muted small" href="#">处理器：${cpu}</a></li>
    <li class="float-left mb-2"><a class="text-muted small" href="#">显存容量：${video_memory}</a></li>
    <li class="float-left mb-2"><a class="text-muted small" href="#">分类：${category}</a></li>
    <li class="float-left mb-2"><a class="text-muted small" href="#">硬盘容量: ${disk}</a></li>`;
    document.querySelector(
      "#params>div>div:first-child>div:nth-child(3)>ul"
    ).innerHTML=html;
  })
})