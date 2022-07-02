import users from "../models/users.js";
import isEmail from "validator/lib/isEmail.js";
// 註冊帳號
// 使用express server連線至本地MongoDB並post參數2資料到參數的1資料夾
// 第一步(if)先判斷是否json格式
// 第二步(try)新增資料進資料庫
export const createUser = async (req, res) => {
  if (
    !req.headers["content-type"] ||
    !req.headers["content-type"].includes("application/json")
  ) {
    res.status(400).send({ success: false, message: "資料格式不符" });
    return;
  }
  try {
    const result = await users.create({
      name: req.body.name,
      birthday: req.body.birthday,
      mail: req.body.mail,
      password: req.body.password,
      like: req.body.like,
    });
    console.log(result);
    res.status(200).send({ success: true, message: "" });
  } catch (err) {
    if (err.name === "ValidationError") {
      const errNum = Object.keys(err.errors);
      let message = [];
      for (let i = 0; i < errNum.length; i++) {
        const key = Object.keys(err.errors)[i];
        message.push(err.errors[key].message);
        console.log(message);
      }
      res.status(400).send({ success: false, message });
    } else if (err.name === "MongoServerError") {
      res.status(400).send({ success: false, message: "帳號重複" });
    } else {
      res.status(500).send({ success: false, message: "伺服器連線錯誤" });
    }
  }
};

// 登入帳號
export const loginUser = async (req, res) => {
  if (
    !req.headers["content-type"] ||
    !req.headers["content-type"].includes("application/json")
  ) {
    res.status(400).send({ success: false, message: "資料格式不符" });
    console.log(req.body);
    return;
  }
  try {
    const result = await users.findOne(req.body);
    if (result !== null) {
      // console.log(req.session);
      console.log(result);
      req.session.users = result;
      res.status(200).send({ success: true, message: "", result });
    } else {
      if (!isEmail(req.body.mail)) {
        res.status(400).send({ success: false, message: "信箱格式錯誤" });
      } else if (
        req.body.password.length < 3 ||
        req.body.password.length > 10
      ) {
        res.status(400).send({ success: false, message: "密碼格式錯誤" });
      } else {
        res.status(404).send({ success: false, message: "找不到帳號" });
      }
    }
  } catch (err) {
    res.status(500).send({ success: false, message: "伺服器連線錯誤" });
    console.log(err);
  }
};

// 登出帳號
export const logoutUser = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send({ success: false, message: "發生錯誤無法登出" });
      console.log(err);
    } else {
      res.clearCookie();
      res.status(200).send({ success: true, message: "" });
    }
  });
};

// 獲取帳號
export const getUser = async (req, res) => {
  try {
    const result = await users.find();
    res.status(200).send({ success: true, message: "", result });
  } catch (error) {
    res.status(500).send({ success: false, message: "發生錯誤" });
  }
};

// 編輯帳號
export const editUser = async (req, res) => {
  if (
    !req.headers["content-type"] ||
    !req.headers["content-type"].includes("application/json")
  ) {
    res.status(400).send({ success: false, message: "資料格式不符" });
    return;
  }
  try {
    let result = await users.findById(req.params.id);
    if (result === null) {
      res.status(404).send({ success: false, message: "找不到資料" });
    } else {
      result = await users.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          mail: req.body.mail,
          password: req.body.password,
          like: req.body.like_items,
        },
        {
          new: true,
        }
      );
      res.status(200).send({ success: true, message: "", result });
      // console.log(req.body.user_data);
      console.log("success:" + req.body);
    }
  } catch (error) {
    if (error.name === "ValidatinError") {
      const key = Object.keys(error.errors)[0];
      const message = error.errors[key].message;
      res.status(400).send({ success: false, message });
    } else if (error.name === "CastError") {
      res.status(400).send({ success: false, message: "ID格式錯誤" });
    } else {
      res.status(500).send({ success: false, message: "伺服器錯誤" });
      console.log(req.body);
    }
  }
};

// 新增收藏
export const AddLikeToUser = async (req, res) => {
  if (
    !req.headers["content-type"] ||
    !req.headers["content-type"].includes("application/json")
  ) {
    res.status(400).send({ success: false, message: "資料格式不符" });
    return;
  }
  try {
    let result = await users.findById(req.params.id);
    if (result === null) {
      res.status(404).send({ success: false, message: "找不到資料" });
    } else {
      result = await users.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            like: {
              LikeDate: req.body.date,
              Likeid: req.body.id,
              LikeName: req.body.name,
              LikePic: req.body.pic,
              LikePrice: req.body.price,
              LikeColor: req.body.color,
            },
          },
        },
        {
          new: true,
        }
      );
      res.status(200).send({ success: true, message: "", result });
      console.log(req.body);
      console.log(result);
    }
  } catch (error) {
    if (error.name === "ValidatinError") {
      const key = Object.keys(error.errors)[0];
      const message = error.errors[key].message;
      res.status(400).send({ success: false, message });
    } else if (error.name === "CastError") {
      res.status(400).send({ success: false, message: "ID格式錯誤" });
      console.log(req.body);
    } else {
      res.status(500).send({ success: false, message: "伺服器錯誤" });
    }
  }
};

export const DeleteLike = async (req, res) => {
  // if (req.session.user === undefined) {
  //   res.status(401).send({ success: false, message: "未登入" });
  //   return;
  // }
  try {
    let result = await users.findById(req.params.id);
    if (result === null) {
      res.status(404).send({ success: false, message: "找不到資料" });
    } else {
      result = await users.findByIdAndUpdate(req.params.id, {
        like: { LikeName: req.body[0], LikeColor: req.body[1] },
      });
      res.status(200).send({ success: true, message: "", result });
      console.log("123:" + req.body[0]);
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).send({ success: false, message: "ID格式錯誤" });
    } else {
      res.status(500).send({ success: false, message: "伺服器錯誤" });
      console.log(req.params.id);
      console.log(req.body);
    }
  }
};
