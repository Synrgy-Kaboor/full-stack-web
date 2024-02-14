import {
  Stack,
  Typography,
  OutlinedInput,
  Button,
  CircularProgress,
} from '@mui/material';

import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import theme from '../../../../config/theme';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, FormEvent, useEffect } from 'react';

export default function UpdatePassport() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState<string>('');
  const [passportNumber, setPassportNumber] = useState<string>('');
  const [passportExpiredDate, setPassportExpiredDate] = useState<Date>(
    new Date()
  );
  const [country, setCountry] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const params = useParams();

  useEffect(() => {
    fetch(`https://fsw-backend.fly.dev/api/v1/user/passport/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data.passport);
        setFullname(data.data.passport['full_name']);
        setPassportNumber(data.data.passport['passport_number']);
        setPassportExpiredDate(data.data.passport['expired_date']);
        console.log(typeof new Date(data.data.passport['expired_date']));
        console.log(new Date(data.data.passport['expired_date']));
        setCountry(data.data.passport['nation']);
      });
  }, [params.id]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    fetch(`https://fsw-backend.fly.dev/api/v1/user/passport/${params.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        passportNumber: passportNumber,
        fullName: fullname,
        expiredDate: passportExpiredDate,
        nation: country,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        console.log(data);
        if (data.code !== 200) {
          alert('Update Passport Gagal. Coba lagi');
        } else {
          alert('Update passport berhasil');
          navigate('/profil/passport');
        }
      });
  }

  return (
    <Stack
      p={4}
      bgcolor={'white'}
      borderRadius={2}
      maxWidth={'880px'}
      sx={{ width: '100%', border: '1px solid #C2C2C2' }}
    >
      <Typography variant="h6" fontWeight={'bold'}>
        Paspor
      </Typography>

      <Typography mt={2}>Detail Paspor</Typography>
      <Typography color={'gray'} variant="subtitle2">
        Isi semua kolom dengan data paspor yang berlaku ya
      </Typography>

      <form onSubmit={handleSubmit}>
        <Typography mt={2} gutterBottom>
          Nama Lengkap
        </Typography>
        <OutlinedInput
          size="medium"
          placeholder="Masukkan Nama Lengkap"
          fullWidth
          required
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />

        <Typography mt={2} gutterBottom>
          Nomor Paspor
        </Typography>
        <OutlinedInput
          size="medium"
          placeholder="Masukkan nomor paspor"
          fullWidth
          required
          value={passportNumber}
          onChange={(e) => setPassportNumber(e.target.value)}
        />

        <Typography mt={2} gutterBottom>
          Tanggal Kadaluwarsa
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem>
            <DesktopDatePicker
              sx={{ width: '100%' }}
              value={dayjs(passportExpiredDate)}
              onChange={(e) => {
                console.log(e.$d);
                setPassportExpiredDate(new Date(e.$d));
              }}
            />
          </DemoItem>
        </LocalizationProvider>

        <Typography mt={2} gutterBottom>
          Negara yang Menerbitkan
        </Typography>
        <OutlinedInput
          size="medium"
          placeholder="Masukkan Negara"
          fullWidth
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <Stack alignItems={'end'} sx={{ width: '100%' }} my={2}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: '20%',
              background: theme.palette.gradients?.horizontal,
            }}
          >
            {/* Simpan */}
            {isLoading ? (
              <CircularProgress sx={{ color: 'white' }} />
            ) : (
              'Update'
            )}
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
