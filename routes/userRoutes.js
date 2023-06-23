import {Router} from "express";
import {getUsers} from "../controllers/user.controller.js";
import {getMessagesByUser} from "../controllers/messageController.js"

const router = Router();

router.get("", getUsers);
router.get("/:userId/messages",getMessagesByUser);
export default router;
