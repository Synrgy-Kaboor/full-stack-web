import Button from '@mui/material/Button';
import { useState, useRef, ChangeEvent } from 'react';
import { styled as muiStyled } from '@mui/material/styles';
import styled from 'styled-components';
import Countdown from './../../shared/Auth/timer';

const FirstButton = styled(Button)`
  color: var(--shadow, #fff);
  width: 100%;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 18px */
  border-radius: 8px;
  text-transform: none;
  background: var(
    --Primary-01,
    linear-gradient(270deg, #3a42ff 0%, #7b52ab 100%)
  );
  @media (max-width: 616px) {
    font-size: 8px;
  }
  &:hover {
    border-radius: 8px;
    background: var(
      --Primary-02,
      linear-gradient(
        270deg,
        rgba(58, 66, 255, 0.8) 0%,
        rgba(123, 82, 171, 0.8) 100%
      )
    );
  }
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

const OtpContainer = styled.div`
  max-width: 426px;
  display: flex;
  justify-content: space-around;
  gap: 32px;
  margin-bottom: 8px;
  @media (max-width: 616px) {
    gap: 16px;
    justify-content: center;
  }
`;

const OtpDesc = styled.h5`
  color: var(
    --Neutral-06,
    var(--android-bottom-navigation-bottom-navigation-selected-color, #9e9e9e)
  );
  text-align: center;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
  @media (max-width: 616px) {
    font-size: 8px;
  }
`;

const OtpTittle = styled.div`
  text-align: center;
  color: #000;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 166.667% */
  letter-spacing: -0.5px;
  margin-bottom: -8px;
  @media (max-width: 616px) {
    font-size: 12px;
  }
`;

const OtpInput = styled.input`
  text-align: center;
  width: 67px;
  height: 67px;
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

  @media (max-width: 616px) {
    width: 32px;
    height: 32px;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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

const ModalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 616px) {
    gap: 8px;
  }
`;

const Wrapper = styled(ModalsContainer)`
  gap: 8px;
`;

interface OtpModalsProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  payload: string;
  isForEmail?: boolean;
}

export default function OtpProfile({
  setOpen,
  payload,
  isForEmail,
}: OtpModalsProps) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [time, setTime] = useState(180);
  const jwtToken = localStorage.getItem('token');
  const sendOtpUrl = isForEmail
    ? 'https://fsw-backend.fly.dev/api/v1/user/email'
    : 'https://fsw-backend.fly.dev/api/v1/user/phone';
  const verifyOtpUrl = isForEmail
    ? 'https://fsw-backend.fly.dev/api/v1/user/email/otp/verify'
    : 'https://fsw-backend.fly.dev/api/v1/user/phone/otp/verify';
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleTimeout = () => {};
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newOtp = [...otp];
    const inputChar = e.target.value;

    if (/^[0-9]$/.test(inputChar)) {
      newOtp[index] = inputChar;
      setOtp(newOtp);

      if (index < inputRefs.length - 1 && inputRefs[index + 1].current) {
        inputRefs[index + 1].current?.focus();
      }
    } else if (inputChar === '') {
      newOtp[index] = '';
      setOtp(newOtp);

      if (index > 0 && inputRefs[index - 1].current) {
        inputRefs[index - 1].current?.focus();
      }
    }
  };

  let otpReq = '';
  for (let i = 0; i < 4; i++) {
    otpReq += otp[i];
  }

  const handleVerification = async () => {
    const otpPayload = {
      otp: otpReq,
    };
    const otpResponse = await fetch(verifyOtpUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(otpPayload),
    });
    const otpStatus = await otpResponse.json();
    console.log(otpStatus);
    console.log(verifyOtpUrl);

    if (otpStatus.code === 200) {
      setOpen(false);
    } else {
      alert('Kode OTP milikmu sudah kadaluarsa');
    }
  };

  const sendOtp = async () => {
    const sendtOtpResponse = await await fetch(sendOtpUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({ payload }),
    });
    const sentOtpStatus = await sendtOtpResponse.json();
    console.log(sentOtpStatus);
    console.log(sendOtpUrl);
    setTime(180);
  };

  return (
    <>
      <ModalsContainer>
        <Wrapper>
          <OtpTittle> Cek Email Kamu</OtpTittle>
          <OtpDesc>Kami sudah mengirimkan kode OTP lewat email kamu</OtpDesc>
        </Wrapper>
        <Wrapper>
          <OtpContainer>
            {otp.map((value, index) => (
              <OtpInput
                key={index}
                value={value}
                type='text'
                onChange={(e) => handleChange(e, index)}
                maxLength={1}
                ref={inputRefs[index]}
              />
            ))}
          </OtpContainer>
          <OtpDesc>
            Kode OTP kadaluwarsa pada{' '}
            <Countdown
              time={time}
              setTime={setTime}
              onTimeout={handleTimeout}
            />
          </OtpDesc>
        </Wrapper>
        <Wrapper>
          <FirstButton type='button' onClick={handleVerification}>
            Verifikasi
          </FirstButton>
          <SecondButton type='button' onClick={sendOtp}>
            Kirim Lagi
          </SecondButton>
        </Wrapper>
      </ModalsContainer>
    </>
  );
}
