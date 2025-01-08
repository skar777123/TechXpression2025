"use client";
import React, { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    college: "",
    studentId: "",
    phone: "",
    email: "",
    acYear: "",
    branch: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
    question11: "",
    question12: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3005/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: formData.name,
        gender: formData.gender,
        college: formData.college,
        studentId: formData.studentId,
        phone: formData.phone,
        email: formData.email,
        acYear: formData.acYear,
        branch: formData.branch,
        question1: formData.question1,
        question2: formData.question2,
        question3: formData.question3,
        question4: formData.question4,
        question5: formData.question5,
        question6: formData.question6,
        question7: formData.question7,
        question8: formData.question8,
        question9: formData.question9,
        question10: formData.question10,
        question11: formData.question11,
        question12: formData.question12,
      }),
    });
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            className="text-black"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            className="text-black"
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>College:</label>
          <input
            className="text-black"
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Student ID:</label>
          <input
            className="text-black"
            type="number"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            className="text-black"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            className="text-black"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Academic Year:</label>
          <input
            className="text-black"
            type="text"
            name="acYear"
            value={formData.acYear}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Branch:</label>
          <input
            className="text-black"
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Question 1:</label>
          <input
            className="text-black"
            type="text"
            name="question1"
            value={formData.question1}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Question 2:</label>
          <input
            className="text-black"
            type="text"
            name="question2"
            value={formData.question2}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Question 3:</label>
          <input
            className="text-black"
            type="text"
            name="question3"
            value={formData.question3}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Question 4:</label>
          <input
            className="text-black"
            type="text"
            name="question4"
            value={formData.question4}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Question 5:</label>
          <input
            className="text-black"
            type="text"
            name="question5"
            value={formData.question5}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Question 6:</label>
          <input
            className="text-black"
            type="text"
            name="question6"
            value={formData.question6}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Question 7:</label>
          <input
            className="text-black"
            type="text"
            name="question7"
            value={formData.question7}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Question 8:</label>
          <input
            className="text-black"
            type="text"
            name="question8"
            value={formData.question8}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Question 9:</label>
          <input
            className="text-black"
            type="text"
            name="question9"
            value={formData.question9}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Question 10:</label>
          <input
            className="text-black"
            type="text"
            name="question10"
            value={formData.question10}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Question 11:</label>
          <input
            className="text-black"
            type="text"
            name="question11"
            value={formData.question11}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Question 12:</label>
          <input
            className="text-black"
            type="text"
            name="question12"
            value={formData.question12}
            onChange={handleChange}
          />
        </div>
        <button className="bg-yellow-500 p-2 rounded-xl" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
