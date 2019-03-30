const express=require("express");
var router=express.Router();
var pool=require("../pool");
router.get("/",(req,res)=>{
  var sql="SELECT * FROM `xz_index_product` where seq_recommended!=0 order by seq_recommended";
  pool.query(sql,[],(err,result)=>{
    res.write(JSON.stringify(result));
    res.end();
  })
})
module.exports=router;
//http://localhost:3000/index