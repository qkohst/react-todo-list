import './TodoList.css';

const TodoList = (props)=>{

    // console.log(props.dataTodos)

    return (
        <ul>{
            props.dataTodos.map((todo)=>{
                return <li key={todo.id}>{todo.title}</li>
            })
            
            // <li>Learn React</li>
            // <li>Build Tools</li>
            // <li>Record</li>
        }</ul>
    )
}

export default TodoList