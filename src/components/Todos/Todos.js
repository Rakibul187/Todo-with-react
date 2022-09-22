import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import './Todos.css'
const Todos = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    return (
        <div className='todos-container'>
            {todos.map(todo => <Todo todo={todo} key={todo.id}></Todo>)}
        </div>
    );
};

export default Todos;