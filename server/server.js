//新建app
const express = require("express");
const userRouter=require('./user');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser')
const app = express();

app.use(cookieParser()); // 解析cookie
app.use(bodyParser.json()); // 解析post过来的json数据

app.use('/user',userRouter)
app.listen(9093, function() {
  console.log("Node app start at port 9093");
});
