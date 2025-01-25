import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: stringify,
    required: true,
    unique: true,
  },
  password: {
    type: stringify,
    required: true,
  },
  role: { 
    type: String, 
    enum: ["student", "professor"], 
    required: true
 },
});

export default mongoose.models.User||mongoose.model('User',UserSchema);