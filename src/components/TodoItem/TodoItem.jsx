import React, {useState} from "react";
import "./TodoItem.css";
import { AiFillDelete } from 'react-icons/ai';

const TodoItem = ({task, deleteTask, handleChangeStatus}) => {
    const [itemDelete, setItemDelete] = useState(false)

    const handleDeleteTask = (task) =>{
        setItemDelete(true)
        setTimeout(() => {       
            deleteTask(task)
        }, 300);
    }

    return (
        <li className={`TodoItem ${task.status ? "active" : "" } ${itemDelete ? "delete" : "" }`}>
            <input type="checkbox" checked={task.status} onChange={() => handleChangeStatus(task.id)}/>
            <h2>{task.title}</h2>
            <button onClick={() => {handleDeleteTask(task.id)}}><AiFillDelete /></button>
        </li>
    );
};

export default TodoItem;