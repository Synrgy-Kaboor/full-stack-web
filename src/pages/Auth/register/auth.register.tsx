import React from 'react';
import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Cover from './../../../assets/Rectangle_319.png';
import PrimaryButton from '../../../components/core/primaryButton';
import { Dialog, DialogContent, Divider, Stack, Typography, Button } from '@mui/material';
import { useState } from 'react';
import GlobalModals from '../../../components/shared/Auth/modals';
import OtpModals from '../../../components/shared/Auth/otpModals';


const Main = styled.main`
  max-width: 1440px;
  position: relative;
  margin: 0 auto;
`;
const Layer = styled.div`
  width: 100%;
  height: 1024px;
  background: linear-gradient(
    270deg,
    rgba(58, 66, 255, 0.5) 0%,
    rgba(123, 82, 171, 0.5) 100%
  );
  z-index: -1;
  position: absolute;
  @media (max-width: 500px) {
    height: 100vh;
  }
`;

const Image = styled.img`
  width: 53%;
  height: 1024px;
  position: absolute;
  left: 0;
  z-index: -2;

  @media (max-width: 500px) {
    widht: 100%;
    height: 100vh;
  }
`;

const FormContainer = styled.div`
  position: relative;
  padding: 0 12px;
  width: 50%;
  height: 1024px;
  min-width: 300px;
  flex-shrink: 1;
  border-radius: 50px 0px 0px 50px;
  background: var(--White, #fff);
  display: flex;
  flex-direction: column;
  float: right;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    float: none;
    border-radius: 10px 10px 10px 10px;
    margin: 0 auto;
    align-items: start;
    justify-content: start;
    padding-top: 100px;
    height: 100vh;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 517px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 30px;
  
`;

const Title = styled.p`
  color: var(--Neutral-09, #1c1c1e);
  font-family: Open Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  letter-spacing: -0.75px;
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const Input = styled.input`
  width: 100%;
  max-width: 517px;
  height: 43px;
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
  letter-spacing: -0.15px;
  flex-shrink: 1;
  padding: 8px;
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

const RegisteredModal = styled(Dialog)`
  & .MuiDialog-paper {
    border-radius: 32px;
    background: #fff;
    display: inline-flex;
    padding: 100px 20px;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
  }
`;

const ModalContent = styled(DialogContent)`
  color: var(--Neutral-09, #1c1c1e);
  text-align: center;

  /* Mobile/Heading/H1 */
  font-family: Open Sans;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 171.429% */
  letter-spacing: -0.25px;
`;

const SecondButton = muiStyled(Button)`
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
  background: var(
    --Primary-01,
    linear-gradient(270deg, #3a42ff 0%, #7b52ab 100%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-radius: 8px;
  border: 1px solid var(--Primary-01, #3a42ff);

  @media (max-width: 616px) {
    font-size: 8px;
  }
`;

interface RegisterProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export default function Register({ setEmail }: RegisterProps) {
  const [myEmail, setMyEmail] = useState('')
  const [openRegistered, setOpenRegistered] = useState(false);
  const [openEmailVerify, setOpenEmailVerify] = useState(false)
  const [openOtpModal, setOpenOtpModal] = useState(false)
  const navigate = useNavigate();



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault();
    const formData = {
      email: e.currentTarget.email.value,
    };
    // email Checking
    const response = await fetch('https://kaboor-api-dev.up.railway.app/api/v1/auth/check/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json()
    console.log(data)

    if(data.code === 200){
      setEmail(formData.email);
      navigate('/register/detail-akun')
    } 
    if(data.message === 'Email was registered, please use another email!') {
      setOpenRegistered(true)
    }
    else{
      setOpenEmailVerify(true)
      setMyEmail(formData.email)
    }
  };

  const handleVerify = async ()=>{
    setOpenEmailVerify(false);
    // resendOTP
    console.log({email:myEmail})
    const sendtOtpResponse = await fetch('https://kaboor-api-dev.up.railway.app/api/v1/auth/otp/resend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: myEmail})
      })
    const sentOtpStatus = await sendtOtpResponse.json()
    console.log(sentOtpStatus)
    setOpenOtpModal(true);
  }

  return (
    <Main>
      <Image alt="" src={Cover} />
      <Layer />
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Title>Buat Akun</Title>
          <Input name="email" type="email" required />
          <PrimaryButton type="submit" label="Buat Akun" />
          <GlobalModals open={openOtpModal} onClose={() => setOpenOtpModal(false)}>
            <OtpModals email={myEmail} setOpen={setOpenOtpModal} path={'/auth/login'}/>
          </GlobalModals>
        </Form>
        <Divider sx={{color: '#9E9E9E', width: '100%', marginTop: '16px', maxWidth: '381px' } }>atau login dengan</Divider>
        <GlobalModals open={openRegistered} onClose={()=>{setOpenRegistered(false)}}>
          <Stack gap={2}>
            <Typography variant='h5' sx={{color: '#000', fontFamily: 'Open Sans', fontStyle: 'normal', fontSize: '24px', fontWeight: 700, lineHeigh: '40px', letterSpacing:'-0.5px'}}>
              Email ini sudah terdaftar untuk Log In
            </Typography>
            <Typography variant='body2' sx={{color: ' #9E9E9E', textAlign:'center', maxWidth:'426px', 
            fontFamily: 'Open Sans', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeigh: '24px', letterSpacing:'0.15px', paddingBottom: '16px'}}>
              Untuk masuk ke akun, silahkan Log in menggunakan email ini menuju ke halaman Log in
            </Typography>
            <SecondButton type='button' onClick={()=>{setOpenRegistered(false)}}>Nanti Saja</SecondButton>
            <PrimaryButton label='Log In' type='button' handleOnClick={()=>{navigate('/login')}}/>
          </Stack>
        </GlobalModals>
        <RegisteredModal open={openEmailVerify} onClose={() => setOpenEmailVerify(false)}>
          <ModalContent>
            <Stack spacing={2} gap={3}>
              <Typography variant='h5'>
              Email ini sudah terdaftar, namun belum terverifikasi. verifikasi sekarang
              </Typography>
              <PrimaryButton type='button' label='Verifikasi sekarang' handleOnClick={handleVerify}/>
            </Stack>
            </ModalContent>
        </RegisteredModal>
      </FormContainer>
    </Main>
  );
}
