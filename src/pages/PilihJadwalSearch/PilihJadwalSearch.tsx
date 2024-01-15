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
import bgPesawat from '../../assets/ikhroma-bg-pesawat.jpg';
import { useState } from 'react';
import {
  FlightTakeoffOutlined,
  FlightLandOutlined,
  SwapVertOutlined,
  CalendarMonthOutlined,
  Person2Outlined,
} from '@mui/icons-material';
import { Navbar } from '../../components/ui';

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
const PilihJadwalSearch = () => {
  const [KepulanganVisible, setKepulanganVisible] = useState(false);
  const [from, setFrom] = useState<string>();
  const [destination, setDestination] = useState<string>();

  const HandleKepulanganVisible = () => {
    setKepulanganVisible(!KepulanganVisible);
  };

  const HandleSwapFromDestination = () => {
    setFrom(destination);
    setDestination(from);
  };

  return (
    <>
      <Navbar />
      <Grid
        container
        sx={{
          background: `
    linear-gradient(270deg, rgba(58, 66, 255, 0.50) 0%, rgba(123, 82, 171, 0.50) 100%),
    url(${bgPesawat})`,
          paddingBlock: '4rem',
          height: '100vh',
        }}
        rowSpacing={2}
        alignItems={'center'}
      >
        <Grid container item md={7}>
          <Typography
            variant="h3"
            color={'white'}
            fontWeight={'800'}
            fontStyle={'normal'}
            pl={6}
          >
            Tiket Pesawat Murah & Promo Hari Ini
          </Typography>
        </Grid>
        <Grid
          container
          item
          md={5}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Card>
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
                        <Stack
                          direction={'row'}
                          alignItems={'center'}
                          spacing={2}
                        >
                          <FlightTakeoffOutlined
                            sx={{
                              borderRadius: '50%',
                              background: `linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)`,
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
                              }}
                              placeholder="Masukkan kota asal"
                              onChange={(event) => {
                                setFrom(event.target.value);
                              }}
                            />
                          </Stack>
                        </Stack>
                        <Stack
                          direction={'row'}
                          alignItems={'center'}
                          spacing={2}
                        >
                          <FlightLandOutlined
                            sx={{
                              borderRadius: '50%',
                              background: `linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)`,
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
                              }}
                              onChange={(event) => {
                                setDestination(event.target.value);
                                console.log(event.target.value);
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
                          background: `linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)`,
                          padding: '0.5rem',
                          color: 'white',
                        }}
                        onClick={HandleSwapFromDestination}
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
                      xs={10}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <Stack direction={'column'} spacing={1}>
                        <Stack
                          direction={'row'}
                          alignItems={'center'}
                          spacing={2}
                        >
                          <CalendarMonthOutlined
                            sx={{
                              borderRadius: '50%',
                              background: `linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)`,
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
                              }}
                            />
                          </Stack>
                        </Stack>
                        <Stack
                          direction={'row'}
                          alignItems={'center'}
                          spacing={2}
                          display={
                            KepulanganVisible
                              ? { display: 'flex' }
                              : { display: 'none' }
                          }
                        >
                          <CalendarMonthOutlined
                            sx={{
                              borderRadius: '50%',
                              background: `linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)`,
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
                              }}
                            />
                          </Stack>
                        </Stack>
                      </Stack>
                    </Grid>
                    <Grid container item xs={2} justifyContent={'center'}>
                      <IOSSwitch onChange={HandleKepulanganVisible}></IOSSwitch>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container justifyContent={'center'} spacing={1}>
                    <Grid item xs={6}>
                      <Box
                        borderRadius={'0.5rem'}
                        border={'1px solid #C2C2C2'}
                        sx={{ padding: '1rem' }}
                      >
                        <Stack
                          direction={'row'}
                          spacing={2}
                          alignItems={'center'}
                        >
                          <FlightTakeoffOutlined
                            sx={{
                              borderRadius: '50%',
                              background: `linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)`,
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
                            >
                              1 Orang
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        borderRadius={'0.5rem'}
                        border={'1px solid #C2C2C2'}
                        sx={{ padding: '1rem' }}
                      >
                        <Stack
                          direction={'row'}
                          spacing={2}
                          alignItems={'center'}
                        >
                          <Person2Outlined
                            sx={{
                              borderRadius: '50%',
                              background: `linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)`,
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
                            >
                              Ekonomi
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
                      background: `linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)`,
                      width: '100%',
                    }}
                  >
                    Cari
                  </Button>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default PilihJadwalSearch;
