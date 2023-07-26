import express from "express";
import { Book } from "./book.model";
import { BookController } from "./book.controller";
const router = express.Router();

router.get("/review/:id", BookController.getReview);
router.patch("/review/:id", BookController.postReview);
router.get("/:id", BookController.getSingleBook);
router.post("/create-book", BookController.createBook);
router.get("/", BookController.getAllBooks);
router.delete("/:id", BookController.deleteBook);


router.patch(
  "/:id",
  BookController.updateBook 
  
);

export const BookRoutes = router;
