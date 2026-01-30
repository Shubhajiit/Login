import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

interface OTPVerificationProps {
  isVisible: boolean;
  onClose: () => void;
  onVerify: (otp: string) => void;
  email: string;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({ isVisible, onClose, onVerify, email }) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (isVisible && inputRefs.current[0]) {
      inputRefs.current[0]?.focus();
    }
  }, [isVisible]);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'Enter') {
      handleVerify();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const newOtp = [...otp];
    
    for (let i = 0; i < pastedData.length && i < 6; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);
    
    // Focus the next empty input or the last one
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleVerify = async () => {
    const otpString = otp.join('');
    if (otpString.length === 6) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        onVerify(otpString);
        setIsLoading(false);
      }, 1500);
    }
  };

  const handleResend = () => {
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
    // Simulate resend OTP
    console.log('OTP resent to:', email);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* OTP Modal with Glassmorphism */}
      <div className="relative w-full max-w-xs sm:max-w-md" onClick={(e) => e.stopPropagation()}>
        {/* Glassmorphism Container */}
        <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Close verification modal"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-[#2DD4BF]/20 to-[#0891B2]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#2DD4BF]/30">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Verify Your Email</h2>
            <p className="text-xs sm:text-sm text-gray-600 px-2">
              We've sent a 6-digit code to<br />
              <span className="font-semibold text-gray-800 break-all">{email}</span>
            </p>
          </div>

          {/* OTP Input */}
          <div className="mb-5 sm:mb-6">
            <div className="flex gap-2 sm:gap-3 justify-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg sm:text-xl font-bold border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                  maxLength={1}
                  disabled={isLoading}
                />
              ))}
            </div>
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={otp.join('').length !== 6 || isLoading}
            className="w-full bg-[#2DD4BF] hover:bg-[#26b8a5] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 sm:py-3.5 text-sm sm:text-base rounded-xl transition-all shadow-sm hover:shadow-md mb-4"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span className="text-sm sm:text-base">Verifying...</span>
              </div>
            ) : (
              'Verify OTP'
            )}
          </button>

          {/* Resend Section */}
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-600 mb-2">
              Didn't receive the code?
            </p>
            <button
              onClick={handleResend}
              disabled={isLoading}
              className="text-xs sm:text-sm font-medium text-[#2DD4BF] hover:text-[#26b8a5] transition-colors disabled:opacity-50"
            >
              Resend OTP
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#2DD4BF]/10 to-[#0891B2]/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-[#FFB6C1]/10 to-[#2DD4BF]/10 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default OTPVerification;