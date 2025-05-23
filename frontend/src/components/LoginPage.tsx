import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const LoginPage: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        {showLogin ? <LoginForm onSubmit={() => {}} onInputChange={() => {}} /> : <RegistrationForm onSubmit={() => {}} onInputChange={() => {}} />}
        <button
          onClick={() => setShowLogin(!showLogin)}
          className="mt-4 w-full text-center text-sm text-blue-600 hover:text-blue-800 focus:outline-none"
        >
          {showLogin ? 'Need to register? Create an account' : 'Already have an account? Log in'}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
