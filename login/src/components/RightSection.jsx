import React, { useState } from 'react';
import LoginForm from './LoginForm.jsx';

const RightSection = ({ onNavigateToSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center p-6 sm:p-8 lg:p-24 overflow-y-auto bg-white">
      <div className="w-full max-w-sm flex flex-col gap-6 sm:gap-8">
        {/* Mobile Logo - Only visible on small screens */}
        <div className="flex lg:hidden justify-center mb-4">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="relative w-full h-full rotate-45 transform translate-y-1 -translate-x-1">
              {/* Top Bar */}
              <div className="absolute top-0 right-0 w-[55%] h-3 bg-[#0A0E2E] rounded-full"></div>
              {/* Middle Bar */}
              <div className="absolute top-5 right-0 w-[85%] h-3 bg-[#0A0E2E] rounded-full"></div>
              {/* Bottom Bar */}
              <div className="absolute top-10 right-0 w-[55%] h-3 bg-[#0A0E2E] rounded-full"></div>
            </div>
            {/* Teal Dot */}
            <div className="absolute top-[42%] right-[-6px] w-3 h-3 bg-[#2DD4BF] rounded-full"></div>
          </div>
        </div>
        
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Log in</h2>
        </div>

        {/* Form */}
        <LoginForm showPassword={showPassword} setShowPassword={setShowPassword} />

        {/* Removed social login section for a cleaner mobile view */}

        {/* Bottom Sign Up */}
        <div className="text-center mt-2">
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <button 
              onClick={onNavigateToSignUp}
              className="text-[#2DD4BF] font-medium hover:text-[#26b8a5] transition-colors cursor-pointer"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSection;