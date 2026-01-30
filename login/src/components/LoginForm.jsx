import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const LoginForm = ({ showPassword, setShowPassword }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    keepLoggedIn: false,
  });

  const handleChange = (e) => {
    const { id, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle login logic here
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      {/* Email Input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="name@email.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:border-transparent transition-all placeholder-gray-400 text-gray-800"
          required
        />
      </div>

      {/* Password Input */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>
        </div>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:border-transparent transition-all placeholder-gray-400 text-gray-800 pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Remember & Forgot Password */}
      <div className="flex items-center justify-between mt-1">
        <label className="flex items-center cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              id="keepLoggedIn"
              checked={formData.keepLoggedIn}
              onChange={handleChange}
              className="peer sr-only"
            />
            <div className="w-5 h-5 border-2 border-gray-300 rounded bg-white peer-checked:bg-[#2DD4BF] peer-checked:border-[#2DD4BF] transition-all flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white hidden peer-checked:inline-block pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
            Keep me logged in
          </span>
        </label>
        <a href="#" className="text-sm font-medium text-[#2DD4BF] hover:text-[#26b8a5] transition-colors">
          Forgot password?
        </a>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-[#2DD4BF] hover:bg-[#26b8a5] text-white font-semibold py-3.5 rounded-xl transition-all shadow-sm hover:shadow-md mt-2"
      >
        Log in
      </button>
    </form>
  );
};

export default LoginForm;