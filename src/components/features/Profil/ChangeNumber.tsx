import PrimaryButton from '../../core/primaryButton';
import { Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import GlobalModals from '../../shared/Auth/modals';
import OtpProfile from './otpProfileModals';
import { useState } from 'react';

const Input = styled.input`
  width: 100%;
  max-width: 794px;
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
  letter-spacing: -0.15px;
  flex-shrink: 1;
  padding: 18px 22px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--Neutral-05, #c2c2c2);
  background: var(--White, #fff);
  ::placeholder {
    color: var(
      --Neutral-06,
      var(--android-bottom-navigation-bottom-navigation-selected-color, #9e9e9e)
    );
  }
  &:focus {
    outline: 1px solid rgba(123, 82, 171, 0.5);
  }
`;

export default function ChangeNumber() {
  const [isOpen, setIsOpen] = useState(false);
  const jwtToken = localStorage.getItem('token');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = { phone: e.currentTarget.phoneNumber.value };
    console.log(payload);
    setPhoneNumber(payload.phone);
    const changeNumber = await fetch(
      'https://fsw-backend.fly.dev/api/v1/user/phone',
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(payload),
      }
    );
    const updateNumberRespond = await changeNumber.json();
    console.log({ responseGue: updateNumberRespond });
    setIsOpen(true);
  };
  return (
    <>
      <Stack
        direction={'column'}
        maxWidth={'880px'}
        alignItems={'start'}
        sx={{
          width: '100%',
          height: '100%',
          padding: '34px 43px',
          borderRadius: '8px',
          border: '1px solid #C2C2C2',
          background: 'white',
        }}
        gap={2}
      >
        <Typography
          sx={{
            color: '#000',
            fontFamily: 'Open Sans',
            fontSize: '24px',
            fontWeight: 700,
            letterSpacing: '-0.5px',
          }}
        >
          No. Telepon
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Stack
            direction={'column'}
            alignItems={'stretch'}
            sx={{ width: '100%', marginBottom: '16px' }}
            gap={1}
          >
            <Typography
              sx={{
                color: '#9E9E9E',
                fontFamily: 'Open Sans',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '-0.75px',
              }}
            >
              Tolong masukkan nomor handphone yang baru
            </Typography>
            <Typography
              sx={{
                color: '#505050',
                fontFamily: 'Open Sans',
                fontSize: '20px',
                fontWeight: 600,
                letterSpacing: '-0.75px',
              }}
            >
              Nomor HP
            </Typography>
            <Input
              type='tel'
              pattern='[0-9,+]{10,}'
              placeholder='+62'
              minLength={10}
              defaultValue=''
              required
              name='phoneNumber'
            />
          </Stack>
          <PrimaryButton type='submit' label='Kode Verifikasi' />
        </form>
        <GlobalModals open={isOpen} onClose={() => setIsOpen(false)}>
          <OtpProfile
            payload={phoneNumber}
            setOpen={setIsOpen}
            isForEmail={false}
          />
        </GlobalModals>
      </Stack>
    </>
  );
}
