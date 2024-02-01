import PrimaryButton from '../../core/primaryButton';
import { Stack, Typography} from '@mui/material';
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
   border: 1px solid var(--Gray-03, #E7E3DA);
`;
const SmallImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: -50px;
  margin-right: -10px;
`;
export default function ChangeProfile (){
    return ( 
        <>
        
        <Stack direction={'column'} maxWidth={'880px'} alignItems={'start'} sx={{width: '100%', height:'100%', padding: '34px 43px', borderRadius:'8px',
            border:'1px solid #C2C2C2', background: 'white'}} gap={2} >
                    
            <Typography sx={{
                    color: '#000', fontFamily: 'Open Sans', fontSize: '24px', fontWeight: 700, letterSpacing: '-0.5px'
                }}>
            Informasi Pribadi</Typography>

            <Stack direction={'column'} alignItems={'center'} sx={{width: '100%', marginBottom:'16px'}} gap={1}>
            <Typography sx={{
                    color: '#505050', fontFamily: 'Open Sans', fontSize: '20px', fontWeight: 600, letterSpacing: '-0.75px'
                }}>
                    Foto Profil
                </Typography>
            <Stack alignItems={'flex-end'}>
            <RoundImage src={profile} alt="Round Image"/>
            <SmallImage src={camera} alt="Round Image"/>
            </Stack>
            </Stack>
            <Stack direction={'column'} alignItems={'stretch'} sx={{width: '100%', marginBottom:'16px'}} gap={1}>
                <Typography sx={{
                    color: '#505050', fontFamily: 'Open Sans', fontSize: '20px', fontWeight: 600, letterSpacing: '-0.75px'
                }}>
                    Title
                </Typography>
                <Select>
                    <option value="" disabled selected hidden>Pilih Title</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Dr">Dr</option>
                    <option value="Prof">Prof</option>
                </Select>
            </Stack>
            <Stack direction={'column'} alignItems={'stretch'} sx={{width: '100%', marginBottom:'16px'}} gap={1}>
                <Typography sx={{
                    color: '#505050', fontFamily: 'Open Sans', fontSize: '20px', fontWeight: 600, letterSpacing: '-0.75px'
                }}>
                    Nama Lengkap
                </Typography>
                <Input placeholder="Masukan Nama Belakang"/>
            </Stack>
            <Stack direction={'column'} alignItems={'stretch'} sx={{width: '100%', marginBottom:'16px'}} gap={1}>
                <Typography sx={{
                    color: '#505050', fontFamily: 'Open Sans', fontSize: '20px', fontWeight: 600, letterSpacing: '-0.75px'
                }}>
                    Jenis Kelamin
                </Typography>
                <Select>
                    <option value="" disabled selected hidden>Pilih Jenis Kelamin</option>
                    <option value="Mr">Pria</option>
                    <option value="Mrs">Wanita</option>
                    <option value="Ms">Lainnya</option>
                </Select>
            </Stack>
            <Stack direction={'column'} alignItems={'stretch'} sx={{width: '100%', marginBottom:'16px'}} gap={1}>
                <Typography sx={{
                    color: '#505050', fontFamily: 'Open Sans', fontSize: '20px', fontWeight: 600, letterSpacing: '-0.75px'
                }}>
                    Tanggal Lahir
                </Typography>
                <Input placeholder="Masukan Tanggal Lahir" type='Date'/>
            </Stack>
            <Stack direction={'column'} alignItems={'stretch'} sx={{width: '100%', marginBottom:'16px'}} gap={1}>
                <Typography sx={{
                    color: '#505050', fontFamily: 'Open Sans', fontSize: '20px', fontWeight: 600, letterSpacing: '-0.75px'
                }}>
                    Negara
                </Typography>
                <Input placeholder="Masukan Negara"/>
            </Stack>
            <Stack direction={'column'} alignItems={'stretch'} sx={{width: '100%', marginBottom:'16px'}} gap={1}>
                <Typography sx={{
                    color: '#505050', fontFamily: 'Open Sans', fontSize: '20px', fontWeight: 600, letterSpacing: '-0.75px'
                }}>
                    Kota
                </Typography>
                <Input placeholder="Masukan Kota"/>
            </Stack>
            <Stack direction={'column'} alignItems={'stretch'} sx={{width: '100%', marginBottom:'16px'}} gap={1}>
                <Typography sx={{
                    color: '#505050', fontFamily: 'Open Sans', fontSize: '20px', fontWeight: 600, letterSpacing: '-0.75px'
                }}>
                    Alamat Lengkap
                </Typography>
                <InputAlamat placeholder="Masukan alamat lengkap"/>
            </Stack>
            <Stack direction={'column'} alignItems={'stretch'} sx={{width: '100%', marginBottom:'16px'}} gap={1}>
                <Typography sx={{
                    color: '#505050', fontFamily: 'Open Sans', fontSize: '20px', fontWeight: 600, letterSpacing: '-0.75px'
                }}>
                    Kewarganegaraan
                </Typography>
                <Select>
                    <option value="" disabled selected hidden>Pilih Kewarganegaraan</option>
                    <option value="Mr">WNI</option>
                    <option value="Mrs">WNA</option>
                </Select>
            </Stack>
            <Stack direction={'row'}  justifyContent={'flex-end'} sx={{ width: '100%'}}>
                <PrimaryButton type="button" label="Simpan" handleOnClick={()=>{}}/>
            </Stack>
        </Stack>
        </>
        )
}
