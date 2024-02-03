import PrimaryButton from '../../core/primaryButton';
import { Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import icon from '../../../assets/Chevron-Down.svg';
import camera from '../../../assets/camera icon.png';
import profile from '../../../assets/profile-img.png';

const Select = styled.select`
  max-width: 794px;
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.15px;
  flex-shrink: 1;
  padding: 18px 22px;
  padding-right: 32px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--Neutral-05, #c2c2c2);
  background: var(--White, #fff);
  color: #505050;
  appearance: none;
  outline: none;
  cursor: pointer;
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-position: right 10px center;
`;
const Input = styled.input`
  width: 100%;
  max-width: 794px;
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
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
  height: 120px;
  max-width: 794px;
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.15px;
  flex-shrink: 1;
  padding: 18px 22px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--Neutral-05, #c2c2c2);
  background: var(--White, #fff);
  resize: none;
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
const RoundImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid var(--Gray-03, #e7e3da);
`;
const SmallImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: -50px;
  margin-right: -10px;
`;
export default function ChangeProfile() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const avatar = e.currentTarget.avatar.files[0];
    const title = e.currentTarget.userTitle.value;
    const fullName = e.currentTarget.userName.value;
    const gender = e.currentTarget.gender.value;
    const birthday = e.currentTarget.dateOfBirth.value;
    const country = e.currentTarget.country.value;
    const city = e.currentTarget.city.value;
    const address = e.currentTarget.address.value;
    const isWni = e.currentTarget.citizen.value === 'WNI' ? true : false;

    const payload = {
      title,
      fullName,
      gender,
      birthday,
      country,
      city,
      address,
      isWni,
      avatar,
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
            alignItems={'center'}
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
              Foto Profil
            </Typography>
            <Stack alignItems={'flex-end'}>
              <RoundImage src={profile} alt='Round Image' />
              <label htmlFor='avatar'>
                <SmallImage src={camera} alt='Round Image' />
              </label>
              <input
                type='file'
                accept='image/png, image/jpeg'
                name='avatar'
                id='avatar'
                style={{ display: 'none' }}
              />
            </Stack>
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
              Title
            </Typography>
            <Select name='userTitle'>
              <option value='' disabled selected hidden>
                Pilih Title
              </option>
              <option value='Mr'>Mr</option>
              <option value='Mrs'>Mrs</option>
              <option value='Ms'>Ms</option>
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
              <option value='L'>Pria</option>
              <option value='P'>Wanita</option>
              <option value='Lainnya'>Lainnya</option>
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
