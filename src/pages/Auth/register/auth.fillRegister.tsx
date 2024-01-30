import styled from 'styled-components';
import Cover from './../../../assets/Rectangle_319.png';
import RegisterForm from '../../../components/features/Auth/register/registerForm';

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
    height: 140vh;
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
    height: 140vh;
  }
`;

interface FillRegisterProps {
  email: string;
}
export default function FillRegister({ email }: FillRegisterProps) {
  return (
    <Main>
      <Image alt="" src={Cover} />
      <Layer />
      <RegisterForm email={email} />
    </Main>
  );
}
