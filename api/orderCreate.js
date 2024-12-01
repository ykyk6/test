import Order from "../models/orders.js";

export default async function handler(req, res) {
  console.log(req.session.user);
  if (
    !req.headers["content-type"] ||
    !req.headers["content-type"].includes("application/json")
  ) {
    res.status(400).send({ success: false, message: "資料格式不符" });
    return;
  }
  try {
    console.log(req.body);
    let cartItems = [];
    cartItems = req.body.cartItems;
    const result = await Order.create({
      user_mail: req.body.userMailValue,
      name: req.body.receive.name,
      post: req.body.receive.post,
      address: req.body.receive.address,
      phone: req.body.receive.phone,
      pay: req.body.receive.pay,
      date: req.body.receive.date,
      AllTotalPrice: req.body.AllTotalPriceValue,
      ShippingFee: req.body.ShippingFeeValue,
      cartItems,
    });
    res.status(200).send({ success: true, message: "", result });
    // console.log(result.user);
    console.log(result.user_mail);
  } catch (error) {
    if (error.name === "ValidationError") {
      const key = Object.keys(error.errors)[0];
      const message = error.errors[key].message;
      console.log(error);
      res.status(400).send({ success: false, message });
      // console.log(message)
    } else {
      // console.log(error)
      res.status(500).send({ success: false, message: "伺服器錯誤" });
    }
  }
}
