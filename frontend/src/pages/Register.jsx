import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const trainings = [
  "Sand Management",
  "Artificial Lift Systems",
  "Completions & Workover Operations",
];

export default function Register() {
  const location = useLocation();

  const preSelectedTraining =
    location.state?.selectedTraining || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    training: preSelectedTraining,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    alert("Registration submitted successfully!");
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-28">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-extrabold text-[#0F4C3A] mb-6">
          Training Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border rounded-lg"
            value={formData.name}
            onChange={handleChange}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 border rounded-lg"
            value={formData.email}
            onChange={handleChange}
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 border rounded-lg"
            value={formData.phone}
            onChange={handleChange}
          />

          {/* Training Dropdown */}
          <select
            name="training"
            required
            className="w-full px-4 py-3 border rounded-lg"
            value={formData.training}
            onChange={handleChange}
          >
            <option value="">Select Training</option>
            {trainings.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#0F4C3A] text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </main>
  );
}
