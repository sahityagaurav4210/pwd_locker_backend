import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { INewUser } from "../../interfaces/user.interface";

export async function registerUserPreSaveHook(
  this: mongoose.Document<unknown, {}, mongoose.FlatRecord<INewUser>> &
    mongoose.FlatRecord<INewUser> &
    Required<{
      _id: Schema.Types.ObjectId;
    }>,
  next: mongoose.CallbackWithoutResultAndOptionalError
) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(this.password, salt);

    this.password = hashedPwd;
  }
  next();
}
