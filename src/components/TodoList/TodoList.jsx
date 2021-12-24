import React from "react";
import { TodoItem } from "../";
import './TodoList.css'

const TodoList = ({tasks, deleteTask, handleChangeStatus}) => {
    return (
        <div className="todo-list">
            <ul> 
                {tasks.map(task => <TodoItem task={task} key={task.id} deleteTask={deleteTask} handleChangeStatus={handleChangeStatus}/>)}
            </ul>
        </div>
    );
};

export default TodoList;
