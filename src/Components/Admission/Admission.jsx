import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admission() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    middleInitial: "",
    lastName: "",
    month: "",
    day: "",
    year: "",
    gender: "",
    citizenship: "",
    phone: "",
    email: "",
    street: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
    emergencyFirstName: "",
    emergencyLastName: "",
    relationship: "",
    emergencyEmail: "",
    emergencyPhone: "",
    otherLanguage: "",
  });

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  }

  function handleSubmit(e) {

    e.preventDefault();

    console.log("Admission Data:", formData);

  }

  return (
    <center>
    <div className="min-h-screen bg-white px-5 py-6">

      <div className="w-full max-w-[900px]">

        <h1 className="text-4xl font-bold mb-6">
          COLLEGE ADMISSIONS FORM
        </h1>

        <p className="mb-7">
          Enter your admission information below
        </p>

        <form onSubmit={handleSubmit}>

          <h2 className="text-2xl font-bold mb-4">
            Name
          </h2>

          <div className="flex place-content-center">

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-[210px] h-[28px] border border-gray-500 px-1"
            />

            <input
              type="text"
              name="middleInitial"
              placeholder="Middle Initial"
              value={formData.middleInitial}
              onChange={handleChange}
              className="w-[210px] h-[28px] border border-gray-500 px-1"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-[210px] h-[28px] border border-gray-500 px-1"
            />

          </div>


          <h2 className="text-2xl font-bold mt-6 mb-3">
            Birth Date
          </h2>

          <div className="flex place-content-center">

            <select
              name="month"
              value={formData.month}
              onChange={handleChange}
              className="w-[185px] h-[28px] border border-gray-500"
            >
              <option value="">Please select a month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>

            <select
              name="day"
              value={formData.day}
              onChange={handleChange}
              className="w-[175px] h-[28px] border border-gray-500"
            >
              <option value="">Please select a day</option>

              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1}>
                  {i + 1}
                </option>
              ))}

            </select>

            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-[180px] h-[28px] border border-gray-500"
            >
              <option value="">Please select a year</option>

              {Array.from({ length: 80 }, (_, i) => (
                <option key={i}>
                  {2026 - i}
                </option>
              ))}

            </select>

          </div>


          <h2 className="text-2xl font-bold mt-6 mb-3">
            Gender
          </h2>

          <div className="flex gap-4 mb-4">

            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
              />

              <span className="ml-1">
                Male
              </span>
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
              />

              <span className="ml-1">
                Female
              </span>
            </label>

          </div>


          <div className="flex items-center mb-2 ">

            <label>
              Of which country are you a citizen?
            </label>

            <select
              name="citizenship"
              value={formData.citizenship}
              onChange={handleChange}
              className="w-[150px] h-[28px] border border-gray-500 ml-2"
            >
              <option value="">
                Please Select
              </option>

              <option>Pakistan</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>

            </select>

          </div>


          <div className="flex items-center mb-2 ">

            <label>
              Phone
            </label>

            <input
              type="text"
              name="phone"
              placeholder="(000) 000-0000"
              value={formData.phone}
              onChange={handleChange}
              className="w-[210px] h-[28px] border border-gray-500 ml-2 px-1"
            />

          </div>


          <div className="flex items-center mb-6">

            <label>
              E-mail Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-[210px] h-[28px] border border-gray-500 ml-2 px-1"
            />

          </div>


          <h2 className="text-2xl font-bold mb-4">
            Mailing Address
          </h2>

          <div className="flex">

            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={formData.street}
              onChange={handleChange}
              className="w-[340px] h-[28px] border border-gray-500 px-1"
            />

            <input
              type="text"
              name="street2"
              placeholder="Street Address Line 2"
              value={formData.street2}
              onChange={handleChange}
              className="w-[340px] h-[28px] border border-gray-500 px-1"
            />

          </div>

          <div className="flex">

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-[225px] h-[28px] border border-gray-500 px-1"
            />

            <input
              type="text"
              name="state"
              placeholder="State / Province"
              value={formData.state}
              onChange={handleChange}
              className="w-[225px] h-[28px] border border-gray-500 px-1"
            />

            <input
              type="text"
              name="zip"
              placeholder="Postal / Zip Code"
              value={formData.zip}
              onChange={handleChange}
              className="w-[230px] h-[28px] border border-gray-500 px-1"
            />

          </div>


          <h2 className="text-2xl font-bold mt-6 mb-4">
            Emergency Contact
          </h2>

          <div className="flex">

            <input type="text"name="emergencyFirstName"placeholder="First Name"value={formData.emergencyFirstName}onChange={handleChange}className="w-[225px] h-[28px] border border-gray-500 px-1"
            />

            <input type="text"name="emergencyLastName"placeholder="Last Name"value={formData.emergencyLastName}onChange={handleChange}className="w-[225px] h-[28px] border border-gray-500 px-1"
            />

            <input type="text"name="relationship"placeholder="Relationship"value={formData.relationship}onChange={handleChange}className="w-[230px] h-[28px] border border-gray-500 px-1"
            />

          </div>


          <div className="flex items-center mt-2">

            <label>
              Emergency Email
            </label>

            <input type="email"name="emergencyEmail"value={formData.emergencyEmail}onChange={handleChange}className="w-[220px] h-[28px] border border-gray-500 ml-2"
            />

          </div>


          <div className="flex items-center mt-2">

            <label>
              Emergency Phone Number
            </label>

            <input type="text"name="emergencyPhone"value={formData.emergencyPhone}onChange={handleChange}className="w-[220px] h-[28px] border border-gray-500 ml-2"
            />

          </div>


          <h2 className="text-2xl font-bold mt-6 mb-3">
            Do you speak any languages other than English?
          </h2>

          <div className="flex gap-4 mb-5">

            <label>
              <input
                type="radio"
                name="otherLanguage"
                value="Yes"
                onChange={handleChange}
              />

              <span className="ml-1">
                Yes
              </span>
            </label>

            <label>
              <input type="radio"name="otherLanguage"value="No"onChange={handleChange}
              />

              <span className="ml-1">
                No
              </span>
            </label>

          </div>


          <button
            type="button"
            onClick={() => navigate("/education")}
            className="border border-gray-500 px-4 py-1 bg-gray-100"
          >
            Next
          </button>

        </form>

      </div>

    </div>
    </center>
  );
}

export default Admission;