import {
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { IOSSwitch } from '../../../core/IOSSwitch';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { useState } from 'react';
import {
  openPenumpangPopup,
  resetFirstPenumpang,
  setFirstPenumpangToPemesan,
} from '../../../../redux/slices/Booking';

export default function DaftarPenumpang() {
  const passengers = useAppSelector(
    (state) => state.booking.booking.passengers
  );
  const dispatch = useAppDispatch();

  const [switchChecked, setSwitchChecked] = useState(true);

  return (
    <Card variant="outlined">
      <CardContent sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" mb={2}>
          <Typography>Sama dengan pemesan</Typography>
          <IOSSwitch
            defaultChecked
            onChange={() => {
              if (switchChecked) {
                dispatch(resetFirstPenumpang());
                setSwitchChecked(false);
              } else {
                dispatch(setFirstPenumpangToPemesan());
                setSwitchChecked(true);
              }
            }}
          />
        </Stack>
        <Divider />
        <Stack>
          {passengers.map((_, i) => {
            return <PenumpangRow order={i} key={i} />;
          })}
        </Stack>
      </CardContent>
    </Card>
  );
}

function PenumpangRow(props: { order: number }) {
  const passengers = useAppSelector(
    (state) => state.booking.booking.passengers
  );
  const dispatch = useAppDispatch();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ pt: 2 }}
      alignItems={'center'}
    >
      {passengers[props.order].name && (
        <Typography fontWeight={'bold'}>
          {`${passengers[props.order].title}. ${passengers[props.order].name}`}
        </Typography>
      )}
      {!passengers[props.order].name && (
        <Typography>{`Penumpang ${props.order + 1}`}</Typography>
      )}
      <IconButton onClick={() => dispatch(openPenumpangPopup(props.order))}>
        <EditIcon />
      </IconButton>
    </Stack>
  );
}
