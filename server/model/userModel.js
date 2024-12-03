import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    isAdmin: { type: Boolean, default: false },
    userCart: { type: Object, default: {} },
  },
  { minimized: false }
);

const userModel =mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
