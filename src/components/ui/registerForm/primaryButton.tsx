import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

interface ButtonProps {
  label: string;
  handleOnClick?: () => void;
  type: "button" | "submit";
}

const PrimaryButtonStyle = styled(Button)`
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
export default function PrimaryButton({
  label,
  handleOnClick,
  type,
}: ButtonProps) {
  return (
    <PrimaryButtonStyle onClick={handleOnClick} type={type}>
      {label}
    </PrimaryButtonStyle>
  );
}
