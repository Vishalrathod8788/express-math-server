import express from "express";
import {
  addTwoNumbers,
  addArraySum,
  subTwoNumbers,
  subArraySum,
  divideTwoNumbers,
} from "../controllers/mathController.js";
const router = express.Router();

router.get("/", (req, res) =>
  res.status(200).send("Welcome to Express Math server!!")
);
router.get("/test", (req, res) => res.status(200).send("True"));
router.get("/status", (req, res) =>
  res.status(200).send("Math Server is up and running!!")
);

router.post("/add", addTwoNumbers);
router.post("/add-numbers", addArraySum);
router.post("/sub", subTwoNumbers);
router.post("/sub-numbers", subArraySum);
router.get("/divide", divideTwoNumbers);

export default router;
