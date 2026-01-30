import React from 'react';
import { LeftSection, RightSection } from '../components';

const LoginPage = ({ onNavigateToSignUp }) => {
  return (
    <div className="h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-white">
      <LeftSection />
      <RightSection onNavigateToSignUp={onNavigateToSignUp} />
    </div>
  );
};

export default LoginPage;