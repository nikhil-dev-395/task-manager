import React, { useState } from "react";
import { BsEye } from "react-icons/bs";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from "axios"; // Import axios if you choose to use it.

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [PasswordType, setPasswordType] = useState("password");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "https://example.com/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setSuccessMessage("Signup successful!");
        setFormData({ name: "", email: "", password: "" }); // Reset form
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setError(
        error.response?.data?.message || "Failed to signup. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const showPassword = () => setPasswordType("text");
  const hidePassword = () => setPasswordType("password");

  return (
    <div className="h-[calc(100vh-120px)] flex items-center justify-center bg-gray-100">
      <div className="border-2 border-slate-950 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={PasswordType}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="Enter your password"
                required
              />
              <div className="absolute top-3 right-3 bg-white">
                {PasswordType === "password" ? (
                  <BsEye onClick={showPassword} />
                ) : (
                  <FaRegEyeSlash onClick={hidePassword} />
                )}
              </div>
            </div>
          </div>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          {successMessage && (
            <p className="text-green-600 mb-4">{successMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-2 px-4 rounded-lg hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
