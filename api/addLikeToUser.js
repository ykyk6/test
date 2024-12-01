import User from "../models/users.js";

export default async function handler(req, res) {
  if (
    !req.headers["content-type"] ||
    !req.headers["content-type"].includes("application/json")
  ) {
    res.status(400).send({ success: false, message: "資料格式不符" });
    return;
  }
  try {
    let result = await User.findById(req.params.id);
    if (result === null) {
      res.status(404).send({ success: false, message: "找不到資料" });
    } else {
      result = await User.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            like: {
              LikeDate: req.body.date,
              Likeid: req.body.id,
              LikeName: req.body.name,
              LikePic: req.body.pic,
              LikePrice: req.body.price,
              LikeColor: req.body.color,
            },
          },
        },
        {
          new: true,
        }
      );
      res.status(200).send({ success: true, message: "", result });
      console.log(req.body);
      console.log(result);
    }
  } catch (error) {
    if (error.name === "ValidatinError") {
      const key = Object.keys(error.errors)[0];
      const message = error.errors[key].message;
      res.status(400).send({ success: false, message });
    } else if (error.name === "CastError") {
      res.status(400).send({ success: false, message: "ID格式錯誤" });
      console.log(+req.body);
    } else {
      res.status(500).send({ success: false, message: "伺服器錯誤" });
    }
  }
}
