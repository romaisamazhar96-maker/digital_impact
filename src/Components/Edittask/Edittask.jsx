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
function EditTask() {
  const navigate = useNavigate();
  const id = localStorage.getItem("editId");
  const tasks = getTasks();
  const task = tasks.find((t) => t.id === Number(id));
  const [title, setTitle] = useState(task ? task.title : "");
  const [detail, setDetail] = useState(task ? task.detail : "");

  if (!task) {
    return (
      <div className="max-w-[414px]  mx-auto min-h-[600px] mx-auto min-h-screen bg-white p-5 font-['Jost'] rounded-3xl overflow-hidden mt-10 border-2 border-[#9594d2]">
        <p className="text-sm text-gray-600">Task not Found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-[#9594d2] text-white px-6 py-2 rounded-lg">
          Back
        </button>
      </div>
    );
  }
  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === "") {
      alert("Please enter a title");
      return;
    }
    const newTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, title: title, detail: detail } : t
    );
    saveTasks(newTasks);
    alert("Task updated successfully!");
    navigate("/");
  }

  return (
    <div className="max-w-[414px] mx-auto min-h-[610px] bg-white font-['Jost'] rounded-3xl overflow-hidden mt-10 border-2 border-[#9594d2]">
      <div className="bg-[#9594d2] h-28 px-5 pb-5 flex items-end gap-6">
        <button type="button" onClick={() => navigate("/")}>
          <FiArrowLeft className="text-2xl text-white" />
        </button>
        <h1 className="text-xl font-medium text-white">Edit Task</h1>
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
          className="w-full border-b border-gray-400 py-2 text-sm placeholder-gray-500 focus:outline-none focus:border-[#9594d2]"
        />
        <div className="flex gap-6">
          <button
            type="submit"
            className="flex-1 bg-[#9594d2] text-white text-sm py-5 rounded-xl shadow-md" >
            Update
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex-1 bg-[#9594d2] text-white text-sm py-5 rounded-xl shadow-md">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTask;