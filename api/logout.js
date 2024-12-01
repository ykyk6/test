// import User from "../models/users.js";

export default async function handler(req, res) {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send({ success: false, message: "發生錯誤無法登出" });
      console.log("this: " + err);
    } else {
      res.clearCookie();
      res.status(200).send({ success: true, message: "" });
    }
  });
}
