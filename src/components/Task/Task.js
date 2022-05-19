import React, { useState } from 'react'
import './task.css';
const Task = ({el,editTask,deleteTask,editDescTask}) => {
    const [edit, setEdit] = useState(false)
    const [editDesc, setEditDesc] = useState(el.desc)
    const handleEdit=()=>{
        setEdit(!edit)
        if(edit)
{ editDescTask(el.id,editDesc)}
}  
return (
    <div style={{display:'flex',justifyContent:"space-evenly"}}>
{    edit?<input value={editDesc} onChange={(e)=>setEditDesc(e.target.value)} type="text"/>:<h1 className={el.isdone ?"doneclass":"undoneclass"} style={{margin:"0px"}}>{el.desc}</h1>
}    <div>
    <button onClick={handleEdit}>{!edit?"edit":"save"}</button>
    <button onClick={()=>deleteTask(el.id)} >delete</button>
    <button onClick={()=>editTask(el.id)}>{el.isdone?"Done":"Undone"}</button>
    </div>
    </div>
  )
}

export default Task