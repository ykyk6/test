import Order from "../models/orders.js";

export default async function handler(req, res) {
  try {
    let result = await Order.findById(req.params.id);
    if (result === null) {
      res.status(404).send({ success: false, message: "找不到資料" });
    } else {
      result = await Order.findByIdAndDelete(req.params.id);
      res.status(200).send({ success: true, message: "", result });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).send({ success: false, message: "ID格式錯誤" });
    } else {
      res.status(500).send({ success: false, message: "伺服器錯誤" });
    }
  }
}
