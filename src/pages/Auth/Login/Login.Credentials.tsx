import {
  Box,
  Link,
  Stack,
  Button,
  TextField,
  Typography,
  OutlinedInput,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../../redux/hooks';
import { setToken } from '../../../redux/slices/Auth';

interface IEmailProps {
  email: string;
}

export default function LoginCredentials({ email }: IEmailProps) {
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await fetch('https://kaboor-api-dev.up.railway.app/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        setLoading(false);
        return response.json();
      })
      .then((data) => {
        if (data.code === 200) {
          localStorage.setItem('token', data.data.auth.jwt);
          dispatch(setToken(data.data.auth.jwt));
          navigate('/');
        } else {
          alert('Login Failed. Please try again');
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
          Masukkan Sandi
        </Typography>
      </Stack>
      <form onSubmit={handleLogin}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Email
        </Typography>
        <TextField
          hiddenLabel
          variant="outlined"
          label={email}
          sx={{ width: '100%' }}
          disabled
        ></TextField>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }} mt={1}>
          Password
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
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundImage: `linear-gradient(90deg, #7B52AB, #3A42FF)`,
            marginBlock: '1rem',
            width: '100%',
          }}
        >
          {loading ? <CircularProgress sx={{ color: 'white' }} /> : 'Masuk'}
        </Button>
      </form>

      <Typography textAlign="center" mt={3}>
        Dengan Log In kamu menyetujui{' '}
        <Link underline="none" color="primary.main">
          Syarat, Ketentuan, dan Kebijakan
        </Link>{' '}
        Privasi Kaboor
      </Typography>
    </Box>
  );
}
