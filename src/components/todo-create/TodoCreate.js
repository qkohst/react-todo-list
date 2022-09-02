import './TodoCreate.css'
import {useState} from "react";

const TodoCreate = (props)=>{

    const [getInputTodo, setInputTodo] = useState('')

    const handeInputTodo = (event)=>{
        setInputTodo(event.target.value)
        // console.log(getInputTodo)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()

        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: getInputTodo
        }

        props.onCreateTodo(newTodo)

        setInputTodo('')
        // console.log(newTodo)
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" value={getInputTodo} onChange={handeInputTodo}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoCreate;