import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const messageModel = mongoose.model("Message", messageSchema);

export default messageModel;
