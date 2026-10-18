import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";


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
function AddTask() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === "") {
      alert("Please enter a title");
      return;
    }
    const newTask = {
      id: Date.now(),
      title: title,
      detail: detail,
      completed: false,
    };
    const tasks = getTasks();
    saveTasks([...tasks, newTask]);
    alert("Task added successfully!");
    navigate("/");
  }

  return (
    <div className="max-w-[414px] mx-auto min-h-[610px] bg-white font-['Jost'] rounded-3xl overflow-hidden mt-10 border-2 border-[#9594d2]">
      <div className="bg-[#9594d2] h-28 px-5 pb-5 flex items-end gap-6">
        <button type="button" onClick={() => navigate("/")}>
          <FiArrowLeft className="text-2xl text-white" />
        </button>
        <h1 className="text-xl font-medium text-white">Add Task</h1>
      </div>
      <form onSubmit={handleSubmit} className="px-3 pt-8 space-y-8">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full border-b border-gray-400 py-2 text-sm placeholder-gray-500 focus:outline-none focus:border-[#9594d2]"
        />
        <input
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          placeholder="Detail"
          className="w-full border-b border-gray-400 py-2 text-sm placeholder-gray-500 focus:outline-none focus:border-[#9594d2]"/>
        <button
          type="submit"
          className="w-full bg-[#9594d2] text-white text-xl font-semibold py-5 rounded-xl shadow-md">
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddTask