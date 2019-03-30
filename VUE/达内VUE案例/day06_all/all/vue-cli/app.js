//app.js
//1:加载模块
const express = require("express");
const pool  = require("./pool");
//2:创建express对象
var app = express();
//服务器node.js 允许跨域访问配置项
//2.1:引入跨域模块   
const cors = require("cors");
//2.2:配置允许哪个程序跨域访问 脚手架   11:16
app.use(cors({
  origin:[
    "http://127.0.0.1:3001","http://localhost:3001"],
  credentials:true
}))

//3:指定静态目录
//服务器指定目录 绝对路径 出错
app.use(express.static(__dirname+"/public"));

//4:绑定监听端口
app.listen(3000);
//功能一:学子商城首页图片轮播
//GET /imagelist   json
app.get("/imagelist",(req,res)=>{
  var obj = [
 {id:1,img_url:"http://127.0.0.1:3000/img/banner1.png"},
 {id:2,img_url:"http://127.0.0.1:3000/img/banner2.png"},
 {id:3,img_url:"http://127.0.0.1:3000/img/banner3.png"},
 {id:4,img_url:"http://127.0.0.1:3000/img/banner4.png"},
];
  res.send(obj)
});


//功能二:分页显示:新闻分页
app.get("/newslist",(req,res)=>{
  //1:参数  当前页码  页大小(一页显示几行数据)
  var pno = req.query.pno;            //2
  var pageSize = req.query.pageSize;  //5
  //2:sql
  //2.1:查找总记录数->转换总页数  15->3
  var sql = "SELECT count(id) as c FROM xz_news";
  var obj = {};      //保存发送客户端数据
  var progress = 0;  //进度
  pool.query(sql,(err,result)=>{
      if(err)throw err;
      var c = Math.ceil(result[0].c/pageSize);
      obj.pageCount = c;
      progress+=50;
      if(progress==100){
        res.send(obj);
      }
  });
  //2.2:查找当前页内容           中间5行
  var sql = " SELECT id,title,img_url,ctime,point";
     sql += " FROM xz_news";
     sql += " LIMIT ?,?";
  var offset = parseInt((pno-1)*pageSize);   
  //计算分页偏移量
  pageSize = parseInt(pageSize)
  pool.query(sql,[offset,pageSize],(err,result)=>{
      if(err)throw err;
      //console.log(result);
      obj.data = result;
      progress+=50;
      if(progress==100){
        res.send(obj);
      }
  })
  //3:结果格式
});
//功能三:发送脚手架新闻详细
app.get("/newsinfo",(req,res)=>{
   var obj = {
     title:"北京房价下降，白菜价",
     content:"16万/平 快快买啊!!!!!!"
    };
   res.send(obj);
});

//功能四:用户发表评论
const qs = require("querystring");
app.post("/postcomment",(req,res)=>{
   //为req对象绑定事件data   10:45
   req.on("data",(buf)=>{
     var str = buf.toString();  //1:将参数转字符串
     var obj = JSON.parse(str); //2:将参数转对象
     var msg = obj.msg;         
     var nid = parseInt(obj.nid);
     var sql = "INSERT INTO xz_comment(content,user_name,ctime,nid) VALUES(?,'匿名',now(),?)";
     pool.query(sql,[msg,nid],(err,result)=>{
       if(err)throw err;
       res.send({code:1,msg:"添加成功"});
     })
   })
})



//功能五:用户获取指定新闻编号所有评论
app.get("/getComment",(req,res)=>{
  //获取指定新闻编号  
  var nid = parseInt(req.query.id);
  var pno = req.query.pno;            
  var pageSize = req.query.pageSize;  
  var sql = " SELECT count(id) as c FROM xz_comment";
  sql +=" WHERE nid = ?";
  var obj = {};      //保存发送客户端数据
  var progress = 0;  //进度
  pool.query(sql,[nid],(err,result)=>{
      if(err)throw err;
      var c = Math.ceil(result[0].c/pageSize);
      obj.pageCount = c;
      progress+=50;
      if(progress==100){
        res.send(obj);
       }
    });
    //2.2:查找当前页内容
  var sql = " SELECT id,content,ctime,user_name";
     sql += " FROM xz_comment";
     sql += " WHERE nid = ?"
     sql += " ORDER BY id DESC";//降序排列
     sql += " LIMIT ?,?";
  var offset = parseInt((pno-1)*pageSize);   
  pageSize = parseInt(pageSize)
  pool.query(sql,[nid,offset,pageSize],(err,result)=>{
     if(err)throw err;
      obj.data = result;
      progress+=50;
      if(progress==100){
      res.send(obj);
      }
  })
})


//功能六 ：返回商品详细信息
//[id;title;now;old;商号]
//参数id
app.get("/goodsinfo",(req,res)=>{
  var id = req.query.id;
  var obj =
   {id:id,title:"华为2000",now:9999,old:88888,pid:"9527"};
  res.send(obj);
});

//功能七:购物车数据列表    
//组件发送ajax请求获取并显示数据
app.get("/shopCart",(req,res)=>{
var obj = [];
obj.push({id:1,title:"华为p10",price:3999,count:2})
obj.push({id:2,title:"华为p11",price:4999,count:1})
obj.push({id:3,title:"华为p12",price:5999,count:1})
res.send(obj);
})

//功能八:将商品信息添加至购物车
//-INSERT INTO xz_cart VALUES();
app.get("/addCart",(req,res)=>{
  //1:参数  商品id 商品数量
    //1.1：获取参数
    var pid = req.query.pid;
    var count = req.query.count;
    //1.2: 创建正则表达式验证  一定做
    //所有用户参数都需要验证 js第一次 node.js第二次
    //安全 
    var reg = /^[0-9]{1,}$/;     //正则表达式
    if(!reg.test(pid)){          //如果参数验证失败
      res.send({code:-1,msg:"商品编号参数有误"});
      return;               //输出错误信息并停止
    }
    if(!reg.test(count)){
      res.send({code:-2,msg:"商品数量参数有误"});
      return;               //输出错误信息并停止
    }
    //1.3: 如果验证失败返回
    //2:连接数据库
    //3:返回成功值
    res.send({code:1,msg:"添加成功"});
})