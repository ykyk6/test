import express from "express";

import createUserAPI from "../api/createUser.js";
import loginAPI from "../api/login.js";
import logoutAPI from "../api/logout.js";
import getUserAPI from "../api/getUser.js";
import editUserAPI from "../api/editUser.js";
import addLikeToUser from "../api/addLikeToUser.js";

const router = express.Router();

// users為根目錄
router.post("/", createUserAPI);
router.post("/login", loginAPI);
router.delete("/logout", logoutAPI);
router.get("/", getUserAPI);
router.patch("/:id", editUserAPI);
router.post("/:id", addLikeToUser);
// router.delete("/:id", DeleteLike);

export default router;
