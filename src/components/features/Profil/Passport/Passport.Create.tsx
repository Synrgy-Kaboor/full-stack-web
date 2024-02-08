import { Stack, Typography, OutlinedInput, Button } from '@mui/material';

import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import theme from '../../../../config/theme';
import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';

export default function CreatePassport() {
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <Stack
      p={4}
      bgcolor={'white'}
      borderRadius={2}
      sx={{ border: '1px solid #C2C2C2' }}
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
        />

        <Typography mt={2} gutterBottom>
          Nomor Paspor
        </Typography>
        <OutlinedInput
          size="medium"
          placeholder="Masukkan nomor paspor"
          fullWidth
        />

        <Typography mt={2} gutterBottom>
          Tanggal Kadaluwarsa
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem>
            <DesktopDatePicker sx={{ width: '100%' }} />
          </DemoItem>
        </LocalizationProvider>

        <Typography mt={2} gutterBottom>
          Negara yang Menerbitkan
        </Typography>
        <OutlinedInput size="medium" placeholder="Masukkan Negara" fullWidth />

        <Stack alignItems={'end'} sx={{ width: '100%' }} my={2}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: '20%',
              background: theme.palette.gradients?.horizontal,
            }}
          >
            Simpan
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
