import {
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { openPemesanPopup } from '../../../../redux/slices/Booking';

export default function DetailPemesan() {
  const orderer = useAppSelector((state) => state.booking.booking.orderer);
  const dispatch = useAppDispatch();

  return (
    <Card variant="outlined">
      <CardContent sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack>
            <Typography fontWeight="bold">
              {`${orderer.title}. ${orderer.name}`}
            </Typography>
            <Stack direction="row" spacing={2}>
              <LocalPhoneOutlinedIcon />
              <Typography>{orderer.phone}</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <EmailOutlinedIcon />
              <Typography>{orderer.email}</Typography>
            </Stack>
          </Stack>
          <IconButton
            onClick={() => dispatch(openPemesanPopup())}
            sx={{
              height: 'fit-content',
            }}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
