import User from "../models/users.js";

export default async function handler(req, res) {
  if (
    !req.headers["content-type"] ||
    !req.headers["content-type"].includes("application/json")
  ) {
    res.status(400).send({ success: false, message: "資料格式不符" });
    return;
  }
  try {
    let result = await User.findById(req.params.id);
    if (result === null) {
      res.status(404).send({ success: false, message: "找不到資料" });
    } else {
      result = await User.findByIdAndUpdate(
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
}
