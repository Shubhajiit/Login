import React, { useState } from 'react';
import SignUpForm from './SignUpForm';

interface RightSectionSignUpProps {
  onNavigateToLogin?: () => void;
}

const RightSectionSignUp: React.FC<RightSectionSignUpProps> = ({ onNavigateToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-start lg:justify-center p-6 sm:p-8 lg:p-24 overflow-y-auto bg-white">
      <div className="w-full max-w-sm flex flex-col gap-6 sm:gap-8 pt-8 lg:pt-0">
        {/* Mobile Logo - Only visible on small screens, moved down for sign up */}
        <div className="flex lg:hidden justify-center mb-6 mt-4">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign up</h2>
          <p className="text-sm text-gray-600">Create your account to get started</p>
        </div>

        {/* Form */}
        <SignUpForm showPassword={showPassword} setShowPassword={setShowPassword} />

        {/* Bottom Login Link */}
        <div className="text-center mt-2">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <button 
              onClick={onNavigateToLogin}
              className="text-[#2DD4BF] font-medium hover:text-[#26b8a5] transition-colors cursor-pointer"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSectionSignUp;