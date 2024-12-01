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
    const result = await User.create({
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
}
