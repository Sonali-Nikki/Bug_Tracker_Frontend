import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

const submit = async () => {
  if (!form.name || !form.email || !form.password) {
    alert("All fields are required");
    return;
  }
  try {
    await axios.post("http://localhost:5000/api/auth/register", form);
    alert("Registered Successfully");
    navigate("/login");
  } catch (err) {
    alert(err.response?.data?.message || "Registration failed");
  }
};


  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-80 p-6 shadow-lg rounded">
        <h2 className="text-xl font-bold mb-4">Register</h2>

        <input
          name="name"
          placeholder="Name"
          className="input"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="input"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input"
          onChange={handleChange}
        />

        <button
          onClick={submit}
          className="bg-blue-600 text-white w-full mt-4 py-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
}
