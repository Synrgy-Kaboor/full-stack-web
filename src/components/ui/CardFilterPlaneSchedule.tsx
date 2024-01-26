import {
  Grid,
  Stack,
  Typography,
  Input,
  Box,
  Switch,
  Card,
  CardContent,
  Button,
  IconButton,
  SwitchProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import {
  FlightTakeoffOutlined,
  FlightLandOutlined,
  SwapVertOutlined,
  CalendarMonthOutlined,
  Person2Outlined,
} from '@mui/icons-material';

import { PassangerSearch } from '../../types/ModalPassagerProps';
import ModalPassanger from '../../components/ui/ModalPassanger';
import ModalClassSeat from '../../components/ui/ModalClassSeat';
import theme from '../../config/theme';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        background:
          theme.palette.mode === 'dark'
            ? `linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)`
            : `linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)`,
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const CardFilterPlaneSchedule = () => {
  const [homecomingVisible, setHomecomingVisible] = useState(false);
  const [modalPassangerVisible, setModalPassangerVisible] = useState(false);
  const [modalClassSeatVisible, setModalClassSeatVisible] = useState(false);
  const [from, setFrom] = useState<string>();
  const [destination, setDestination] = useState<string>();
  const [passangerValue, setPassangerValue] = useState<PassangerSearch>({
    adult: {
      value: 1,
    },
    child: {
      value: 0,
    },
    baby: {
      value: 0,
    },
  });
  const [classSeatValue, setClassSeatValue] = useState<string>('Ekonomi');
  const handleHomecomingVisible = () => {
    setHomecomingVisible(!homecomingVisible);
  };

  const handleModalPassangerVisibleOpen = () => {
    setModalPassangerVisible(true);
  };
  const handleModalPassangerVisibleClose = () => {
    setModalPassangerVisible(false);
  };

  const handleModalPassagerSave = (data: PassangerSearch) => {
    setPassangerValue(data);
    setModalPassangerVisible(false);
  };
  const handleModalClassSeatVisibleOpen = () => {
    setModalClassSeatVisible(true);
  };

  const handleModalClassSeatVisibleClose = () => {
    setModalClassSeatVisible(false);
  };
  const handleModalClassSeatSave = (data: string) => {
    setClassSeatValue(data);
  };

  const handleSwapFromDestination = () => {
    setFrom(destination);
    setDestination(from);
  };

  return (
    <>
      <Card id="main-search-card" sx={{ background: '#FFF', zIndex:2, width: 'max-content' }}>
        <CardContent sx={{ padding: '2rem' }}>
          <Stack direction={'column'} spacing={2}>
            <Box
              borderRadius={'0.5rem'}
              border={'1px solid #C2C2C2'}
              sx={{ padding: '1rem 1.5rem' }}
            >
              <Grid
                container
                justifyContent={'center'}
                alignItems={'center'}
                spacing={2.5}
              >
                <Grid
                  container
                  item
                  xs={10}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Stack direction={'column'} spacing={1}>
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                      <FlightTakeoffOutlined
                        sx={{
                          borderRadius: '50%',
                          background: theme.palette.gradients?.diagonal,
                          padding: '0.5rem',
                          color: 'white',
                        }}
                      ></FlightTakeoffOutlined>
                      <Stack direction={'column'}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            width: '100%',
                            color: '#9E9E9E',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            lineHeight: '1.5rem',
                          }}
                          fontFamily={'Open Sans'}
                        >
                          Dari
                        </Typography>
                        <Input
                          value={from}
                          sx={{
                            width: '100%',
                            color: '#1C1C1E',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            lineHeight: '1.5rem',
                            fontFamily: 'Open Sans',
                          }}
                          placeholder="Masukkan kota asal"
                          onChange={(event) => {
                            setFrom(event.target.value);
                          }}
                        />
                      </Stack>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                      <FlightLandOutlined
                        sx={{
                          borderRadius: '50%',
                          background: theme.palette.gradients?.diagonal,
                          padding: '0.5rem',
                          color: 'white',
                        }}
                      ></FlightLandOutlined>
                      <Stack direction={'column'}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            width: '100%',
                            color: '#9E9E9E',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            lineHeight: '1.5rem',
                          }}
                          fontFamily={'Open Sans'}
                        >
                          Ke
                        </Typography>
                        <Input
                          value={destination}
                          sx={{
                            width: '100%',
                            color: '#1C1C1E',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            lineHeight: '1.5rem',
                            fontFamily: 'Open Sans',
                          }}
                          onChange={(event) => {
                            setDestination(event.target.value);
                          }}
                          placeholder="Masukkan kota tujuan"
                        />
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid container item xs={2} justifyContent={'center'}>
                  <IconButton
                    sx={{
                      borderRadius: '50%',
                      background: theme.palette.gradients?.diagonal,
                      padding: '0.5rem',
                      color: 'white',
                    }}
                    onClick={handleSwapFromDestination}
                  >
                    <SwapVertOutlined></SwapVertOutlined>
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
            <Box
              borderRadius={'0.5rem'}
              border={'1px solid #C2C2C2'}
              sx={{ padding: '1rem 1.5rem' }}
            >
              <Grid
                container
                justifyContent={'center'}
                alignItems={'center'}
                spacing={2.5}
              >
                <Grid
                  container
                  item
                  xs={12}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Stack direction={'column'} spacing={1}>
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                      <CalendarMonthOutlined
                        sx={{
                          borderRadius: '50%',
                          background: theme.palette.gradients?.diagonal,
                          padding: '0.5rem',
                          color: 'white',
                        }}
                      ></CalendarMonthOutlined>
                      <Stack direction={'column'}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            width: '100%',
                            color: '#9E9E9E',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            lineHeight: '1.5rem',
                            letterSpacing: '-0.1px',
                          }}
                          fontFamily={'Open Sans'}
                        >
                          Keberangkatan
                        </Typography>
                        <Input
                          defaultValue="Sabtu, 26 Desember 2023"
                          sx={{
                            width: '100%',
                            color: '#1C1C1E',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            lineHeight: '1.5rem',
                            fontFamily: 'Open Sans',
                          }}
                        />
                      </Stack>
                      <IOSSwitch onChange={handleHomecomingVisible}></IOSSwitch>
                    </Stack>
                    <Stack
                      direction={'row'}
                      alignItems={'center'}
                      spacing={2}
                      display={
                        homecomingVisible
                          ? { display: 'flex' }
                          : { display: 'none' }
                      }
                    >
                      <CalendarMonthOutlined
                        sx={{
                          borderRadius: '50%',
                          background: theme.palette.gradients?.diagonal,
                          padding: '0.5rem',
                          color: 'white',
                        }}
                      ></CalendarMonthOutlined>
                      <Stack direction={'column'}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            width: '100%',
                            color: '#9E9E9E',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            lineHeight: '1.5rem',
                          }}
                          fontFamily={'Open Sans'}
                        >
                          Kepulangan
                        </Typography>
                        <Input
                          defaultValue="Sabtu, 26 Desember 2023"
                          sx={{
                            width: '100%',
                            color: '#1C1C1E',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            lineHeight: '1.5rem',
                            fontFamily: 'Open Sans',
                          }}
                        />
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Grid container justifyContent={'center'} spacing={1}>
                <Grid item xs={12} md={6}>
                  <Box
                    borderRadius={'0.5rem'}
                    border={'1px solid #C2C2C2'}
                    sx={{ padding: '1rem' }}
                    onClick={handleModalPassangerVisibleOpen}
                  >
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                      <FlightTakeoffOutlined
                        sx={{
                          borderRadius: '50%',
                          background: theme.palette.gradients?.diagonal,
                          padding: '0.5rem',
                          color: 'white',
                        }}
                      ></FlightTakeoffOutlined>
                      <Stack>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            width: '100%',
                            color: '#9E9E9E',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            lineHeight: '1.5rem',
                          }}
                          fontFamily={'Open Sans'}
                        >
                          Penumpang
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            width: '100%',
                            color: '#1C1C1E',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            lineHeight: '1.5rem',
                          }}
                          fontFamily={'Open Sans'}
                        >
                          {passangerValue.adult.value +
                            passangerValue.child.value +
                            passangerValue.baby.value}{' '}
                          Orang
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    borderRadius={'0.5rem'}
                    border={'1px solid #C2C2C2'}
                    sx={{ padding: '1rem' }}
                    onClick={handleModalClassSeatVisibleOpen}
                  >
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                      <Person2Outlined
                        sx={{
                          borderRadius: '50%',
                          background: theme.palette.gradients?.diagonal,
                          padding: '0.5rem',
                          color: 'white',
                        }}
                      ></Person2Outlined>
                      <Stack>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            width: '100%',
                            color: '#9E9E9E',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            lineHeight: '1.5rem',
                          }}
                          fontFamily={'Open Sans'}
                        >
                          Kelas
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            width: '100%',
                            color: '#1C1C1E',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            lineHeight: '1.5rem',
                          }}
                          fontFamily={'Open Sans'}
                        >
                          {classSeatValue}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  background: theme.palette.gradients?.diagonal,
                  width: '100%',
                  fontFamily: 'Open Sans',
                }}
              >
                Cari
              </Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>
      <ModalPassanger
        Passanger={passangerValue}
        open={modalPassangerVisible}
        onClose={handleModalPassangerVisibleClose}
        onSave={handleModalPassagerSave}
      />
      <ModalClassSeat
        valueChecked={classSeatValue}
        open={modalClassSeatVisible}
        onClose={handleModalClassSeatVisibleClose}
        onSave={handleModalClassSeatSave}
      />
    </>
  );
};

export default CardFilterPlaneSchedule;
