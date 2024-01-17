import { Routes, Route } from 'react-router-dom';
import Register from './auth.register';
import FillRegister from './auth.fillRegister';
import { useState } from 'react';

export default function RegisterRoute() {
  const [email, setEmail] = useState('');
  return (
    <>
      <Routes>
        <Route path="/" element={<Register setEmail={setEmail} />} />
        <Route path="/detail-akun/" element={<FillRegister email={email} />} />
      </Routes>
    </>
  );
}
