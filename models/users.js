import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    // required: [true, "缺少名字"],
  },
  birthday: {
    type: Object,
    // required: [true, "缺少生日"],
  },
  mail: {
    type: String,
    // required: [true, "缺少信箱"],
    unique: [true, "信箱重複"],
    // 自訂驗證規則
    validate: {
      validator(value) {
        return isEmail(value);
      },
      message: "信箱格式錯誤",
    },
  },
  password: {
    type: String,
    // required: [true, "缺少密碼"],
    minlength: [4, "密碼需3字以上"],
    maxlength: [10, "密碼需10字以下"],
  },
  like: [
    {
      LikeName: String,
      Likeid: String,
      LikePic: String,
      LikePrice: Number,
      LikeColor: String,
      LikeDate: String,
    },
  ],
});

const users = mongoose.model("users", UserSchema);

export default users;
