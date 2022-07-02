import order from "../models/orders.js";

export const ordercreate = async (req, res) => {
  console.log(req.session.user);
  // if (req.session.user === undefined) {
  //   res.status(401).send({ success: false, message: '未登入' })
  //   return
  // }
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
    const result = await order.create({
      user_mail: req.body.userMailValue,
      name: req.body.receive.name,
      post: req.body.receive.post,
      address: req.body.receive.address,
      phone: req.body.receive.phone,
      pay: req.body.receive.pay,
      date: req.body.receive.date,
      AllTotalPrice: req.body.AllTotalPriceValue,
      ShippingFee: req.body.ShippingFeeValue,
      // delieverydate: req.body.delieverydate,
      // delieverynumber: req.body.delieverynumber,
      // info: req.body.info,
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
};

export const getOrder = async (req, res) => {
  try {
    const result = await order.find();
    res.status(200).send({ success: true, message: "", result });
  } catch (error) {
    res.status(500).send({ success: false, message: "發生錯誤" });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    let result = await order.findById(req.params.id);
    if (result === null) {
      res.status(404).send({ success: false, message: "找不到資料" });
    } else {
      result = await order.findByIdAndDelete(req.params.id);
      res.status(200).send({ success: true, message: "", result });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).send({ success: false, message: "ID格式錯誤" });
    } else {
      res.status(500).send({ success: false, message: "伺服器錯誤" });
    }
  }
};

export const editOrder = async (req, res) => {
  if (
    !req.headers["content-type"] ||
    !req.headers["content-type"].includes("application/json")
  ) {
    res.status(400).send({ success: false, message: "資料格式不符" });
    return;
  }
  try {
    let result = await order.findById(req.params.id);
    if (result === null) {
      res.status(404).send({ success: false, message: "找不到資料" });
    } else {
      result = await order.findByIdAndUpdate(req.params.id, req.body, {
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
};
