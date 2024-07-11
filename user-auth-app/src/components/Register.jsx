import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const baseUrl = "https://tanishqmylove-1.onrender.com";
  // const baseUrl = "http://localhost:8080";
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    about: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    console.log("FormData:", formData);
setLoading(true)
    try {
      const response = await axios.post(baseUrl + "/user/signup", formData);
      console.log("response : ", response);
      if (response.data.success) {
        setLoading(false)
        navigate('/login');
      } else {
        setError('Registration failed: ' + response.data.msg);
        setLoading(false)
      }
    } catch (err) {
      setError('Error during registration: ' + err.message);
      setLoading(false)
    }
  };

  return (
    <div className='login_bg'>
      <form className="bg-transparent border-2 border-red-600 mx-10 py-10 px-10 rounded-sm space-y-4 font-[sans-serif] text-[#333] max-w-md mx-auto  py-10">
        <h1 className='text-3xl center' style={{display: "flex", justifyContent: "center", color: "yellow"}}><b>Sign Up</b></h1>
        <div className="relative flex items-center">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            name="mobile"
            placeholder="Enter Mobile Number"
            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
            onChange={handleChange}
            value={formData.mobile}
          />
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
            onChange={handleChange}
            value={formData.address}
          />
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            name="about"
            placeholder="Enter About"
            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
            onChange={handleChange}
            value={formData.about}
          />
        </div>
        <div className="relative flex items-center">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="relative flex items-center">
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="w-4 h-4 shrink-0" />
          <label className="text-sm ml-3">Remember me</label>
        </div>
        <button
          type="button"
          className="px-6 py-2.5 w-full !mt-8 text-sm bg-[#007bff] hover:bg-blue-600 text-white rounded active:bg-[#006bff]"
          onClick={handleRegister}
        >
        {loading ? "Please wait..." : "submit"}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
};
