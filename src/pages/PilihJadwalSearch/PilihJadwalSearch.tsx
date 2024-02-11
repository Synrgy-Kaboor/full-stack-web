import { Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import bgPesawat from '../../assets/ikhroma-bg-pesawat.jpg';
import CardFilterPlaneSchedule from '../../components/ui/CardFilterPlaneSchedule';
import { type CardFilterPlaneScheduleType as filterType } from '../../types/CardFilterPlaneScheduleProps';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
const PilihJadwalSearch = () => {
  const navigate = useNavigate();
  const newTheme = useTheme();
  const sizeScreen = useMediaQuery(newTheme.breakpoints.up('md'));

  const originAirport = useAppSelector(
    (state) => state.searchJadwal.originAirportCode
  );
  const destinationAirport = useAppSelector(
    (state) => state.searchJadwal.destinationAirportCode
  );
  const adults = useAppSelector((state) => state.searchJadwal.numOfAdults);
  const childs = useAppSelector((state) => state.searchJadwal.numOfChildren);
  const babies = useAppSelector((state) => state.searchJadwal.numOfBabies);
  const classCode = useAppSelector((state) => state.searchJadwal.classCode);
  const departureDate = useAppSelector(
    (state) => state.searchJadwal.departureDate
  );
  const handleSubmit = (value: Partial<filterType>): void => {
    console.log(value);
    const url = `/jadwal-keberangkatan/?from=${originAirport}&to=${destinationAirport}&adults=${adults}&kids=${childs}&babies=${babies}&date=${departureDate}&class=${classCode}`;
    navigate(url);
  };

  return (
    <>
      <Grid
        container
        sx={{
          background: `
    linear-gradient(270deg, rgba(58, 66, 255, 0.50) 0%, rgba(123, 82, 171, 0.50) 100%),
    url(${bgPesawat})`,
          paddingBlock: '4rem',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
        }}
        rowSpacing={2}
        alignItems={'center'}
      >
        <Grid container item md={6}>
          <Typography
            variant='h3'
            color={'white'}
            fontWeight={'800'}
            fontStyle={'normal'}
            fontFamily={'Open Sans'}
            pl={sizeScreen ? 6 : 2}
          >
            Tiket Pesawat Murah & Promo Hari Ini
          </Typography>
        </Grid>
        <Grid
          container
          item
          md={6}
          justifyContent={'center'}
          alignItems={'center'}
          position={'relative'}
        >
          <CardFilterPlaneSchedule
            sliderOn={false}
            textSubmit='Cari'
            onSubmit={handleSubmit}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PilihJadwalSearch;
