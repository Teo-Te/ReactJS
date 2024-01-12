import React, {useState} from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
  //This hook gets the input value
  const [todos, setTodos] = useState('');
  //This hook stores the todos
  const [todoList, setTodoList] = useState([]);
  //This function adds the todos to the list form the inputs
  const addtask = () => {
    setTodoList([...todoList, todos]);
    
  }
  //This function gets the values from the array and displays them
  const tasklist = todoList.map((object, index) => {
    return (
    <div className='row justify-content-center'>
      <h1 className='col-md-6'>{index+1 + '. '} {object}</h1>
      <button className='col-md-1 btn btn-danger m-1' onClick={() => deleteTask(index)}>Delete</button>
    </div>
    )
  })
 //This function deletes the todos from the list
  const deleteTask = (index) => {
    const newTask = [...todoList];
    newTask.splice(index, 1);
    setTodoList(newTask);
  }
  //This function clears the list
  const clearAll = () => {
    setTodoList([]);
  }
  //This variable counts the total number of todos in the list
  const count = todoList.length;
  
  return (
   //This is the main html code for the app
   <div className="App">
      <h1>Todo List</h1>
      <div className='row justify-content-center'>
        <input className="form-control col-md-6 m-1" type="text" placeholder="Enter task" value={todos} onChange={(e)=>{setTodos(e.target.value)}} />
        <button className="btn btn-success col-md-1 m-1" onClick={addtask}>Add Task</button>
        <button className="btn btn-danger col-md-1 m-1" onClick={clearAll}>Clear All</button>
        <h4 className='row-md-1 m-1'>Total: {count}</h4>
      </div>
      {tasklist}
    </div>
    
  );
}

export default App;
