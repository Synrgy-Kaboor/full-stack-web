import PrimaryButton from '../core/primaryButton';
import { Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import icon from '../../assets/Chevron-Down.svg';

const Select = styled.select`
  max-width: 794px;
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
  letter-spacing: -0.15px;
  flex-shrink: 1;
  padding: 18px 22px;
  padding-right: 32px; /* Add padding for the icon */
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--Neutral-05, #c2c2c2);
  background: var(--White, #fff);
  color: #505050;
  appearance: none;
  outline: none;
  cursor: pointer;
  background-image: url(${icon}); /* Set the icon as background image */
  background-repeat: no-repeat; /* Ensure the icon is not repeated */
  background-position: right 10px center; /* Adjust the position of the icon */
`;
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
const InputAlamat = styled.textarea`
  width: 100%;
  height: 120px; /* Set the height to 120px */
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
  resize: none; /* Disable resizing */
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

export default function ChangeProfile() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = e.currentTarget.userTitle.value;
    const name = e.currentTarget.userName.value;
    const gender = e.currentTarget.gender.value;
    const dateOfBirth = e.currentTarget.dateOfBirth.value;
    const country = e.currentTarget.country.value;
    const city = e.currentTarget.city.value;
    const address = e.currentTarget.address.value;
    const citizen = e.currentTarget.citizen.value;

    const payload = {
      title,
      name,
      gender,
      dateOfBirth,
      country,
      city,
      address,
      citizen,
    };
    console.log(payload);
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
          Informasi Pribadi
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
                color: '#505050',
                fontFamily: 'Open Sans',
                fontSize: '20px',
                fontWeight: 600,
                letterSpacing: '-0.75px',
              }}
            >
              Title
            </Typography>
            <Select name='userTitle'>
              <option value='' disabled selected hidden>
                Pilih Title
              </option>
              <option value='Mr'>Mr</option>
              <option value='Mrs'>Mrs</option>
              <option value='Ms'>Ms</option>
              <option value='Dr'>Dr</option>
              <option value='Prof'>Prof</option>
            </Select>
          </Stack>
          <Stack
            direction={'column'}
            alignItems={'stretch'}
            sx={{ width: '100%', marginBottom: '16px' }}
            gap={1}
          >
            <Typography
              sx={{
                color: '#505050',
                fontFamily: 'Open Sans',
                fontSize: '20px',
                fontWeight: 600,
                letterSpacing: '-0.75px',
              }}
            >
              Nama Lengkap
            </Typography>
            <Input placeholder='Masukan Nama Belakang' name='userName' />
          </Stack>
          <Stack
            direction={'column'}
            alignItems={'stretch'}
            sx={{ width: '100%', marginBottom: '16px' }}
            gap={1}
          >
            <Typography
              sx={{
                color: '#505050',
                fontFamily: 'Open Sans',
                fontSize: '20px',
                fontWeight: 600,
                letterSpacing: '-0.75px',
              }}
            >
              Jenis Kelamin
            </Typography>
            <Select name='gender'>
              <option value='' disabled selected hidden>
                Pilih Jenis Kelamin
              </option>
              <option value='Mr'>Pria</option>
              <option value='Mrs'>Wanita</option>
              <option value='Ms'>Lainnya</option>
            </Select>
          </Stack>
          <Stack
            direction={'column'}
            alignItems={'stretch'}
            sx={{ width: '100%', marginBottom: '16px' }}
            gap={1}
          >
            <Typography
              sx={{
                color: '#505050',
                fontFamily: 'Open Sans',
                fontSize: '20px',
                fontWeight: 600,
                letterSpacing: '-0.75px',
              }}
            >
              Tanggal Lahir
            </Typography>
            <Input
              placeholder='Masukan Tanggal Lahir'
              type='Date'
              name='dateOfBirth'
            />
          </Stack>
          <Stack
            direction={'column'}
            alignItems={'stretch'}
            sx={{ width: '100%', marginBottom: '16px' }}
            gap={1}
          >
            <Typography
              sx={{
                color: '#505050',
                fontFamily: 'Open Sans',
                fontSize: '20px',
                fontWeight: 600,
                letterSpacing: '-0.75px',
              }}
            >
              Negara
            </Typography>
            <Input placeholder='Masukan Negara' name='country' />
          </Stack>
          <Stack
            direction={'column'}
            alignItems={'stretch'}
            sx={{ width: '100%', marginBottom: '16px' }}
            gap={1}
          >
            <Typography
              sx={{
                color: '#505050',
                fontFamily: 'Open Sans',
                fontSize: '20px',
                fontWeight: 600,
                letterSpacing: '-0.75px',
              }}
            >
              Kota
            </Typography>
            <Input placeholder='Masukan Kota' name='city' />
          </Stack>
          <Stack
            direction={'column'}
            alignItems={'stretch'}
            sx={{ width: '100%', marginBottom: '16px' }}
            gap={1}
          >
            <Typography
              sx={{
                color: '#505050',
                fontFamily: 'Open Sans',
                fontSize: '20px',
                fontWeight: 600,
                letterSpacing: '-0.75px',
              }}
            >
              Alamat Lengkap
            </Typography>
            <InputAlamat placeholder='Masukan alamat lengkap' name='address' />
          </Stack>
          <Stack
            direction={'column'}
            alignItems={'stretch'}
            sx={{ width: '100%', marginBottom: '16px' }}
            gap={1}
          >
            <Typography
              sx={{
                color: '#505050',
                fontFamily: 'Open Sans',
                fontSize: '20px',
                fontWeight: 600,
                letterSpacing: '-0.75px',
              }}
            >
              Kewarganegaraan
            </Typography>
            <Select name='citizen'>
              <option value='' disabled selected hidden>
                Pilih Kewarganegaraan
              </option>
              <option value='WNI'>WNI</option>
              <option value='WNA'>WNA</option>
            </Select>
          </Stack>
          <Stack
            direction={'row'}
            justifyContent={'flex-end'}
            sx={{ width: '100%' }}
          >
            <PrimaryButton type='submit' label='Simpan' />
          </Stack>
        </form>
      </Stack>
    </>
  );
}
