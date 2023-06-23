import {Router} from "express";
import {createMessage, deleteMessage} from "../controllers/messageController.js"

const router = Router();


router.post("",createMessage);
router.delete("/:messageId",deleteMessage)
export default router;
