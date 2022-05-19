import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';
import { tasks } from './Data';
function App() {
const [tasksd,setTasksd]=useState(tasks)
const editTask=(idEdit)=>{setTasksd(tasksd.map((el)=>el.id==idEdit?{...el,isdone:!el.isdone}:el))}
const addTask=(newDesc)=>{setTasksd([...tasksd,{desc:newDesc,id:tasksd.length,isdone:false}])}
const deleteTask=(idDelet)=>{setTasksd(tasksd.filter((el)=>el.id!==idDelet))}
const editDescTask=(idEditDesc,editDesc)=>{setTasksd(tasksd.map((el)=>el.id==idEditDesc?{...el,desc:editDesc}:el))}
return (
  
    <div className="App">
      <h1>To Do</h1>
      <AddTask addTask={addTask}/>
      {tasksd.length?<TaskList tasks={tasksd} editDescTask={editDescTask} editTask={editTask} deleteTask={deleteTask}/>:<h1>No Tasks</h1>
}
    </div>
  );
}

export default App;
