import { Todo } from "../models/todo.model.js";

//create
export const createTodo = async (req, res) => {
    console.log(req.body);
    
  try {
    const { title, description } = req.body;
    console.log(title, description);
    
    const newTodo = await Todo.create({ title, description });
    res.status(201).json(newTodo); // Informational responses (100 – 199) Successful responses (200 – 299)Redirection messages (300 – 399)Client error responses (400 – 499)Server error responses (500 – 599)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// read all
export const getTodo = async(req,res) => {
   try{
    const Todos = await Todo.find();
   res.status(200).json(Todos);
   }
   catch(error){
    res.status(401).json({message:error.message});
   }
};

// read one
export const getTodoById = async(req,res) => {
try{
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
}
catch(error){
    res.status(401).json({message:error.message});
}


};

// update
export const updateTodo = async(req,res) => {
try{
    const Utodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(Utodo);
}
catch(error){
    res.status(401).json({mesage:error.message});
}


};

//delete
export const deleteTodo =async (req,res) => {
    try{
    const Dtodo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json(Dtodo);
    }
    catch(error){
        res.status(401).json({message:"Todo Deleted"});
    }

};
