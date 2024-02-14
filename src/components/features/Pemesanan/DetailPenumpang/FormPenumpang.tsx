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
import { Passenger } from '../../../../types/Passenger';
import { useState } from 'react';
import theme from '../../../../config/theme';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { submitPenumpangPopup } from '../../../../redux/slices/Booking';

export default function FormPenumpang() {
  const passengers = useAppSelector((state) => state.booking.booking.passengers);
  const selectedPenumpangOrder = useAppSelector((state) => state.booking.detailPenumpang.selectedPenumpangOrder);
  const dispatch = useAppDispatch();

  const [penumpang, setPenumpang] = useState<Passenger>(
    passengers[selectedPenumpangOrder]
  );

  return (
    <Stack p={2}>
      <Typography fontWeight="bold" mb={1}>
        Info Penumpang
      </Typography>

      <FormControl>
        <Typography fontWeight="bold">Nama Lengkap</Typography>
        <TextField
          id="pemesan-name-input"
          variant="outlined"
          value={penumpang.fullName}
          onChange={(event) => {
            const newPenumpang = { ...penumpang };
            newPenumpang.fullName = event.target.value;
            setPenumpang(newPenumpang);
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
          value={penumpang.title}
          onChange={(event) => {
            const newPenumpang = { ...penumpang };
            newPenumpang.title = event.target.value;
            setPenumpang(newPenumpang);
          }}
        >
          <FormControlLabel value="Mr" control={<Radio />} label="Mr" />
          <FormControlLabel value="Ms" control={<Radio />} label="Ms" />
          <FormControlLabel value="Mrs" control={<Radio />} label="Mrs" />
        </RadioGroup>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={() => dispatch(submitPenumpangPopup(penumpang))}
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
