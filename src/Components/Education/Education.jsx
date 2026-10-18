import { useState } from "react";
import { useNavigate } from "react-router-dom";

const countries = [
  "Pakistan", "India", "United States", "United Kingdom",
  "Canada", "Australia", "China", "Germany", "Other",
];
const inputStyle =
  "w-full border border-gray-400 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500";
const labelStyle = "block text-sm font-medium text-gray-800 mb-1";
const smallText = "text-xs text-gray-500 mt-1";
function EducationForm() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    schoolName: "",
    graduationDate: "",
    city: "",
    state: "",
    country: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    navigate("/applicationfee"); 
  }

  return (
    <div className="min-h-screen bg-indigo-950 py-16">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow rounded" >
        <div className="p-6 border-b border-gray-300">
          <h1 className="text-xl font-semibold text-slate-800">Education</h1>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className={labelStyle}>
                High School or Equivalent Name
              </label>
              <input
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                className={inputStyle}/>
            </div>
            <div>
              <label className={labelStyle}>Graduation Date</label>
              <input
                type="date"
                name="graduationDate"
                value={formData.graduationDate}
                onChange={handleChange}
                className={inputStyle}/>
              <p className={smallText}>Date</p>
            </div>
          </div>
          <div>
            <label className={labelStyle}>School Address</label>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={inputStyle}/>
                <p className={smallText}>City</p>
              </div>
              <div>
                <input
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={inputStyle}/>
                <p className={smallText}>State / Province</p>
              </div>
            </div>
          </div>
          <div>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={inputStyle}>
              <option value="">Please Select</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <p className={smallText}>Country</p>
          </div>
        </div>
        <div className="border-t border-gray-300 p-6 flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-200 hover:bg-gray-300 text-slate-700 text-sm font-medium px-8 py-3 rounded">
            Back
          </button>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-10 py-3 rounded">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default EducationForm;