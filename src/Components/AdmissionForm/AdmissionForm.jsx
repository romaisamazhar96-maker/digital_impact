import { useState } from "react";
import { useNavigate } from "react-router-dom";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const days = [];
for (let i = 1; i <= 31; i++) {
  days.push(i);
}

const years = [];
for (let y = 2010; y >= 1950; y--) {
  years.push(y);
}

const countries = [
  "Pakistan", "India", "United States", "United Kingdom",
  "Canada", "Australia", "China", "Germany", "Other",
];

const inputStyle =
  "w-full border border-gray-400 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500";
const labelStyle = "block text-sm font-medium text-gray-800 mb-1";
const smallText = "text-xs text-gray-500 mt-1";

function AdmissionForm() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    middleInitial: "",
    lastName: "",
    month: "",
    day: "",
    year: "",
    gender: "",
    country: "",
    phone: "",
    email: "",
    street: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
    emergencyFirst: "",
    emergencyLast: "",
    relationship: "",
    emergencyEmail: "",
    emergencyPhone: "",
    otherLanguage: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault(); 
    console.log(formData); 
    navigate("/education");
  }

  return (
    <div className="min-h-screen bg-indigo-950 py-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow rounded">
        <div className="p-6 border-b border-gray-300">
          <h1 className="text-2xl text-slate-800">COLLEGE ADMISSIONS FORM</h1>
          <p className="text-sm font-medium text-slate-700">
            Enter your admission information below
          </p>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className={labelStyle}>Name</label>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={inputStyle}
                />
                <p className={smallText}>First Name</p>
              </div>
              <div>
                <input
                  name="middleInitial"
                  value={formData.middleInitial}
                  onChange={handleChange}
                  className={inputStyle}
                />
                <p className={smallText}>Middle Initial</p>
              </div>
              <div>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={inputStyle}/>
                <p className={smallText}>Last Name</p>
              </div>
            </div>
          </div>
          <div>
            <label className={labelStyle}>Birth Date</label>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <select
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  className={inputStyle}>
                  <option value="">Please select a month</option>
                  {months.map((m) => (
                    <option key={m} value={m}>{m}</option>))}
                </select>
                <p className={smallText}>Month</p>
              </div>
              <div>
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  className={inputStyle}>
                  <option value="">Please select a day</option>
                  {days.map((d) => (
                    <option key={d} value={d}>{d}</option>))}
                </select>
                <p className={smallText}>Day</p>
              </div>
              <div>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className={inputStyle}>
                  <option value="">Please select a year</option>
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>))}
                </select>
                <p className={smallText}>Year</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className={labelStyle}>Gender</label>
              <div className="flex gap-6 mt-2 text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}/>
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}/>
                  Female
                </label>
              </div>
            </div>

            <div>
              <label className={labelStyle}>
                Of which country are you a citizen?
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={inputStyle}>
                <option value="">Please Select</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className={labelStyle}>Phone</label>
              <input
                name="phone"
                placeholder="(000) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className={inputStyle}/>
            </div>
            <div>
              <label className={labelStyle}>E-mail Address</label>
              <input
                type="email"
                name="email"
                placeholder="ex: myname@example.com"
                value={formData.email}
                onChange={handleChange}
                className={inputStyle}/>
              <p className={smallText}>example@example.com</p>
            </div>
          </div>
          <div className="space-y-4">
            <label className={labelStyle}>Mailing Address</label>
            <div>
              <input
                name="street"
                value={formData.street}
                onChange={handleChange}
                className={inputStyle}/>
              <p className={smallText}>Street Address</p>
            </div>
            <div>
              <input
                name="street2"
                value={formData.street2}
                onChange={handleChange}
                className={inputStyle}/>
              <p className={smallText}>Street Address Line 2</p>
            </div>
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
            <div>
              <input
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className={inputStyle}/>
              <p className={smallText}>Postal / Zip Code</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className={labelStyle}>Emergency Contact</label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    name="emergencyFirst"
                    value={formData.emergencyFirst}
                    onChange={handleChange}
                    className={inputStyle}/>
                  <p className={smallText}>First Name</p>
                </div>
                <div>
                  <input
                    name="emergencyLast"
                    value={formData.emergencyLast}
                    onChange={handleChange}
                    className={inputStyle}/>
                  <p className={smallText}>Last Name</p>
                </div>
              </div>
            </div>
            <div>
              <label className={labelStyle}>Relationship</label>
              <input
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                className={inputStyle}/>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className={labelStyle}>Email</label>
              <input
                type="email"
                name="emergencyEmail"
                value={formData.emergencyEmail}
                onChange={handleChange}
                className={inputStyle}/>
              <p className={smallText}>example@example.com</p>
            </div>
            <div>
              <label className={labelStyle}>Phone Number</label>
              <input
                name="emergencyPhone"
                placeholder="(000) 000-0000"
                value={formData.emergencyPhone}
                onChange={handleChange}
                className={inputStyle}/>
              <p className={smallText}>Please enter a valid phone number.</p>
            </div>
          </div>
          <div>
            <label className={labelStyle}>
              Do you speak any languages other than English?
            </label>
            <div className="grid grid-cols-2 mt-2 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="otherLanguage"
                  value="Yes"
                  checked={formData.otherLanguage === "Yes"}
                  onChange={handleChange}/>
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="otherLanguage"
                  value="No"
                  checked={formData.otherLanguage === "No"}
                  onChange={handleChange}/>
                No
              </label>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 p-6 flex justify-end">
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

export default AdmissionForm;