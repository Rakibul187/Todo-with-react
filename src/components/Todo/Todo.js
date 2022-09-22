import React from 'react';
import './Todo.css'
const Todo = (props) => {
    const { userId, title } = props.todo
    return (
        <div className='todo'>
            <h2>Id: {userId}</h2>
            <h6>{title}</h6>
        </div>
    );
};

export default Todo;