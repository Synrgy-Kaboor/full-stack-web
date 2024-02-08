import {
  Box,
  // Link,
  Card,
  Stack,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  CardActions,
  CardContent,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableContainer,
} from '@mui/material';

// import theme from "../../config/theme";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';

import {
  IDetailAsuransi,
  detailAsuransi,
} from '../../pages/Booking/detailAsuransi';
import { useState } from 'react';

interface IPopUpProps {
  id: number;
  setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

function AssuranceDetailPopUp({ id, setOpenPopUp }: IPopUpProps) {
  const selectedInsurance = detailAsuransi.filter(
    (asuransi: IDetailAsuransi) => {
      return asuransi.id === id;
    }
  )[0];

  return (
    <>
      <DialogTitle>
        <Stack px={10} direction="row" justifyContent="center">
          <ArrowBackIosNewIcon
            onClick={() => setOpenPopUp(false)}
            sx={{
              position: 'absolute',
              left: 20,
              top: 20,
              '&:hover': { cursor: 'pointer' },
            }}
          />
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Perlindungan Ekstra
          </Typography>
        </Stack>
      </DialogTitle>
      <DialogContent dividers>
        <Stack direction="row" spacing={2} mb={2} alignItems="center">
          <HealthAndSafetyOutlinedIcon
            fontSize="large"
            sx={{ color: 'primary.main' }}
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {selectedInsurance.title}
          </Typography>
        </Stack>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'primary.main' }}>
                <TableCell
                  align="center"
                  sx={{ color: 'white', fontSize: '1.5rem' }}
                >
                  Tanggungan
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: 'white', fontSize: '1.5rem' }}
                >
                  Kompensasi
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedInsurance.details.map(
                (detail: { tanggungan: string; kompensasi: string }) => {
                  return (
                    <TableRow>
                      <TableCell sx={{ width: '50%' }}>
                        {detail.tanggungan}
                      </TableCell>
                      <TableCell>{detail.kompensasi}</TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </>
  );
}

export default function AddOnsCard(props: IDetailAsuransi) {
  const [addOns, setAddOns] = useState<boolean>(false);
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);

  function formatPriceToIDR(price: number) {
    const rupiah = new Intl.NumberFormat('en-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumSignificantDigits: 3,
    });

    return rupiah.format(price);
  }

  return (
    <Card variant="outlined">
      <CardContent sx={{ padding: 0 }}>
        <Stack direction="row" m={2} alignItems="center">
          <HealthAndSafetyOutlinedIcon
            fontSize="medium"
            sx={{ color: 'primary.main' }}
          />
          <Typography sx={{ fontWeight: 'bold' }} ml={1}>
            {props.title}
          </Typography>
        </Stack>
        <Divider />
        <Box p={2}>
          {props.descriptions.map((description: string) => {
            return (
              <Stack direction="row">
                <CheckCircleIcon fontSize="small" color="success" />
                <Typography ml={1}>{description}</Typography>
              </Stack>
            );
          })}
          <Stack mt={2}>
            <Typography
              display="inline"
              color="primary.main"
              onClick={() => setOpenPopUp(true)}
              sx={{ '&:hover': { cursor: 'pointer' } }}
            >
              Baca Selengkapnya
            </Typography>
          </Stack>
          {/* </Link> */}
          <Dialog open={openPopUp}>
            <AssuranceDetailPopUp setOpenPopUp={setOpenPopUp} id={props.id} />
          </Dialog>
        </Box>
      </CardContent>
      <CardActions disableSpacing sx={{ padding: '0' }}>
        <Stack
          direction="row"
          px={2}
          py={1}
          m={0}
          alignItems="center"
          sx={{
            bgcolor: 'primary.main',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
            {formatPriceToIDR(props.price)}/pax
          </Typography>
          <IconButton onClick={() => setAddOns(!addOns)}>
            {addOns === true ? (
              <CheckCircleIcon sx={{ color: 'success.light' }} />
            ) : (
              <ControlPointOutlinedIcon sx={{ color: 'white' }} />
            )}
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
}
