import {
  Stack,
  Typography,
  OutlinedInput,
  InputAdornment,
  Card,
  CardContent,
  Divider,
  CardActions,
  Box,
} from '@mui/material';

import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

import { Voucher } from '../../../types/Voucher';

import { useState } from 'react';
import { numToRp } from '../../../utils/formatter';
import { useAppDispatch } from '../../../redux/hooks';
import { submitVoucherPopup } from '../../../redux/slices/Booking';

function PromoCard(props: Voucher) {
  const dispatch = useAppDispatch();

  function calculateDuration(timeLimit: Date) {
    if (timeLimit < new Date()) {
      return 'Promo sudah berakhir';
    } else {
      const diffTime = Math.abs(timeLimit.valueOf() - new Date().valueOf());
      const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

      if (diffHours > 24) {
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return `Promo berakhir dalam ${diffDays} hari`;
      } else {
        return `Promo berakhir dalam ${diffHours} jam`;
      }
    }
  }

  return (
    <Card
      sx={{
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      onClick={() => {dispatch(submitVoucherPopup(props))}}
    >
      <CardContent sx={{ padding: 0 }}>
        {/* Card Title */}
        <Stack
          direction="row"
          bgcolor="primary.main"
          alignItems="center"
          p={2}
          spacing={1}
        >
          <VerifiedOutlinedIcon sx={{ color: 'white' }} />
          <Typography color="white" fontWeight="bold">
            Voucher Promo
          </Typography>
        </Stack>

        <Box mt={2} mx={2} mb={1}>
          <Typography
            display="inline"
            bgcolor="success.light"
            color="white"
            variant="subtitle2"
            borderRadius={8}
            p={1}
          >
            Hemat {numToRp(props.maxDiscount)}
          </Typography>
        </Box>
        {/* Card Content */}
        <Stack py={1} px={2}>
          <Typography fontWeight="bold">{props.desc}</Typography>
          <Stack direction="row" spacing={1}>
            <Typography color="gray" variant="body2">
              Kode :
            </Typography>
            <Typography variant="body2">{props.code}</Typography>
          </Stack>
          <Typography color="gray" variant="body2">
            Berlaku untuk semua metode pembayaran
          </Typography>
        </Stack>

        <Box px={2} pb={2}>
          <Typography
            variant="body2"
            display="inline"
            color="primary.main"
            my={1}
            sx={{ '&:hover': { cursor: 'pointer' } }}
            onClick={(e) => {
              e.stopPropagation();
              alert('S&K');
            }}
          >
            S&K Berlaku
          </Typography>
        </Box>
        <Divider />
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <Stack py={1} px={2}>
          <Typography color="red" variant="body2">
            {calculateDuration(props.timeLimit)}
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  );
}

export default function FormVoucher() {
  const [voucherQuery, setVoucherQuery] = useState<string>('');
  const [listVouchers, setListVouchers] = useState<Voucher[]>([]);

  const handleVoucherSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const query = e.target.value;
    setVoucherQuery(query);

    const promoList = listVouchers.filter((voucher) => {
      return (
        voucher.code.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
      );
    });

    setListVouchers(promoList);
  };

  return (
    <>
      <Stack>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Bayar Lebih Hemat!
        </Typography>
        <OutlinedInput
          placeholder="Pilih/Masukkan Voucher Disini"
          endAdornment={
            <InputAdornment position="end">
              <ConfirmationNumberOutlinedIcon sx={{ color: 'gray' }} />
            </InputAdornment>
          }
          value={voucherQuery}
          onChange={(e) => {
            handleVoucherSearch(e);
          }}
        />
        <Typography variant="h6" fontWeight="bold" pt={2} gutterBottom>
          Pilih Promo Buat Transaksimu
        </Typography>
        <Stack spacing={2}>
          {listVouchers.length > 0 ? (
            listVouchers.map((voucher, index) => (
              <PromoCard key={index} {...voucher} />
            ))
          ) : (
            <Stack justifyContent="center" alignItems="center" p={2}>
              <Typography>Belum ada promo nih... :(</Typography>
            </Stack>
          )}
        </Stack>
      </Stack>
    </>
  );
}
