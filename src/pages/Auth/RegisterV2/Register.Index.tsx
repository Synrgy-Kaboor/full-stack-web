import {
  Box,
  Link,
  Stack,
  Dialog,
  Button,
  TextField,
  Typography,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from '@mui/material';

import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface RegisterProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export default function RegisterIndex({ setEmail }: RegisterProps) {
  const [inputEmail, setInputEmail] = useState<string>('');
  const [emailStatus, setEmailStatus] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await fetch(
      'https://kaboor-api-dev.up.railway.app/api/v1/auth/check/email',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputEmail),
      }
    )
      .then((response) => {
        setLoading(false);
        return response.json();
      })
      .then((data) => {
        if (data.code !== 400) {
          setEmailStatus(false);
          setEmail(inputEmail);
          navigate('credentials');
        } else {
          setEmailStatus(true);
        }
      });
  };
  return (
    <Box sx={{ width: '100%' }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Buat Akun
        </Typography>
        <TextField
          variant="outlined"
          label="Masukkan Email"
          onChange={(e) => setInputEmail(e.target.value)}
          sx={{ width: '100%', marginBlock: '2rem' }}
          required
        ></TextField>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundImage: `linear-gradient(90deg, #7B52AB, #3A42FF)`,
            width: '100%',
          }}
        >
          {loading ? <CircularProgress sx={{ color: 'white' }} /> : 'Buat Akun'}
        </Button>
      </form>
      <Dialog open={emailStatus}>
        <DialogTitle>
          <Stack direction="row" alignItems="center" spacing={2}>
            <ArrowBackIosNewIcon
              onClick={() => setEmailStatus(false)}
              sx={{ '&:hover': { cursor: 'pointer' } }}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Kembali
            </Typography>
          </Stack>
        </DialogTitle>
        <DialogContent dividers>
          <Stack spacing={1}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold' }}
              textAlign="center"
            >
              Email ini sudah terdaftar untuk Login
            </Typography>
            <Typography sx={{ color: 'gray' }} textAlign="center">
              Untuk masuk ke akun, silahkan Log in menggunakan email ini menuju
              ke halaman Log in
            </Typography>
            <Stack spacing={2} pt={2}>
              <Button
                variant="outlined"
                onClick={() => setEmailStatus(false)}
                sx={{
                  border: '2px solid linear-gradient(90deg, #7B52AB, #3A42FF)',
                }}
              >
                Nanti Saja
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundImage: `linear-gradient(90deg, #7B52AB, #3A42FF)`,
                }}
                onClick={() => navigate('/auth/login')}
              >
                Log In
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>

      <Typography textAlign="center" my={5}>
        Dengan Log In kamu menyetujui{' '}
        <Link underline="none" color="primary.main">
          Syarat, Ketentuan, dan Kebijakan
        </Link>{' '}
        Privasi Kaboor
      </Typography>

      <Typography textAlign="center">
        Udah punya akun?{' '}
        <Link
          href="/auth/login"
          underline="none"
          sx={{ color: 'primary.main' }}
        >
          Log in aja!
        </Link>
      </Typography>
    </Box>
  );
}
