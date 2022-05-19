import React from 'react'
import Task from '../Task/Task'
const TaskList = ({tasks,editTask,deleteTask,editDescTask}) => {
  return (
    <div>
{tasks.map((el)=><Task key={el.id} el={el} editDescTask={editDescTask} editTask={editTask} deleteTask={deleteTask}/>)}
    </div>
  )
}

export default TaskList