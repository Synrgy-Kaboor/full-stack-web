import {
  Stack,
  Typography,
  // Container,
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

import { vouchers } from '../../../data/voucher';
import { Voucher } from '../../../types/Voucher';

import { useState } from 'react';

function PromoCard({ discountPercent, code, desc, timeLimit }: Voucher) {
  return (
    <Card
      sx={{
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      onClick={() => alert('Promo Clicked')}
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
            Hemat IDR {discountPercent}
          </Typography>
        </Box>
        {/* Card Content */}
        <Stack py={1} px={2}>
          <Typography fontWeight="bold">{desc}</Typography>
          <Stack direction="row" spacing={1}>
            <Typography color="gray" variant="body2">
              Kode :
            </Typography>
            <Typography variant="body2">{code}</Typography>
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
            Promo Berakhir dalam {timeLimit.toString()} Jam
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  );
}

export default function FormVoucher() {
  const [voucherQuery, setVoucherQuery] = useState<string>('');
  const [listVouchers, setListVouchers] = useState<Voucher[]>(vouchers);

  const handleVoucherSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const query = e.target.value;
    setVoucherQuery(query);

    const promoList = vouchers.filter((voucher) => {
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
