import PrimaryButton from '../../core/primaryButton';
import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import icon from '../../../assets/Chevron-Down.svg';
import camera from '../../../assets/camera icon.png';
import { useAppDispatch, useAppSelector } from './../../../redux/hooks';
import { fetchUser } from '../../../redux/slices/userInfo';

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
  const dispatch = useAppDispatch();
  const [isUpdate, setIsUpdate] = useState(true);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch, isUpdate]);
  const userInfo = useAppSelector((state) => state.userInfo.user);
  const loading = useAppSelector((state) => state.userInfo.loading);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const avatar = e.currentTarget.avatar.files[0];
    const title = e.currentTarget.userTitle.value;
    const fullName = e.currentTarget.userName.value;
    const nik = e.currentTarget.nik.value;
    const gender = e.currentTarget.gender.value;
    const birthday = e.currentTarget.dateOfBirth.value;
    const dateParts = birthday.split('-');
    const formattedBirthday = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
    const nation = e.currentTarget.nation.value;
    const city = e.currentTarget.city.value;
    const address = e.currentTarget.address.value;
    const isWni = e.currentTarget.citizen.value === 'WNI' ? true : false;
    const jwtToken = localStorage.getItem('token');

    const formData = new FormData();
    formData.append('image', avatar);
    console.log('yang mau gue liat', formData.getAll('image'));
    const response = await fetch(
      'https://fsw-backend.fly.dev/api/v1/user/image',
      {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    const data = await response.json();
    console.log('Image uploaded successfully:', data.imageName);

    const payload = {
      title,
      fullName,
      nik,
      gender,
      birthday: formattedBirthday,
      nation,
      city,
      address,
      isWni,
      imageName: data.imageName,
    };

    const updateProfile = await fetch(
      'https://fsw-backend.fly.dev/api/v1/user',
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(payload),
      }
    );
    const updateRespond = await updateProfile.json();
    setIsUpdate((isUpdate) => !isUpdate);
    console.log('hasilPatch', updateRespond);
    console.log('stateLoading', loading);
    console.log('userInfoGue', userInfo);
  };

  if (!loading) {
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
                <RoundImage
                  src={userInfo ? userInfo.imageUrl : ''}
                  alt='Round Image'
                />
                <label htmlFor='avatar'>
                  <SmallImage src={camera} alt='Round Image' />
                </label>
                <input
                  type='file'
                  accept='image/jpeg'
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
              <Select defaultValue={userInfo.title} name='userTitle'>
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
              <Input
                defaultValue={userInfo.fullName}
                placeholder='Masukan Nama Belakang'
                name='userName'
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
                NIK
              </Typography>
              <Input
                defaultValue={userInfo.nik}
                placeholder='Masukan NIK'
                name='nik'
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
                Jenis Kelamin
              </Typography>
              <Select defaultValue={userInfo.gender} name='gender'>
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
                defaultValue={userInfo.birthday}
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
              <Input
                defaultValue={userInfo.nation}
                placeholder='Masukan Negara'
                name='nation'
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
                Kota
              </Typography>
              <Input
                defaultValue={userInfo.city}
                placeholder='Masukan Kota'
                name='city'
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
                Alamat Lengkap
              </Typography>
              <InputAlamat
                defaultValue={userInfo.address}
                placeholder='Masukan alamat lengkap'
                name='address'
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
                Kewarganegaraan
              </Typography>
              <Select
                defaultValue={userInfo.isWni ? 'WNI' : 'WNA'}
                name='citizen'
              >
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
  } else {
    return (
      <>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      </>
    );
  }
}
