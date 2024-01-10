import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { DialogTitle, styled as muiStyled } from "@mui/material";
import styled from "styled-components";
import ChevronRight from "./../../../assets/chevron-right.svg";

const OtpDialog = muiStyled(Dialog)`
  & .MuiDialog-paper {
    border-radius: 32px;
    background: #fff;
    display: inline-flex;
    padding: 50px 50px 100px 50px;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
    flex-shrink: 0;
    @media (max-width: 616px) {
      padding: 20px 20px 50px 20px;
      gap: 20px;
    }
  }
`;

const TitleModal = muiStyled(DialogTitle)`
  display: flex;
  align-items: center;
  padding: 0;
  margin-left: -12px;
`;

const ModalContent = muiStyled(DialogContent)`
padding : 0 0 20px 0;
`;

const BackIcon = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
  @media (max-width: 616px) {
    width: 24px;
    height: 24px;
  }
`;
const FormTitle = styled.p`
  color: var(--Neutral-09, #1c1c1e);
  font-family: Open Sans;
  font-size: 32px;
  font-style: normal;
  padding: 0;
  font-weight: 700;
  line-height: 40px; /* 125% */
  letter-spacing: -0.75px;
  @media (max-width: 616px) {
    font-size: 16px;
  }
`;

interface ModalsProps {
  open: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}
export default function GlobalModals({ open, children, onClose }: ModalsProps) {
  return (
    <>
      <OtpDialog open={open} onClose={onClose}>
        <TitleModal>
          <BackIcon src={ChevronRight} alt="" onClick={onClose} />
          <FormTitle>Kembali</FormTitle>
        </TitleModal>
        <ModalContent>{children}</ModalContent>
      </OtpDialog>
    </>
  );
}
