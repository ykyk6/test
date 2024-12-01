import express from "express";
// import {
//   ordercreate,
//   getOrder,
//   deleteOrder,
//   editOrder,
// } from "../controller/orders.js";

import orderCreate from "../api/orderCreate.js";
import getOrder from "../api/getOrder.js";
import editOrder from "../api/editOrder.js";
import deleteOrder from "../api/deleteOrder.js";

const router = express.Router();

router.post("/", orderCreate);
router.get("/", getOrder);
router.patch("/:id", editOrder);
router.delete("/:id", deleteOrder);

export default router;
