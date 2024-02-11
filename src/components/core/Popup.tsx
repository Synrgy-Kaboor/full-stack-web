import {
  //   Box,
  //   Divider,
  //   IconButton,
  //   Modal,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
} from '@mui/material';
import { ReactElement } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Popup(props: {
  title: string;
  children: ReactElement;
  open: boolean;
  onClose: (event: object) => void;
}) {
  return (
    <Dialog open={props.open} fullWidth>
      <DialogTitle>
        <Stack px={10} direction="row" justifyContent="center">
          <ArrowBackIosNewIcon
            onClick={props.onClose}
            sx={{
              position: 'absolute',
              left: 20,
              top: 20,
              '&:hover': { cursor: 'pointer' },
            }}
          />
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {props.title}
          </Typography>
        </Stack>
      </DialogTitle>
      <DialogContent dividers>{props.children}</DialogContent>
    </Dialog>
  );
}
