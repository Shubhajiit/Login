import React from 'react';
import { LeftSection } from '../components';
import RightSectionSignUp from '../components/RightSectionSignUp';

interface SignUpPageProps {
  onNavigateToLogin?: () => void;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ onNavigateToLogin }) => {
  return (
    <div className="h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-white">
      <LeftSection />
      <RightSectionSignUp onNavigateToLogin={onNavigateToLogin} />
    </div>
  );
};

export default SignUpPage;