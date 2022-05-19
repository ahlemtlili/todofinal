import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [text, setText] = useState("")
    const handleClick=()=>{
        addTask(text)
        setText("")
    }
  return (
    <div>
        <input value={text} onChange={(e)=>setText(e.target.value)} type="text"/>
        <button onClick={handleClick}>+</button>
    </div>
  )
}

export default AddTask