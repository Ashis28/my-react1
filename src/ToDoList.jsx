
import React, { useState } from "react";
function ToDoList() {
    let [taskList, setTaskes] = useState(["Complete react", "start native", "flutter"]);
    let [task, addTask] = useState("");

    function handleAddTask(event) {
        addTask(event.target.value);
    }

    function addTaskInList() {
        setTaskes(t => [...t, task]);
        addTask(""); // Clear the input after adding
    }

    function deleteTask(index) {
        setTaskes(taskList.filter((_, i) => index != i));
    }
    function moveTaskUp(index) {
        if (index === 0) return; // Can't move up the first item
        setTaskes(prevList => {
            const newList = [...prevList];
            [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
            return newList;
        });
    }
    function moveTaskDown(index) {
        setTaskes(prevList => {
            if (index >= prevList.length - 1) return prevList; // Can't move down the last item
            const newList = [...prevList];
            [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
            return newList;
        });
    }

    return (
        <div className="main-div">
            <h2>To Do List</h2>

            <div className="first-container">
                <input
                    type="text"
                    value={task}
                    placeholder="Enter a task"
                    onChange={handleAddTask}
                />

                <button onClick={addTaskInList}>Add Task</button>
            </div>

            <div className="second-container">
                <ol>
                    {taskList.map((element, index) => (
                        <li key={index} className="task-lists">
                            <span>{element}</span>

                            <button onClick={() => deleteTask(index)}>Delete</button>
                            <button onClick={() => moveTaskUp(index)}>🔝</button>
                            <button onClick={() => moveTaskDown(index)}>⬇️</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList