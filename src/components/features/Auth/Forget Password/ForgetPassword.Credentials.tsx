import {
  Box,
  Stack,
  Button,
  Typography,
  OutlinedInput,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router';

interface IEmail {
  email: string;
}

export default function ForgetPasswordCredentials({ email }: IEmail) {
  const [loading, setLoading] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [retypedPassword, setRetypedPassword] = useState<string>('');
  const [showRetypedPassword, setShowRetypedPassword] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // console.log(email);
    // console.log(password);
    // console.log(retypedPassword);

    await fetch('https://fsw-backend.fly.dev/api/v1/auth/user/password', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        rePassword: retypedPassword,
      }),
    })
      .then((response) => {
        setLoading(false);
        // console.log(email);
        // console.log(password);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.code === 200) {
          // localStorage.setItem("token", data.data.auth.jwt);
          alert('Change password success!');
          navigate('/auth/login');
        } else {
          alert('Change password failed. Please try again');
        }
      });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction="row" alignItems="center" spacing={3} mb={4}>
        <ArrowBackIosNewIcon
          onClick={() => navigate(-1)}
          sx={{
            '&:hover': { cursor: 'pointer' },
          }}
        />
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Reset Kata Sandi
        </Typography>
      </Stack>
      <form onSubmit={handleLogin}>
        {/* <form> */}
        {/* Kata Sandi Baru */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Kata Sandi Baru
        </Typography>
        <OutlinedInput
          placeholder="Kata Sandi"
          sx={{ width: '100%' }}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              {showPassword ? (
                <VisibilityOff
                  onClick={() => setShowPassword(false)}
                  sx={{ '&:hover': { cursor: 'pointer' } }}
                />
              ) : (
                <Visibility
                  onClick={() => setShowPassword(true)}
                  sx={{ '&:hover': { cursor: 'pointer' } }}
                />
              )}
            </InputAdornment>
          }
          onChange={(e) => setPassword(e.target.value)}
        ></OutlinedInput>

        {/* Konfirmasi Kata Sandi */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }} mt={1}>
          Konfirmasi Kata Sandi
        </Typography>
        <OutlinedInput
          placeholder="Kata Sandi"
          sx={{ width: '100%' }}
          type={showRetypedPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              {showRetypedPassword ? (
                <VisibilityOff
                  onClick={() => setShowRetypedPassword(false)}
                  sx={{ '&:hover': { cursor: 'pointer' } }}
                />
              ) : (
                <Visibility
                  onClick={() => setShowRetypedPassword(true)}
                  sx={{ '&:hover': { cursor: 'pointer' } }}
                />
              )}
            </InputAdornment>
          }
          onChange={(e) => setRetypedPassword(e.target.value)}
        ></OutlinedInput>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundImage: `linear-gradient(90deg, #7B52AB, #3A42FF)`,
            marginBlock: '1rem',
            width: '100%',
          }}
        >
          {/* Simpan */}
          {loading ? <CircularProgress sx={{ color: 'white' }} /> : 'Simpan'}
        </Button>
      </form>
    </Box>
  );
}
