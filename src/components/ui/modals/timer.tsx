import {  useEffect } from 'react';
import styled from 'styled-components';

const Timer = styled.p`
  background: var(
    --Primary-01,
    linear-gradient(270deg, #3a42ff 0%, #7b52ab 100%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* Website/Body/Body 4 */
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
  display: inline-block;
  @media (max-width: 616px) {
    font-size: 8px;
  }
`;

interface TimerProps {
  onTimeout: () => void;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>

}

export default function Countdown({ time, onTimeout, setTime}: TimerProps) {

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      onTimeout();
    }
  }, [time, onTimeout, setTime]);


  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  return <Timer>{formatTime(time)}</Timer>;
}
