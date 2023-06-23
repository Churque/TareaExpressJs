import {Router} from "express";
import { getAuthor} from "../controllers/user.controller.js";

const router = Router();

router.get("", getAuthor);

export default router;
