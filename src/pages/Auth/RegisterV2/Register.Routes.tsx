import RegisterIndex from './Register.Index';
import RegisterCredentials from './Register.Credentials';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

export default function RegisterRoutes() {
  const [email, setEmail] = useState('');

  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterIndex setEmail={setEmail} />} />
        <Route
          path="/credentials/"
          element={<RegisterCredentials email={email} />}
        />
      </Routes>
    </>
  );
}
