const express = require("express");
const Router = express.Router();
const model = require("./model");
const User = model.getModel("user");

Router.get("/list", function(req, res) {
  User.find({}, function(err, doc) {
    return res.json(doc);
  });
});
// User.remove({ user: 45 }, function (err, doc) {
//   if (!err) {
//       console.log('delete success')
//       console.log(doc)
//   }
// })
Router.post("/register", function(req, res) {
  const { user, pwd, type } = req.body;
  User.findOne({ user }, function(err, doc) {
    //删除数据
    if (doc) {
      return res.json({ code: 1, msg: "用户名重复" });
    } else {

      User.create({ user, pwd, type }, function(err, doc) {
        if (err) {
          return res.json({ code: 1, msg: "后端出错了" });
        }
        return res.json({ code: 0 });
      });
    }
  });
});

Router.get("/info", function(req, res) {
  return res.json({ code: 1 });
});

module.exports = Router;
