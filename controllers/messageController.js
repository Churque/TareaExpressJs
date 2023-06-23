import messageModel from "../models/messageModel.js";

async function createMessage(req, res) {
  try {
     await messageModel.create({
      id: req.body.id,
      message: req.body.message,
    });
    res.send({success : true});
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getMessagesByUser(req, res) {
  const userId = req.params.userId;
  const messages = await messageModel.find({ id: userId });
  res.send({ messages });
}

async function deleteMessage(req, res) {
  try {
    const messageId = req.params.messageId;
    const message = await messageModel.deleteOne({ _id: messageId });
     if (message.deletedCount === 1) {
      res.status(204).send();
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

export { createMessage, getMessagesByUser, deleteMessage };
