import { Stack, Typography } from '@mui/material';
import SuccesIcon from './../../../assets/ic-success.svg';
import {
  getFullDate,
  numToRp,
  timeWithTimezone,
} from '../../../utils/formatter';

interface propsType {
  methodName: string;
  totalPrice: number;
  paymentDateTime: string;
  invoiceNumber: string;
}

const PaymentDetail = (props: propsType) => {
  return (
    <>
      <Stack justifyContent={'center'} alignItems={'center'} height={'100%'}>
        <Stack flexDirection={'column'} gap={'30px'} flexWrap={'wrap'}>
          <Stack alignItems={'center'}>
            <img src={SuccesIcon} alt='icon' width={'127px'} height={'127px'} />
            <Typography
              sx={{
                color: '#1C1C1E',
                textAlign: 'center',
                fontSize: '20px',
                fontWeight: 700,
                lineHeight: '30px',
                letterSpacing: '-0.75px',
              }}
            >
              Pembayaran Berhasil
            </Typography>
          </Stack>
          <Stack flexDirection={'row'} justifyContent={'space-between'}>
            <Stack gap={1}>
              <Typography
                sx={{
                  color: '#9E9E9E',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '16px',
                  letterSpacing: '-0.15px',
                }}
              >
                Nomor Faktur
              </Typography>
              <Typography
                sx={{
                  color: '#1C1C1E',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '28px',
                  letterSpacing: '-0.75px',
                }}
              >
                {props.invoiceNumber}
              </Typography>
            </Stack>
            <Stack gap={1} alignItems={'flex-end'}>
              <Typography
                sx={{
                  color: '#9E9E9E',
                  fontSize: '18px',
                  fontWeight: 400,
                  textAlign: 'right',
                  lineHeight: '16px',
                  letterSpacing: '-0.15px',
                }}
              >
                Metode Pembayaran
              </Typography>
              <Typography
                sx={{
                  color: '#1C1C1E',
                  fontSize: '20px',
                  texAlign: 'right',
                  lineHeight: '28px',
                  letterSpacing: '-0.75px',
                }}
              >
                Bank {props.methodName}
              </Typography>
            </Stack>
          </Stack>
          <Stack flexDirection={'row'} justifyContent={'space-between'}>
            <Stack gap={1}>
              <Typography
                sx={{
                  color: '#9E9E9E',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '16px',
                  letterSpacing: '-0.15px',
                }}
              >
                Tanggal
              </Typography>
              <Typography
                sx={{
                  color: '#1C1C1E',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '28px',
                  letterSpacing: '-0.75px',
                }}
              >
                {getFullDate(props.paymentDateTime)}
              </Typography>
            </Stack>
            <Stack gap={1}>
              <Typography
                sx={{
                  color: '#9E9E9E',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '16px',
                  letterSpacing: '-0.15px',
                  textAlign: 'right',
                }}
              >
                Pukul
              </Typography>
              <Typography
                sx={{
                  color: '#1C1C1E',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '28px',
                  letterSpacing: '-0.75px',
                }}
              >
                {timeWithTimezone(new Date(props.paymentDateTime), 7)}
              </Typography>
            </Stack>
          </Stack>
          <Stack flexDirection={'row'} justifyContent={'space-between'}>
            <Stack gap={1}>
              <Typography
                sx={{
                  color: '#9E9E9E',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '16px',
                  letterSpacing: '-0.15px',
                }}
              >
                Jumlah Pembayaran
              </Typography>
              <Typography
                sx={{
                  color: '#1C1C1E',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '28px',
                  letterSpacing: '-0.75px',
                }}
              >
                {numToRp(props.totalPrice)}
              </Typography>
            </Stack>
            <Stack gap={1}>
              <Typography
                sx={{
                  color: '#9E9E9E',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '16px',
                  letterSpacing: '-0.15px',
                }}
              >
                Status
              </Typography>
              <Typography
                sx={{
                  color: '#1C1C1E',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '28px',
                  letterSpacing: '-0.75px',
                }}
              >
                Sukses
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default PaymentDetail;
