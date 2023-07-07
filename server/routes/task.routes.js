import Router from "express-promise-router";
import { getAll,getTask,putTask,postTask,deleteTask } from "../db.js";

const router = Router();

// holisssss
router.get('/',(req,res)=>{
    res.send('Hello World!!')
})

//get all tasks 
router.get('/tasks',getAll);

//get task by id 
router.get('/tasks/:Id',getTask);

//post a new task
router.post('/tasks',postTask);

//update a task
router.patch('/tasks/:Id',putTask);

//delete a task
router.delete('/tasks/:Id',deleteTask);


export default router;