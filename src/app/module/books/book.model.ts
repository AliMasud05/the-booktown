import { Schema, Types, model } from "mongoose";


const FacultySchema = new Schema<IFaculty, FacultyModel>(
  {
  title: {
      type: String,
      required: true,
      unique: true,
    },    
    author: {
      type: String,
    },
    genre: {
      type: String,
      required:true
    },   
    reviews: {
      type: String,    
      required: true,
    },     
  },
  {
    timestamps: true,
  }
);

export const Faculty = model<IFaculty, FacultyModel>("Faculty", FacultySchema);
