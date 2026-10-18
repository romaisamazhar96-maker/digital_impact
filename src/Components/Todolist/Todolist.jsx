import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FiCalendar,FiList,FiCheck,FiEdit2,FiTrash2,FiCheckCircle,FiPlus,} from "react-icons/fi";

function getTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    return JSON.parse(saved);
  }
  return [];
}
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function TodoList() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(getTasks());
  
  function handleEdit(id) {
    localStorage.setItem("editId", id);
    navigate("/edit");
  }
  function handleDelete(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    saveTasks(newTasks);
  }
  function handleComplete(id) {
    const clickedTask = tasks.find((task) => task.id === id);
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
    saveTasks(newTasks);
    if (clickedTask.completed === false) {
      alert("Task completed!");
    }
  }

  return (
    <div className="max-w-[414px] mx-auto min-h-[610px] bg-[#d5d4ec] relative font-['Jost'] rounded-3xl overflow-hidden mt-10 border-2 border-[#9594d2]">
      <div className="bg-[#9594d2] h-28 px-5 pb-5 flex items-end justify-between">
        <h1 className="text-2xl font-semibold text-white">TODO APP</h1>
        <FiCalendar className="text-3xl text-slate-800" />
      </div>
      <div className="bg-white flex text-[11px] text-gray-600">
        <button className="flex-1 py-2 flex flex-col items-center gap-1 text-[#8584cc]">
          <FiList className="text-lg" />
          All
        </button>
        <button
          onClick={() => navigate("/completed")}
          className="flex-1 py-2 flex flex-col items-center gap-1">
          <FiCheck className="text-lg" />
          Completed
        </button>
      </div>
      <div className="px-2 pt-4 pb-28 space-y-4">
        {tasks.length === 0 && (
          <p className="text-center text-sm text-gray-500 mt-10">
            No Task Added,Tab + to add Tasks.</p>
        )}
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`rounded-2xl shadow-md px-4 py-4 flex items-center justify-between ${
              task.completed ? "bg-green-200" : "bg-white"
            }`}>
            <div>
              <p className="text-sm font-semibold uppercase text-[#8584cc] break-all text-wrap">
                {task.title}
              </p>
              <p className="text-xs uppercase text-black break-all text-wrap">{task.detail}</p>
            </div>
            <div className="flex gap-5 text-lg text-[#9a99d6]">
              <button onClick={() => handleEdit(task.id)} title="Edit">
                <FiEdit2 />
              </button>
              <button onClick={() => handleDelete(task.id)} title="Delete">
                <FiTrash2 />
              </button>
              <button
                onClick={() => handleComplete(task.id)}
                title="Complete"
                className={task.completed ? "text-green-700" : ""}>
                <FiCheckCircle />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/add")}
        className="absolute bottom-6 right-10 w-12 h-12 rounded-full bg-[#9594d2] text-white text-2xl shadow-lg flex items-center justify-center">
        <FiPlus />
      </button>
    </div>
  );
}

export default TodoList;