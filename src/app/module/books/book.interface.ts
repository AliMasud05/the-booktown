import { Model } from "mongoose";

export type IBook ={
  title: string;
  author: string;
  genre: string; 
  reviews: string[];
}
export type bookModel = Model<IBook, Record<string, unknown>>;
