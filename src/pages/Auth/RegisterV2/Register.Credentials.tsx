import {
  Box,
  Link,
  Stack,
  Button,
  TextField,
  Typography,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
  CircularProgress,
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import GlobalModals from '../../../components/shared/Auth/modals';
import OtpModals from '../../../components/shared/Auth/otpModals';

import { useNavigate } from 'react-router-dom';
import { useState, FormEvent } from 'react';

interface IEmailProps {
  email: string;
}

export default function RegisterCredentials({ email }: IEmailProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [fullname, setFullname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  console.log(password);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      phoneNumber: '+62' + phoneNumber,
      email: email,
      fullName: fullname,
      password: password,
    };

    await fetch(
      'https://kaboor-api-dev.up.railway.app/api/v1/auth/register/user',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    ).then(async () => {
      setLoading(false);
      await fetch(
        'https://kaboor-api-dev.up.railway.app/api/v1/auth/otp/verify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }),
        }
      ).then(() => {
        alert('Register berhasil! Silakan Login menggunakan akunmu.');
        setOpen(true);
      });
    });

    // await fetch(
    //   "https://kaboor-api-dev.up.railway.app/api/v1/auth/otp/resend",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email: email }),
    //   }
    // );
    // const sendOtpStatus = await sendtOtpResponse.json();
    // console.log(sendOtpStatus);
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
          Isi Detail Akunmu
        </Typography>
      </Stack>
      <form onSubmit={handleRegister}>
        {/* Nomor Ponsel */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Nomor Ponsel
        </Typography>
        <OutlinedInput
          sx={{ width: '100%' }}
          onChange={(e) => setPhoneNumber(e.target.value)}
          startAdornment={<InputAdornment position="start">+62</InputAdornment>}
        />

        {/* Email */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }} mt={1}>
          Email
        </Typography>
        <TextField
          hiddenLabel
          variant="outlined"
          label={email}
          sx={{ width: '100%', marginBlockEnd: '10px' }}
          disabled
        ></TextField>

        {/* Nama Lengkap */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Nama Lengkap
        </Typography>
        <OutlinedInput
          sx={{ width: '100%' }}
          placeholder="Masukkan nama lengkap"
          onChange={(e) => setFullname(e.target.value)}
        />
        <FormHelperText>Sesuai di KTP/SIM/Paspor</FormHelperText>

        {/* Password */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }} mt={1}>
          Sandi
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
        />
        <FormHelperText>
          Min. 7 Karakter berupa kombinasi angka, huruf besar, dan huruf kecil
        </FormHelperText>

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundImage: `linear-gradient(90deg, #7B52AB, #3A42FF)`,
            marginBlock: '1rem',
            width: '100%',
          }}
        >
          {/* Buat Akun */}
          {loading ? <CircularProgress sx={{ color: 'white' }} /> : 'Buat Akun'}
        </Button>
      </form>

      <Typography textAlign="center" mt={3}>
        Dengan Log In kamu menyetujui{' '}
        <Link underline="none" color="primary.main">
          Syarat, Ketentuan, dan Kebijakan
        </Link>{' '}
        Privasi Kaboor
      </Typography>

      <GlobalModals open={open} onClose={() => setOpen(false)}>
        <OtpModals email={email} setOpen={setOpen} path={'/auth/login'} />
      </GlobalModals>
    </Box>
  );
}
