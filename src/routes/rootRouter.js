import express from "express";
import * as rootController from "../controller/rootController.js";

const router = express.Router();

router.get("/", rootController.root);

export default router;
