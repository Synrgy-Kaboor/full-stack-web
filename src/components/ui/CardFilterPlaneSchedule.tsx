import {
  Autocomplete,
  Grid,
  Stack,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  IconButton,
  Slider,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import {
  FlightTakeoffOutlined,
  FlightLandOutlined,
  SwapVertOutlined,
  CalendarMonthOutlined,
  AirlineSeatReclineNormalOutlined,
  EventSeatOutlined,
} from '@mui/icons-material';

import { PassangerSearch } from '../../types/ModalPassagerProps';
import ModalPassanger from '../../components/ui/ModalPassanger';
import ModalClassSeat from '../../components/ui/ModalClassSeat';
import theme from '../../config/theme';
import { CardFilterPlaneScheduleProps } from '../../types/CardFilterPlaneScheduleProps';
import { AdapterDateFns as adapterDate } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { IOSSwitch } from '../core/IOSSwitch';

const CardFilterPlaneSchedule = (props: CardFilterPlaneScheduleProps) => {
  const [homecomingVisible, setHomecomingVisible] = useState(false);
  const [modalPassangerVisible, setModalPassangerVisible] = useState(false);
  const [modalClassSeatVisible, setModalClassSeatVisible] = useState(false);
  const [from, setFrom] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
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
  const [sliderValue, setSliderValue] = useState<number[]>([0, 10000000]);
  const [deparatureDateValue, setDeparatureDateValue] = useState<Date | null>();
  const [arrivalDateValue, setArrivalDateValue] = useState<Date | null>();
  const [listAirPort, setListAirPort] = useState<string[]>([]);
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
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const view = false;
    view ? console.log(event) : '';
    setSliderValue(newValue as number[]);
  };

  const handleSubmit = () => {
    const value = {
      deparature: from,
      arrival: destination,
      deparatureDate: deparatureDateValue,
      arrivalDate: homecomingVisible ? arrivalDateValue : null,
      passanger: passangerValue,
      class: classSeatValue,
      priceRange: props.sliderOn ? sliderValue : null,
    };
    props.onSubmit(value);
  };

  const getListAirPort = async () => {
    const response = await fetch('https://fsw-backend.fly.dev/api/v1/airport');
    const data = await response.json();
    const listOfAirport = data.data.map(
      (item: { id: number; code: string; name: string; timezone: string }) =>
        item.name + ', ' + item.code
    );
    setListAirPort(listOfAirport);
  };
  useEffect(() => {
    getListAirPort();
  }, []);

  return (
    <>
      <Card
        id="main-search-card"
        sx={{ background: '#FFF', zIndex: 2, width: 'max-content' }}
      >
        <CardContent sx={{ padding: '2rem' }}>
          <Stack direction={'column'} spacing={2}>
            <Box
              borderRadius={'0.5rem'}
              border={'1px solid #C2C2C2'}
              sx={{ padding: '1rem 1.5rem' }}
            >
              <Stack
                direction={'row'}
                spacing={2}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Stack direction={'column'} spacing={1} flexGrow={1}>
                  <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <FlightTakeoffOutlined
                      sx={{
                        borderRadius: '50%',
                        background: theme.palette.gradients?.diagonal,
                        padding: '0.5rem',
                        color: 'white',
                        height: '3rem',
                        width: '3rem',
                      }}
                    ></FlightTakeoffOutlined>
                    <Stack direction={'column'} flexGrow={1}>
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
                      <Autocomplete
                        options={listAirPort}
                        value={from ? from : undefined}
                        inputValue={from}
                        onInputChange={(_event, newInputValue) => {
                          setFrom(newInputValue);
                        }}
                        popupIcon={null}
                        disableClearable
                        renderTags={() => null}
                        renderInput={(params) => (
                          <TextField
                            variant="standard"
                            placeholder="Masukkan Bandara Asal"
                            {...params}
                            required
                            sx={{
                              width: '100% !important',
                              color: '#1C1C1E !important',
                              fontWeight: '600 !important',
                              fontStyle: 'normal !important',
                              lineHeight: '1.5rem !important',
                              fontFamily: 'Open Sans !important',
                              fontSize: '2rem',
                            }}
                          />
                        )}
                      ></Autocomplete>
                    </Stack>
                  </Stack>
                  <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <FlightLandOutlined
                      sx={{
                        borderRadius: '50%',
                        background: theme.palette.gradients?.diagonal,
                        padding: '0.5rem',
                        color: 'white',
                        height: '3rem',
                        width: '3rem',
                      }}
                    ></FlightLandOutlined>
                    <Stack direction={'column'} flexGrow={1}>
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
                      <Box flexGrow={1}>
                        <Autocomplete
                          options={listAirPort}
                          popupIcon={null}
                          value={destination ? destination : undefined}
                          inputValue={destination}
                          onInputChange={(_event, newInputValue) => {
                            setDestination(newInputValue);
                          }}
                          disableClearable
                          renderTags={() => null}
                          sx={{ width: '100%' }}
                          renderInput={(params) => (
                            <TextField
                              variant="standard"
                              placeholder="Masukkan Bandara Kepergian"
                              {...params}
                              required
                              sx={{
                                width: '100% !important',
                                color: '#1C1C1E !important',
                                fontWeight: '600 !important',
                                fontStyle: 'normal !important',
                                lineHeight: '1.5rem !important',
                                fontFamily: 'Open Sans !important',
                                fontSize: '2rem',
                                flexGrow: 1,
                              }}
                            />
                          )}
                        ></Autocomplete>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
                <IconButton
                  sx={{
                    borderRadius: '50%',
                    background: theme.palette.gradients?.diagonal,
                    padding: '0.5rem',
                    height: '3rem',
                    width: '3rem',
                    color: 'white',
                  }}
                  onClick={handleSwapFromDestination}
                >
                  <SwapVertOutlined></SwapVertOutlined>
                </IconButton>
              </Stack>
            </Box>
            <Box
              borderRadius={'0.5rem'}
              border={'1px solid #C2C2C2'}
              sx={{ padding: '1rem 1.5rem' }}
            >
              <Stack direction={'column'} spacing={1} width={'100%'}>
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  spacing={2}
                  justifyContent={'space-between'}
                >
                  <CalendarMonthOutlined
                    sx={{
                      borderRadius: '50%',
                      background: theme.palette.gradients?.diagonal,
                      padding: '0.5rem',
                      color: 'white',
                      height: '3rem',
                      width: '3rem',
                    }}
                  ></CalendarMonthOutlined>
                  <Stack direction={'column'} flexGrow={1}>
                    <Box>
                      <LocalizationProvider dateAdapter={adapterDate}>
                        <MobileDatePicker
                          value={deparatureDateValue}
                          onChange={(value) => {
                            setDeparatureDateValue(value);
                          }}
                          disablePast
                          label="Keberangkatan"
                          format="dd MMMM yyyy"
                          sx={{ border: '0px' }}
                        />
                      </LocalizationProvider>
                    </Box>
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
                      height: '3rem',
                      width: '3rem',
                    }}
                  ></CalendarMonthOutlined>
                  <Stack direction={'column'} flexGrow={1}>
                    <Box>
                      <LocalizationProvider dateAdapter={adapterDate}>
                        <MobileDatePicker
                          value={arrivalDateValue}
                          onChange={(value) => {
                            setArrivalDateValue(value);
                          }}
                          disablePast
                          label="Kepulangan"
                          format="dd MMMM yyyy"
                          sx={{ borderTop: '0px' }}
                        />
                      </LocalizationProvider>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
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
                      <AirlineSeatReclineNormalOutlined
                        sx={{
                          borderRadius: '50%',
                          background: theme.palette.gradients?.diagonal,
                          padding: '0.5rem',
                          color: 'white',
                          height: '3rem',
                          width: '3rem',
                        }}
                      ></AirlineSeatReclineNormalOutlined>
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
                      <EventSeatOutlined
                        sx={{
                          borderRadius: '50%',
                          background: theme.palette.gradients?.diagonal,
                          padding: '0.5rem',
                          color: 'white',
                          height: '3rem',
                          width: '3rem',
                        }}
                      ></EventSeatOutlined>
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
            <Box
              borderRadius={'0.5rem'}
              border={'1px solid #C2C2C2'}
              sx={{ padding: '1rem 1.5rem' }}
              display={props.sliderOn ? 'flex' : 'none'}
            >
              <Slider
                getAriaLabel={() => 'price range'}
                value={sliderValue}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                getAriaValueText={(value: number) => `Rp.${value}`}
                max={10000000}
              ></Slider>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  background: theme.palette.gradients?.diagonal,
                  width: '100%',
                  fontFamily: 'Open Sans',
                }}
                onClick={handleSubmit}
              >
                {props.textSubmit}
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
