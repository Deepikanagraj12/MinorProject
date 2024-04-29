import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";

const Register = () => {
  // Initialize useNavigate
  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    userType: "",
    branch: "",
    year: "",
    dob: "",
    address: "",
    collegeName: "",
    skills: "",
    phoneNumber: "",
    graduationYear: "",
    companyName: "",
    designation: "",
    profileAttachment: "",
  }); // State to store form data

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data
    console.log(formData);
  };

  // Function to handle next button click
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Render different sets of input fields based on the current page
  const renderFormFields = () => {
    switch (currentPage) {
      case 1:
        return (
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <option value="">Select User Type</option>
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
            </select>
          </div>
        );
      case 2:
        return (
          <div>
            {/* Fields for students */}
            {formData.userType === "student" && (
              <>
                <input
                  type="text"
                  name="branch"
                  placeholder="Branch"
                  value={formData.branch}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="year"
                  placeholder="Year"
                  value={formData.year}
                  onChange={handleChange}
                />
                <input
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  value={formData.dob}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="collegeName"
                  placeholder="College Name"
                  value={formData.collegeName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="skills"
                  placeholder="Skills"
                  value={formData.skills}
                  onChange={handleChange}
                />
                <input
                  type="file"
                  name="profileAttachment"
                  placeholder="Profile Attachment"
                  onChange={handleChange}
                />
              </>
            )}
            {/* Fields for alumni */}
            {formData.userType === "alumni" && (
              <>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="graduationYear"
                  placeholder="Graduation Year"
                  value={formData.graduationYear}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="designation"
                  placeholder="Designation"
                  value={formData.designation}
                  onChange={handleChange}
                />
                <input
                  type="file"
                  name="profileAttachment"
                  placeholder="Profile Attachment"
                  onChange={handleChange}
                />
              </>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left1">
          <h1>Unilink</h1>
          <p>A social web Application to connect Students and Alumni!</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right1">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            {renderFormFields()}
            <div className="buttons">
              {currentPage > 1 && (
                <button type="button" onClick={() => setCurrentPage(currentPage - 1)}>
                  Previous
                </button>
              )}
              {currentPage < 2 && (
                <button className="next" type="button" onClick={handleNext}>
                  Next
                </button>
              )}
              {currentPage === 2 && (
                <button class name = "next" type="submit">Register</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
