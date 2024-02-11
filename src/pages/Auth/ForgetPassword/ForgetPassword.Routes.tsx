import { Routes, Route } from 'react-router-dom';
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import ForgetPasswordMain from '../../../components/features/Auth/Forget Password/ForgetPassword.Main';
import ForgetPasswordCredentials from '../../../components/features/Auth/Forget Password/ForgetPassword.Credentials';

import { useState } from 'react';

export default function ForgetPasswordRoutes() {
  const [email, setEmail] = useState('');
  // const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<ForgetPasswordMain setEmail={setEmail} />} />
        <Route
          path="/credentials/"
          element={<ForgetPasswordCredentials email={email} />}
        />
      </Routes>
    </>
  );
}
