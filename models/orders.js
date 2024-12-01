import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user_mail: {
    type: String,
    required: [true, "缺少信箱"],
  },
  name: {
    type: String,
    required: [true, "缺少姓名"],
  },
  post: {
    type: String,
    required: [false, "缺少郵便番號"],
  },
  address: {
    type: String,
    reruired: [true, "缺少住址"],
  },
  phone: {
    type: String,
    required: [true, "缺少電話"],
  },
  pay: {
    type: Object,
    maxlength: [1, "只能選一種"],
    reruired: [true, "缺少付款方式"],
  },
  date: {
    type: String,
    reruired: [true, "缺少日期"],
  },
  AllTotalPrice: {
    type: Number,
  },
  ShippingFee: {
    type: Number,
  },
  cartItems: {
    type: Object,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
