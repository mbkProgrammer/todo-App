import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = ({ addTask }) => {
    const [value, setValue] = useState("");

    const handleChangeValue = (event) => {
        if (event) event.preventDefault();
        setValue(event.target.value);
    };

    const handleSubmitTask = (event) => {
        if (event) event.preventDefault();
        if (!value || value === "") {
            return;
        } else {
            addTask(value);
            setValue("");
        }
    };

    return (
        <div className="add-todo">
            <form onSubmit={handleSubmitTask}>
                <input
                    type="text"
                    placeholder="what need to do?"
                    onChange={handleChangeValue}
                    value={value}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddTodo;
