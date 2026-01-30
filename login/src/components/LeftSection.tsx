import React from 'react';

const LeftSection: React.FC = () => {
  return (
    <div className="hidden lg:flex relative w-full lg:w-1/2 h-full bg-[#EAEBF3] overflow-hidden flex-col items-center justify-center shrink-0">
      {/* Background Shapes */}
      {/* Top Pink Circle */}
      <div className="absolute -top-20 left-1/4 w-80 h-80 bg-[#FFB6C1] rounded-full mix-blend-multiply opacity-100 z-10"></div>

      {/* Top Right Dark Blue Circle */}
      <div className="absolute -top-10 -right-20 w-96 h-96 bg-[#0B104A] rounded-full z-0"></div>

      {/* Bottom Left Teal Gradient Circle */}
      <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#006970] to-[#2DD4BF] rounded-full z-10"></div>

      {/* Bottom Right Small Elements */}
      <div className="absolute bottom-0 right-20 w-16 h-16 bg-[#0891B2] rounded-full z-10 translate-y-1/2"></div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#FFC3CB] rounded-full z-0"></div>

      {/* Logo Section */}
      <div className="relative z-20 flex flex-col items-center gap-6">
        {/* Custom Logo Graphic */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="relative w-full h-full rotate-45 transform translate-y-2 -translate-x-2">
            {/* Top Bar */}
            <div className="absolute top-0 right-0 w-[55%] h-5 bg-[#0A0E2E] rounded-full"></div>
            {/* Middle Bar */}
            <div className="absolute top-8 right-0 w-[85%] h-5 bg-[#0A0E2E] rounded-full"></div>
            {/* Bottom Bar */}
            <div className="absolute top-16 right-0 w-[55%] h-5 bg-[#0A0E2E] rounded-full"></div>
          </div>
          {/* Teal Dot */}
          <div className="absolute top-[42%] right-[-10px] w-5 h-5 bg-[#2DD4BF] rounded-full"></div>
        </div>

        {/* Logo Text */}
        <h1 className="text-[#0A0E2E] text-3xl font-bold tracking-wide">fintechdb</h1>
      </div>
    </div>
  );
};

export default LeftSection;
