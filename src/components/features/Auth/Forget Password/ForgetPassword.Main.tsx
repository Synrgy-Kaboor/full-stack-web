import {
  Box,
  Stack,
  Dialog,
  Button,
  Typography,
  DialogTitle,
  OutlinedInput,
  DialogContent,
  CircularProgress,
  FormHelperText,
} from '@mui/material';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { useNavigate } from 'react-router-dom';
import { useState, FormEvent } from 'react';

import GlobalModals from '../../../shared/Auth/modals';
import OtpModals from '../../../shared/Auth/otpModals';

interface SetEmailProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export default function ForgetPasswordMain({ setEmail }: SetEmailProps) {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [emailStatus, setEmailStatus] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await fetch(
      'https://kaboor-api-dev.up.railway.app/api/v1/auth/password/forget',
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
      .then(async (data) => {
        console.log(data);
        if (data.code !== 200) {
          setEmailStatus(false);
          setEmail(inputEmail);
          await fetch(
            'https://kaboor-api-dev.up.railway.app/api/v1/auth/otp/verify',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: inputEmail }),
            }
          ).then(() => {
            setOpen(true);
          });
          // navigate("credentials");
        } else {
          setEmailStatus(true);
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
          Masukkan Email
        </Typography>
      </Stack>
      <form onSubmit={handleSubmit}>
        <FormHelperText>
          Jangan khawatir. Tuliskan email untuk membuat kata sandi baru.
        </FormHelperText>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Email
        </Typography>
        <OutlinedInput
          placeholder="Masukkan Email"
          onChange={(e) => setInputEmail(e.target.value)}
          sx={{
            width: '100%',
            marginBlockEnd: '.5rem',
            marginBlockStart: '.3rem',
          }}
          required
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
          {loading ? <CircularProgress sx={{ color: 'white' }} /> : 'Kirim'}
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
              Email ini belum terdaftar
            </Typography>
            <Typography sx={{ color: 'gray' }} textAlign="center">
              Untuk menggunakan email ini, silahkan lakukan daftar akun terlebih
              dulu ya
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
                onClick={() => navigate('/auth/register')}
              >
                Daftar Akun
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>

      <GlobalModals open={open} onClose={() => setOpen(false)}>
        <OtpModals email={inputEmail} setOpen={setOpen} path={'credentials'} />
      </GlobalModals>
    </Box>
  );
}
