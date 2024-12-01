// import { connectDB } from "../../db.js";
import User from "../models/users.js";
import isEmail from "validator/lib/isEmail.js";

export default async function handler(req, res) {
  // await connectDB();
  if (
    !req.headers["content-type"] ||
    !req.headers["content-type"].includes("application/json")
  ) {
    res.status(400).send({ success: false, message: "資料格式不符" });
    console.log(req.body);
    return;
  }
  try {
    const result = await User.findOne(req.body);
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
}
