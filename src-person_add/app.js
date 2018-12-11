const mongoose =require("mongoose")
const express = require("express")
const app = express()
const indexRouter = require("./routers")

app.set("view engine","ejs");
app.set("views","./views");


app.use(express.static("public"));
app.use(express.urlencoded({extend:true}))
app.use("/",indexRouter);

mongoose.connect('mongodb://localhost/em_test2', {useNewUrlParser: true})
  .then((doc)=>{
      console.log("数据库连接成功")
      app.listen("8888",()=>{console.log("服务器启动成功")})
  })
   .catch((err)=>{
       console.log("数据库连接失败")
   })