import { Schema, Types, model } from "mongoose";
import { IBook, bookModel } from "./book.interface";


const BookSchema = new Schema<IBook, bookModel>(
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
      required: true,
    },
    reviews: {
      type: [String], // Specify the type of the array elements (an array of strings)
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = model<IBook, bookModel>("Book", BookSchema);
