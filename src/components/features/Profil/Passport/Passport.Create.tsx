import {
  Stack,
  Typography,
  OutlinedInput,
  Button,
  CircularProgress,
} from '@mui/material';

import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { DateType } from "@material-ui/x-date-pickers/DateType";
import { Dayjs } from 'dayjs';
// import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

import theme from '../../../../config/theme';
import { useNavigate } from 'react-router-dom';
import { useState, FormEvent } from 'react';
// import { Navigate } from "react-router-dom";

export default function CreatePassport() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState<string>('');
  const [passportNumber, setPassportNumber] = useState<string>('');
  const [passportExpiredDate, setPassportExpiredDate] = useState<Dayjs | null>(
    null
  );
  const [country, setCountry] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    fetch('https://fsw-backend.fly.dev/api/v1/user/passport', {
      method: 'POST',
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
        if (data.code !== 201) {
          alert('Penambahan Passport Gagal. Coba lagi');
        } else {
          alert('Penambahan passport berhasil');
          navigate('/profil/passport');
        }
      });
    // console.log(fullname);
    // console.log(passportNumber);
    // console.log(passportExpiredDate);
    // console.log(country);
    // navigate(-1);
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
          onChange={(e) => setPassportNumber(e.target.value)}
        />

        <Typography mt={2} gutterBottom>
          Tanggal Kadaluwarsa
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem>
            <DesktopDatePicker
              sx={{ width: '100%' }}
              onChange={(e: Dayjs | null) => {
                // console.log(e.$d);
                setPassportExpiredDate(e);
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
              'Simpan'
            )}
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
