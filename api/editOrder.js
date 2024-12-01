import Order from "../models/orders.js";

export default async function handler(req, res) {
  if (
    !req.headers["content-type"] ||
    !req.headers["content-type"].includes("application/json")
  ) {
    res.status(400).send({ success: false, message: "資料格式不符" });
    return;
  }
  try {
    let result = await Order.findById(req.params.id);
    if (result === null) {
      res.status(404).send({ success: false, message: "找不到資料" });
    } else {
      result = await Order.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).send({ success: true, message: "", result });
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
}
