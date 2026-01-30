import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import OTPVerification from './OTPVerification.jsx';

const SignUpForm = ({ showPassword, setShowPassword }) => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    password: '',
    agreeToTerms: false,
  });
  const [showOTP, setShowOTP] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for signup
    setTimeout(() => {
      console.log('Sign up form submitted:', formData);
      setIsSubmitting(false);
      setShowOTP(true);
    }, 1500);
  };

  const handleOTPVerify = (otp) => {
    console.log('OTP verified:', otp);
    setShowOTP(false);
    // Handle successful verification (redirect, show success message, etc.)
    alert('Account verified successfully!');
  };

  const handleOTPClose = () => {
    setShowOTP(false);
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

      {/* Phone Number Input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
          Phone number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder="+1 (555) 123-4567"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:border-transparent transition-all placeholder-gray-400 text-gray-800"
          required
        />
      </div>

      {/* Password Input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:border-transparent transition-all placeholder-gray-400 text-gray-800 pr-10"
            required
            minLength={8}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long</p>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start gap-3 mt-1">
        <label className="flex items-start cursor-pointer group">
          <div className="relative mt-0.5">
            <input
              type="checkbox"
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="peer sr-only"
            />
            <div className={`w-5 h-5 border-2 rounded transition-all duration-200 flex items-center justify-center ${
              formData.agreeToTerms 
                ? 'bg-[#2DD4BF] border-[#2DD4BF] scale-110' 
                : 'border-gray-300 bg-white hover:border-[#2DD4BF]/50'
            }`}>
              <svg
                className={`w-3.5 h-3.5 text-white transition-all duration-300 ${
                  formData.agreeToTerms 
                    ? 'opacity-100 scale-100 rotate-0' 
                    : 'opacity-0 scale-0 -rotate-90'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors leading-5">
            I agree to the{' '}
            <a href="#" className="text-[#2DD4BF] hover:text-[#26b8a5] transition-colors font-medium">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-[#2DD4BF] hover:text-[#26b8a5] transition-colors font-medium">
              Privacy Policy
            </a>
          </span>
        </label>
      </div>

      {/* Sign Up Button */}
      <button
        type="submit"
        disabled={!formData.agreeToTerms || isSubmitting}
        className="w-full bg-[#2DD4BF] hover:bg-[#26b8a5] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all shadow-sm hover:shadow-md mt-2"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Creating account...
          </div>
        ) : (
          'Sign up'
        )}
      </button>

      {/* OTP Verification Modal */}
      <OTPVerification 
        isVisible={showOTP}
        onClose={handleOTPClose}
        onVerify={handleOTPVerify}
        email={formData.email}
      />
    </form>
  );
};

export default SignUpForm;