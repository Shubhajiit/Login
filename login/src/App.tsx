import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'login' | 'signup'>('login');

  // Simple navigation function for demo purposes
  const navigateToSignUp = () => setCurrentPage('signup');
  const navigateToLogin = () => setCurrentPage('login');

  if (currentPage === 'signup') {
    return <SignUpPage onNavigateToLogin={navigateToLogin} />;
  }

  return <LoginPage onNavigateToSignUp={navigateToSignUp} />;
}

export default App;


