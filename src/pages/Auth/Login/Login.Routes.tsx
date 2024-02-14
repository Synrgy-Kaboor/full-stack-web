import { Routes, Route } from 'react-router-dom';
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import CheckEmail from './Login.CheckEmail';
import LoginCredentials from './Login.Credentials';
import { useState } from 'react';

export default function LoginRoutes() {
  const [email, setEmail] = useState('');
  console.log(email);
  // const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<CheckEmail setEmail={setEmail} />} />
        {/* <Route
          path="/"
          element={
            <>
              <h1>Login</h1>
              <Button
                variant="contained"
                onClick={() => navigate("/auth/login/credentials")}
              >
                Login
              </Button>
            </>
          }
        /> */}
        {/* <Route path="/credentials/" element={<h1>Credentials</h1>} /> */}
        <Route
          path="/credentials/"
          element={<LoginCredentials email={email} />}
        />
      </Routes>
    </>
  );
}
