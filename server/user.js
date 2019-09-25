const express = require("express");
const Router = express.Router();
const model = require("./model");
const User = model.getModel("user");
const utils = require("utility");
_filter = { pwd: 0 };

Router.get("/list", function(req, res) {
  const { type } = req.query;
  User.find({ type }, function(err, doc) {
    return res.json({ code: 0, data: doc });
  });
});

//删除数据
// User.remove({}, function (err, doc) {
//   if (!err) {
//       console.log('delete success')
//       console.log(doc)
//   }
// })

Router.post("/update", function(req, res) {
  const userId = req.cookies.userid;
  if (!userId) {
    return json.dumps({ code: 1 });
    // return json.json({ code: 1 });
  }
  const body = req.body;
  User.findByIdAndUpdate(userId, body, function(err, doc) {
    const data = Object.assign(
      {},
      {
        user: doc.user,
        type: doc.type
      },
      body
    );
    return res.json({ code: 0, data });
  });
});
Router.post("/login", function(req, res) {
  const { user, pwd } = req.body;
  User.findOne({ user, pwd: md5Pwd(pwd) }, _filter, function(err, doc) {
    if (!doc) {
      return res.json({ code: 1, msg: "用户名或者密码错误" });
    } else {
      res.cookie("userid", doc._id); //将cookie设置在reponse header
      return res.json({ code: 0, data: doc });
    }
  });
});
Router.post("/register", function(req, res) {
  const { user, pwd, type } = req.body;
  User.findOne({ user }, function(err, doc) {
    if (doc) {
      return res.json({ code: 1, msg: "用户名重复" });
    } else {
      const userModel = new User({ user, type, pwd: md5Pwd(pwd) });
      userModel.save(function(e, d) {
        if (e) {
          return res.json({ code: 1, msg: "后端出错了" });
        }
        const { user, type, _id } = d;
        res.cookie("userid", _id);
        return res.json({ code: 0, data: { user, type, _id } });
      });
      // User.create({ user, type, pwd: md5Pwd(pwd) }, function(err, doc) {
      //   if (err) {
      //     return res.json({ code: 1, msg: "后端出错了" });
      //   }
      //   return res.json({ code: 0 });
      // });
    }
  });
});

Router.get("/info", function(req, res) {
  const { userid } = req.cookies;
  if (!userid) {
    return res.json({ code: 1 });
  }
  User.findOne({ _id: userid }, _filter, function(err, doc) {
    if (err) {
      return res.json({ code: 1, msg: "后端出错了" });
    }
    if (doc) {
      return res.json({ code: 0, data: doc });
    }
  });
});

function md5Pwd(pwd) {
  const salt = "hello_hahha_#!hdDF";
  return utils.md5(utils.md5(pwd + salt));
}
module.exports = Router;
