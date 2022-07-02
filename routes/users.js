import express from "express";
import {
  createUser,
  loginUser,
  logoutUser,
  getUser,
  editUser,
  AddLikeToUser,
} from "../controller/users.js";

const router = express.Router();

// users為根目錄
router.post("/", createUser);
router.post("/login", loginUser);
router.delete("/logout", logoutUser);
router.get("/", getUser);
router.patch("/:id", editUser);
router.post("/:id", AddLikeToUser);
// router.delete("/:id", DeleteLike);

export default router;
