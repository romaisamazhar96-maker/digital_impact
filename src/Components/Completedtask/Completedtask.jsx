import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function getTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    return JSON.parse(saved);
  }
  return [];
}
function CompletedTask() {
  const navigate = useNavigate();
  const tasks = getTasks();
  const completedTasks = tasks.filter((task) => task.completed === true);
  return (
    <div className="max-w-[414px] mx-auto min-h-screen bg-[#d5d4ec] font-['Jost'] rounded-3xl overflow-hidden mt-10 border-2 border-[#9594d2]">
      <div className="bg-[#9594d2] h-28 px-5 pb-5 flex items-end gap-6">
        <button onClick={() => navigate("/")}>
          <FiArrowLeft className="text-2xl text-white" />
        </button>
        <h1 className="text-xl font-medium text-white">Completed Task</h1>
      </div>
      <div className="px-2 pt-4 space-y-4">
        {completedTasks.length === 0 && (
          <p className="text-center text-sm text-gray-500 mt-10">
            Task is not completed yet.
          </p>
        )}
        {completedTasks.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-2xl shadow-md px-4 py-4">
            <p className="text-sm font-semibold uppercase text-[#8584cc] break-all text-wrap">
              {task.title}
            </p>
            <p className="text-xs uppercase text-black break-all text-wrap">{task.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompletedTask;