import React, { useState } from 'react';
import './TodoList.css'; // Import the CSS file

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [taskDeadline, setTaskDeadline] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (!taskText.trim() || !taskDeadline) {
      alert("Please fill in all fields");
      return;
    }

    const newTask = {
      text: taskText,
      deadline: taskDeadline,
    };

    setTasks([...tasks, newTask]);
    setTaskText('');
    setTaskDeadline('');
  };

  const editTask = (index) => {
    setEditingIndex(index);
    setTaskText(tasks[index].text);
    setTaskDeadline(tasks[index].deadline);
  };

  const saveEditedTask = () => {
    if (!taskText.trim() || !taskDeadline) {
      alert("Please fill in all fields");
      return;
    }

    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = {
      text: taskText,
      deadline: taskDeadline,
    };

    setTasks(updatedTasks);
    setTaskText('');
    setTaskDeadline('');
    setEditingIndex(null);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setTaskText('');
    setTaskDeadline('');
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const sortTasksByDeadline = () => {
    const sortedTasks = [...tasks];
    sortedTasks.sort((a, b) => a.deadline.localeCompare(b.deadline));
    setTasks(sortedTasks);
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Enter a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <input
        type="date"
        value={taskDeadline}
        onChange={(e) => setTaskDeadline(e.target.value)}
      />
      {editingIndex === null ? (
        <button onClick={addTask}>Add Task</button>
      ) : (
        <div>
          <button onClick={saveEditedTask} className="save-button">Save</button>
          <button onClick={cancelEdit} className="edit-button">Cancel</button>
        </div>
      )}
      <button onClick={sortTasksByDeadline} className="sort-button">Sort by Deadline</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {index === editingIndex ? (
              <>
                <input
                  type="text"
                  value={taskText}
                  onChange={(e) => setTaskText(e.target.value)}
                />
                <input
                  type="date"
                  value={taskDeadline}
                  onChange={(e) => setTaskDeadline(e.target.value)}
                />
              </>
            ) : (
              <span>
                {task.text} (Deadline: {task.deadline})
              </span>
            )}
            {index === editingIndex ? (
              <button onClick={saveEditedTask} className="save-button">Save</button>
            ) : (
              <button onClick={() => editTask(index)} className="edit-button">Edit</button>
            )}
            <button onClick={() => deleteTask(index)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
