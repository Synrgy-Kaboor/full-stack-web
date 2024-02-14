import { Box, Card, CardContent, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import LogoBCA from '../../../assets/logo_bca.png';
import LogoBRI from '../../../assets/logo_bri.png';
import LogoBNI from '../../../assets/logo_bni.png';
import LogoMandiri from '../../../assets/logo_mandiri.png';
import { selectPaymentMethod } from '../../../redux/slices/Booking';

export default function DaftarMetodePembayaran() {
  const selectedPaymentMethod = useAppSelector((state) => state.booking.booking.paymentMethod);
  const dispatch = useAppDispatch();

  return (
    <RadioGroup
      value={selectedPaymentMethod}
      onChange={(event) => {
        dispatch(selectPaymentMethod(event.target.value));
      }}>
      <Stack spacing={1}>
        <MetodePembayaranRow image={LogoBCA} label='Bank BCA' value='BCA'/>
        <MetodePembayaranRow image={LogoBRI} label='Bank BRI' value='BRI'/>
        <MetodePembayaranRow image={LogoBNI} label='Bank BNI' value='BNI'/>
        <MetodePembayaranRow image={LogoMandiri} label='Bank Mandiri' value='Mandiri'/>
      </Stack>
    </RadioGroup>
  )
}

function MetodePembayaranRow(props: {image: string, label: string, value: string}) {
  return (
    <Card variant="outlined">
      <CardContent sx={{ paddingX: 2, paddingY: 1, '&:last-child': {paddingY: 1} }}>
        <Stack direction="row" alignItems={'center'}>
          <Box minWidth={'25%'}>
            <img src={props.image}/>
          </Box>
          <Typography flexGrow={1} pr={2} fontWeight={'bold'}>{props.label}</Typography>
          <Radio value={props.value}/>
        </Stack>
      </CardContent>
    </Card>
  )
}