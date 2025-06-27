import express from 'express';
import { createTodo, deleteTodo, getTodoById, updateTodo,getTodo } from '../controllers/todo.constroller.js';

const router = express.Router();

router.post('/',createTodo);// used to extract data from the user and pass it to the controller function
router.get('/',getTodo); // to read the data from database

router.get('/:id',getTodoById); // to read the data by user


router.put('/:id',updateTodo);//to update the data by user

router.delete('/:id',deleteTodo);//to delete the data by user

export default router;




