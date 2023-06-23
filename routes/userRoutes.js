import {Router} from "express";
import { getAuthor, getUsers, createUser,loginUser} from "../controllers/user.controller.js";
import {createMessage,getMessagesByUser, deleteMessage} from "../controllers/messageController.js"

const router = Router();

router.get("", getAuthor);
router.get("/users", getUsers);
router.post("/auth/register", createUser);
router.post("/auth/login", loginUser);
router.post("/messages",createMessage);
router.get("/users/:userId/messages",getMessagesByUser);
router.delete("/messages/:messageId",deleteMessage)
export default router;
