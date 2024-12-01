import User from "../models/users.js";

export default async function handler(req, res) {
  try {
    const result = await User.find();
    res.status(200).send({ success: true, message: "", result });
  } catch (error) {
    res.status(500).send({ success: false, message: "發生錯誤" });
  }
}
