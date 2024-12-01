import Order from "../models/orders.js";

export default async function handler(req, res) {
  try {
    const result = await Order.find();
    res.status(200).send({ success: true, message: "", result });
  } catch (error) {
    res.status(500).send({ success: false, message: "發生錯誤" });
  }
}
