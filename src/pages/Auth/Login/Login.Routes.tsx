import { Routes, Route } from 'react-router-dom';
import CheckEmail from './Login.CheckEmail';
import LoginCredentials from './Login.Credentials';
import { useState } from 'react';

export default function LoginRoute() {
  const [email, setEmail] = useState('');
  return (
    <>
      <Routes>
        <Route path="/" element={<CheckEmail setEmail={setEmail} />} />
        <Route
          path="/credentials/"
          element={<LoginCredentials email={email} />}
        />
      </Routes>
    </>
  );
}
