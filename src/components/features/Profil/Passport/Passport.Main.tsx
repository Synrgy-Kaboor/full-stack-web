import { Stack, Typography } from '@mui/material';
import PasporIcon from '../../../../assets/Group.svg';
import theme from '../../../../config/theme';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Passport() {
  const navigate = useNavigate();
  const [passports, setPassports] = useState([]);
  const [isLoadingPassport, setIsLoadingPassport] = useState<boolean>(false);

  useEffect(() => {
    setIsLoadingPassport(true);
    fetch('https://fsw-backend.fly.dev/api/v1/user/passport', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        setIsLoadingPassport(false);
        return res.json();
      })
      .then((data) => {
        console.log(data.data.passport);
        setPassports(data.data.passport);
      });
  }, []);

  return (
    <Stack
      p={4}
      bgcolor={'white'}
      borderRadius={2}
      maxWidth={'880px'}
      sx={{ width: '100%', border: '1px solid #C2C2C2' }}
    >
      <Typography variant="h6" fontWeight={'bold'}>
        Daftar Paspor
      </Typography>
      <Typography color={'gray'} variant="subtitle2">
        Berikut ini data paspor yang tersimpan
      </Typography>

      {/* Passport Card */}
      <Stack spacing={1} mt={2}>
        {isLoadingPassport ? (
          <Typography>Loading Passports...</Typography>
        ) : (
          passports.map((passport) => {
            return (
              <Stack
                direction="row"
                p={2}
                sx={{
                  border: '1px solid #C2C2C2',
                  '&:hover': { cursor: 'pointer' },
                }}
                spacing={3}
                alignItems="center"
                justifyContent="space-between"
                borderRadius={1}
                key={passport['id']}
                onClick={() => navigate(`${passport['id']}`)}
              >
                <img
                  src={PasporIcon}
                  height="80%"
                  style={{ fill: theme.palette.primary.main }}
                />

                <Stack sx={{ width: '100%' }}>
                  <Typography fontWeight={'bold'}>
                    {passport['full_name']}
                  </Typography>
                  <Typography color="gray" variant="subtitle2">
                    {passport['passport_number']}
                  </Typography>
                </Stack>

                <ArrowForwardIosIcon />
              </Stack>
            );
          })
        )}
        {/* {} */}

        <Stack
          direction="row"
          p={2}
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          borderRadius={1}
          onClick={() => navigate('create/')}
          sx={{ border: '1px solid #C2C2C2', '&:hover': { cursor: 'pointer' } }}
        >
          <Typography fontWeight={'bold'}>Tambahkan Paspor Lainnya</Typography>
          <Typography variant="h6">+</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
