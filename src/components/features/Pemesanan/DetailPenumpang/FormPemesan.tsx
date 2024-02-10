import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Orderer } from '../../../../types/Orderer';
import theme from '../../../../config/theme';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { submitPemesanPopup } from '../../../../redux/slices/Booking';

export default function FormPemesan() {
  const currentOrderer = useAppSelector(
    (state) => state.booking.booking.orderer
  );
  const dispatch = useAppDispatch();

  const [orderer, setOrderer] = useState<Orderer>(currentOrderer);

  return (
    <Stack p={2}>
      <Typography variant="caption">
        Data ini akan digunakan untuk pengiriman E-Tiket
      </Typography>
      <FormControl>
        <Typography fontWeight="bold">Nama Lengkap</Typography>
        <TextField
          id="pemesan-name-input"
          variant="outlined"
          value={orderer.name}
          onChange={(event) => {
            const newOrderer = { ...orderer };
            newOrderer.name = event.target.value;
            setOrderer(newOrderer);
          }}
        />
        <Typography variant="caption" mb={1}>
          *Sesuai dengan KTP
        </Typography>

        <RadioGroup
          row
          sx={{
            width: '100%',
            justifyContent: 'space-between',
            mb: 1,
          }}
          value={orderer.title}
          onChange={(event) => {
            const newOrderer = { ...orderer };
            newOrderer.title = event.target.value;
            setOrderer(newOrderer);
          }}
        >
          <FormControlLabel value="Mr" control={<Radio />} label="Mr" />
          <FormControlLabel value="Ms" control={<Radio />} label="Ms" />
          <FormControlLabel value="Mrs" control={<Radio />} label="Mrs" />
        </RadioGroup>

        <Typography fontWeight="bold">Nomor Telepon</Typography>
        <TextField
          id="pemesan-phone-input"
          variant="outlined"
          value={orderer.phone}
          onChange={(event) => {
            const newOrderer = { ...orderer };
            newOrderer.name = event.target.value;
            setOrderer(newOrderer);
          }}
        />
        <Typography variant="caption" mb={1}>
          *Nomor Telepon Aktif
        </Typography>

        <Typography fontWeight="bold">Alamat Email</Typography>
        <TextField
          id="pemesan-email-input"
          variant="outlined"
          value={orderer.email}
          onChange={(event) => {
            const newOrderer = { ...orderer };
            newOrderer.name = event.target.value;
            setOrderer(newOrderer);
          }}
        />
        <Typography variant="caption" mb={3}>
          E-Ticket akan dikirimkan ke alamat Email ini
        </Typography>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={() => dispatch(submitPemesanPopup(orderer))}
          sx={{
            background: theme.palette.gradients?.horizontal,
            width: '100%',
          }}
        >
          Simpan
        </Button>
      </FormControl>
    </Stack>
  );
}
