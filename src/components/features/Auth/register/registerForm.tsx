import { useState } from 'react';
import styled from 'styled-components';
import Visible from './../../../../assets/eye-line.svg';
import UnVisible from './../../../../assets/eye-off.svg';
import ChevronRight from './../../../../assets/chevron-right.svg';
import GlobalModals from '../../../shared/Auth/modals';
import OtpModals from '../../../shared/Auth/otpModals';
import PrimaryButton from '../../../core/primaryButton';

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
    justify-content: start;
    align-items: start;
    height: 140vh;
    padding: 20px 12px; 
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 517px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 30px;
  @media (max-width: 500px) {
    gap: 20px;
  }
`;

const Label = styled.p`
  color: #000;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 140% */
  letter-spacing: -0.75px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const PasswordContainer = styled(InputContainer)`
  flex-direction: row;
  align-items: center;
  max-width: 517px;
  box-sizing: border-box;
  padding: 0 8px;
  border-radius: 8px;
  border: 1px solid var(--Neutral-05, #c2c2c2);
  background: var(--White, #fff);
  &:focus-within {
    outline: 1px solid rgba(123, 82, 171, 0.5);
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

const PasswordInput = styled(Input)`
  border: none;
  padding: 0;
  &:focus {
    outline: none;
  }
`;
const Description = styled.p`
  max-width: 466px;
  color: var(
    --Neutral-06,
    var(--android-bottom-navigation-bottom-navigation-selected-color, #9e9e9e)
  );
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
`;

const FormTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  margin-left: -12px;
`;
const BackIcon = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;
const FormTitle = styled.p`
  color: var(--Neutral-09, #1c1c1e);
  font-family: Open Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  letter-spacing: -0.75px;
  @media (max-width: 616px) {
    font-size: 24px;
  }
`;

const PolicyContainer = styled.div`
  margin-top: 60px;
  @media (max-width: 616px) {
    margin-top: 30px;
  }
`;
const PolicyDesc = styled(Description)`
  text-align: center;
`;
const Policy = styled.a`
  color: var(--Secondary-01, #7b52ab);
  font-family: Open Sans;
  font-size: 16px;
  align-text: center;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-decoration: none;
`;

interface RegisterFormProps {
  email: string;
}

export default function RegisterForm({ email }: RegisterFormProps) {
  const [visibility, setVisibility] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      phoneNumber: e.currentTarget.phoneNumber.value,
      email: e.currentTarget.email.value,
      fullName: e.currentTarget.fullName.value,
      password: e.currentTarget.password.value,
    };
    const registerResponse = await fetch('https://kaboor-api-dev.up.railway.app/api/v1/auth/register/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
    const registerStatus = await registerResponse.json()
    console.log(registerStatus)
    const sendtOtpResponse = await fetch('https://kaboor-api-dev.up.railway.app/api/v1/auth/otp/resend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: email})
    })
    const sendOtpStatus = await sendtOtpResponse.json()
    console.log(sendOtpStatus)
    setOpen(true);
  };

  return (
    <>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormTitleContainer>
            <BackIcon src={ChevronRight} alt="" onClick={() => {}} />
            <FormTitle>Isi Detail Akunmu</FormTitle>
          </FormTitleContainer>
          <InputContainer>
            <Label>Nomor Ponsel</Label>
            <Input type="tel" pattern="[0-9,+]{10,}" placeholder="+62" minLength={10} defaultValue='' required name="phoneNumber"/>
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>
            <Input required
              name="email"
              placeholder="admin@gmail.oom"
              type="email"
              defaultValue={email}
              disabled
            />
          </InputContainer>
          <InputContainer>
            <Label>Nama Lengkap</Label>
            <Input
              placeholder="Masukkan nama lengkap"
              required
              name="fullName"
            />
            <Description>Sesuai di KTP/SIM/Paspor</Description>
          </InputContainer>
          <InputContainer>
            <Label>Sandi</Label>
            <PasswordContainer id="passContainer">
              <PasswordInput
                name="password"
                required
                placeholder="Masukkan sandi"
                type={visibility ? 'text' : 'password'}
                minLength={7}
              />
              <div onClick={() => setVisibility(!visibility)}>
                <img
                  src={visibility ? UnVisible : Visible}
                  alt=""
                  width={18}
                  height={18}
                />
              </div>
            </PasswordContainer>
            <Description>
              Min. 7 Karakter berupa kombinasi angka, huruf besar, dan huruf
              kecil
            </Description>
          </InputContainer>
          <PrimaryButton type="submit" label='Buat Akun'/>
          <GlobalModals open={open} onClose={() => setOpen(false)}>
            <OtpModals email={email} setOpen={setOpen} path={'/auth/login'} />
          </GlobalModals>
        </Form>
        <PolicyContainer>
          <PolicyDesc>
            Dengan membuat akun kamu menyetujui
            <Policy href="#"> Syarat, Ketentuan dan Kebijakan</Policy> Privasi
            Kaboor
          </PolicyDesc>
        </PolicyContainer>
      </FormContainer>
    </>
  );
}
