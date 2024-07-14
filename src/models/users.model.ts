import mongoose, { model, Schema } from "mongoose";
const Patterns = require("@book-junction/patterns");

import { INewUser } from "../interfaces/user.interface";
import { ModelNames } from "../constants";
import { registerUserPreSaveHook } from "../db/hooks/user.hooks";

const userSchema = new Schema<INewUser>(
  {
    name: {
      type: mongoose.Schema.Types.String,
      required: [true, "Name is required"],
      minlength: 2,
      maxlength: 32,
      match: [Patterns.common.name, "Invalid name"],
    },

    email: {
      type: mongoose.Schema.Types.String,
      minlength: 5,
      maxlength: 100,
      unique: true,
      default: null,
      match: [Patterns.common.email, "Invalid email"],
    },

    phone: {
      type: mongoose.Schema.Types.String,
      minlength: 10,
      maxlength: 15,
      unique: true,
      required: [true, "Phone number is required"],
      index: true,
      match: [Patterns.common.phone, "Invalid phone"],
    },

    password: {
      type: mongoose.Schema.Types.String,
      minlength: 8,
      maxlength: 32,
      required: [true, "Password is required"],
      match: [Patterns.common.password, "Invalid password"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", registerUserPreSaveHook);

const User = model<INewUser>(ModelNames.USER, userSchema);

export default User;
