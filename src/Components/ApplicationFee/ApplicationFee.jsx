import { useState } from "react";
import { useNavigate } from "react-router-dom";

const paymentOptions = ["Credit Card", "Mail a Check", "In-person at school"];

function ApplicationFee() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  function handleCheck(option) {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Payment Methods:", selected);
    alert("Form submitted successfully!");
  }
  return (
    <div className="min-h-screen bg-indigo-950 py-16">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow rounded">
        <div className="p-6 border-b border-gray-300">
          <h1 className="text-xl font-semibold text-slate-800">
            Application Fee
          </h1>
          <p className="text-sm font-medium text-slate-700">
            Payment is due 3 days prior to the start of the class
          </p>
        </div>
        <div className="p-6">
          <label className="block text-sm font-medium text-gray-800 mb-3">
            Payment Method:
          </label>
          <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
            {paymentOptions.map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  onChange={() => handleCheck(option)}
                  className="w-4 h-4"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-300 p-6 flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/education")}
            className="bg-gray-200 hover:bg-gray-300 text-slate-700 text-sm font-medium px-8 py-3 rounded" >
            Back
          </button>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-8 py-3 rounded">
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
}

export default ApplicationFee;