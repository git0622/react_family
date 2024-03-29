//链接mongoose
const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017";
mongoose.connect(DB_URL);
mongoose.connection.on("connected", function() {
  console.log("mongo connect success");
});

const models = {
  user: {
    user: { type: String, require: true },
    pwd: { type: String, require: true },
    type: { type: String, require: true },
    //头像
    avatar: { type: String },
    //个人简介或者职位简介
    desc: { type: String },
    //职位名
    title: { type: String },
    //如果你是boss还有两个字段
    company: { type: String },
    money: { type: String }
  },
  chat: {}
};
//类似于mysql的表，mongo里有文档字段的概念
for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
}
module.exports = {
  getModel: function(name) {
    return mongoose.model(name);
  }
};
// const User = mongoose.model(
//   "user",
//   new mongoose.Schema({
//     user: { type: String, require: true },
//     age: { type: Number, require: true }
//   })
// );
