import React, { useState } from 'react';

function TodoForm(props) {
    const [task, setTask] = useState("")
        function changeHandler(e) {
            setTask(e.target.value)
        }
        function submitHandler(e) {
            e.preventDefault();
            props.onSubmit({
                id: Math.floor(Math.random()*10000),
                text: task
            })
            setTask('')
        }
        return (
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="What are you going to do today?" value={task} onChange={changeHandler} />
                <button onClick="addTask">Add task</button>
            </form>
        );
}

export default TodoForm