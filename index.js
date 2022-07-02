import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import beautifyUnique from "mongoose-beautiful-unique-validation";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors";

import userRoutes from "./routes/users.js";
import ordersRoutes from "./routes/orders.js";
// env
dotenv.config();
// connent to MongoDB
mongoose.connect(process.env.DBURL);

const app = express();
// 將資料轉換成express能讀懂的格式
app.use(bodyParser.json());

// 跨域
app.use(cors());

// 開本地3000server
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});

// 檢驗是否連接DB成功
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("DB connected");
});

// 自定義Schema錯誤訊息
mongoose.plugin(beautifyUnique);

// 把seesion功能存入mongoDB
// const MongoStore = connectMongo(session)

// session設定
const sessionSettings = {
  secret: "123456",
  store: MongoStore.create({
    mongoUrl: process.env.DBURL,
    autoRemove: "interval",
    autoRemoveInterval: 1,
  }),
  saveUninitialized: false,
  resave: true,
  rolling: true,
  cookie: {
    originalMaxAge: 1000 * 60 * 1,
  },
};

app.use(session(sessionSettings));

// 資料庫連接
app.use("/users", userRoutes);
app.use("/orders", ordersRoutes);
