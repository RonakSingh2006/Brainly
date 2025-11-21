import mongoose from "mongoose";
import { Schema } from "mongoose";
import { model } from "mongoose";
const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
export const UserModel = model('User', UserSchema);
//# sourceMappingURL=db.js.map