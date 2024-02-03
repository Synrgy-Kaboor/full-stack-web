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

export default function PopupV2(props: {
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
    // <Modal
    //     open={props.open}
    //     onClose={props.onClose}
    // >
    //     <Box sx={style}>
    //         <Box p={2} sx={{
    //             position: 'relative'
    //          }}>
    //             <IconButton
    //                 onClick={props.onClose}
    //                 sx={{
    //                     position: 'absolute',
    //                     top: '50%',
    //                     left: '5%',
    //                     transform: 'translateY(-50%)'
    //                 }}
    //             >
    //                 <ArrowBackIosNewIcon/>
    //             </IconButton>
    //             <Typography variant="h6" textAlign="center" fontWeight="bold">
    //                 {props.title}
    //             </Typography>
    //         </Box>
    //         <Divider/>
    //         {props.children}
    //     </Box>
    // </Modal>
  );
}
