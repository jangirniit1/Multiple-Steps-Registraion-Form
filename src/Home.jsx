import React, { useState } from "react";
import { User } from "./constant.js";

function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(User);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="wrapper">
      {step === 1 && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <br />
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
          <br />
          <label htmlFor="fatherName">Father Name</label>
          <br />
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Enter your father's name"
          />
          <br />
          <label htmlFor="mobile">Mobile No.</label>
          <br />
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile No."
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <br />
          <button type="submit">Next</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="presentAddress">Present Address</label>
          <br />
          <textarea
            id="presentAddress"
            name="presentAddress"
            value={formData.presentAddress}
            onChange={handleChange}
            placeholder="Enter your present address"
          />
          <br />
          <label htmlFor="permanentAddress">Permanent Address</label>
          <br />
          <textarea
            id="permanentAddress"
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            placeholder="Enter your permanent address"
          />
          <br />
          <button type="submit">Next</button>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="qualification">Qualification Details</label>
          <br />
          <label htmlFor="qualification">Qualification</label>
          <label htmlFor="board">Board/University</label>
          <label htmlFor="board">Roll No.</label>
          <label htmlFor="board">Passing Year</label>
          <label htmlFor="board">Percentage</label> <br />
          <select>
            <option value="select">Select</option>
            <option value="secondary">Secondary</option>
            <option value="senior secondary">Senior Secondary</option>
            <option value="graduation">Graduation</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            id="board"
            name="board"
            value={formData.board}
            onChange={handleChange}
            placeholder="Board/University"
          />
          <input
            type="text"
            id="rollNo"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            placeholder="Roll no."
          />
          <input
            type="number"
            id="passYear"
            name="passYear"
            value={formData.passYear}
            onChange={handleChange}
            placeholder="Passing Year"
          />
          <input
            type="text"
            id="percentage"
            name="percentage"
            value={formData.percentage}
            onChange={handleChange}
            placeholder="Percentage"
          />
          <br />
          <button type="submit">Next</button>
        </form>
      )}
      {step === 4 && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="img">Photograph</label>
          <label htmlFor="img">Signature</label>
          <br />
          <input type="file" />
          <input type="file" />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Home;
