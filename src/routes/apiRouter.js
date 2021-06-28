import express from "express";
import * as apiController from "../controller/apiController.js";

const router = express.Router();

router.get("/hello", apiController.hello);
router.get("/whoami", apiController.whoami);

export default router;
