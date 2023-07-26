import { Schema, Types, model } from "mongoose";

import { IUser, userModel } from "./user.interface";


const UserSchema = new Schema<IUser, userModel>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required:true
    },    
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser, userModel>("User", UserSchema);
