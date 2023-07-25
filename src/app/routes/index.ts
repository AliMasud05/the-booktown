import express from 'express';
import { BookRoutes } from '../module/books/book.route';

const router = express.Router();

const moduleRoutes = [
  
  {
    path: '/book',
    route: BookRoutes,
  }
  
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;

//  router.use('/user', UserRoutes);
//  router.use('/academic-semesters', AcademicSemesterRoutes);


