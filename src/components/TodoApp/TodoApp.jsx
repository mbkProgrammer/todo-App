import React, { useEffect, useState } from "react";
import { AddTodo, TodoList, FilterTodo } from "../";
import "./TodoApp.css";
import { v4 as uuidv4 } from "uuid";

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [filter, setFilter] = useState('all');
    const [refresh, setRefresh] = useState(false);

    const addTask = (task) => {
        const newTasksList = [
            ...tasks,
            {
                id: uuidv4(),
                title: task,
                status: false,
            },
        ]
        setTasks(newTasksList);
        localStorage.setItem('tasks', JSON.stringify(newTasksList) )
    };

    const deleteTask = (taskID) => {
        let newTaskList = tasks;
        delete newTaskList[tasks.findIndex((task) => task.id === taskID)];
        newTaskList = newTaskList.filter((item) => item);
        setTasks(newTaskList);
        localStorage.setItem('tasks', JSON.stringify(newTaskList))
    };

    const handleChangeStatus = (taskID) => {
        let newTaskList = tasks;
        const taskIndex = tasks.findIndex((task) => task.id === taskID)
        newTaskList[taskIndex].status = !newTaskList[taskIndex].status
        setTasks(newTaskList);
        setRefresh(!refresh)
        localStorage.setItem('tasks', JSON.stringify(newTaskList))
    };



    useEffect(() => {
        const storageTask = JSON.parse(localStorage.getItem('tasks'))
        if(storageTask) {
            setTasks(storageTask);
        }
    }, []);

    useEffect(() => {
        if (filter === 'all') {
            setFilteredTasks(tasks);
        }
        if (filter === 'active') {
            const newFilterActiveTasks = tasks.filter((item) => !item.status);
            setFilteredTasks(newFilterActiveTasks);
        }
        if (filter === 'completed') {
            const newFilterCompletedTasks = tasks.filter((item) => item.status);
            setFilteredTasks(newFilterCompletedTasks);
        }
    }, [filter, tasks, refresh]);

    return (
        <div className="todo-app">
            <AddTodo addTask={addTask} />
            <TodoList tasks={filteredTasks} deleteTask={deleteTask} handleChangeStatus={handleChangeStatus}/>
            <FilterTodo tasks={filteredTasks} updateFilter={setFilter} />
        </div>
    );
};

export default TodoApp;
