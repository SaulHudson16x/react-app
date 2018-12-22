import React from "react"

export default ({key,todo,onDeleteTodoList})=>{
return <div>
            {todo.title} <button onClick = {onDeleteTodoList}>x</button>

</div>
}