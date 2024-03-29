import {
  Grid,
  Typography,
  Stack,
  Button,
  Container,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import bgPesawat from '../../assets/ikhroma-bg-pesawat.jpg';
import CardFilterPlaneSchedule from '../../components/ui/CardFilterPlaneSchedule';
import { type CardFilterPlaneScheduleType as filterType } from '../../types/CardFilterPlaneScheduleProps';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { NotificationAddOutlined } from '@mui/icons-material';

const PilihJadwalSearch = () => {
  const newTheme = useTheme();
  const isSmallScreen = useMediaQuery(newTheme.breakpoints.down('md'));
  const isTabletScreen = useMediaQuery(newTheme.breakpoints.down('lg'));
  const navigate = useNavigate();
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
  const testTanggal = useAppSelector((state) => state.searchJadwal.returnDate);
  const handleSubmit = (value: Partial<filterType>): void => {
    console.log(value);
    console.log('global state', [
      adults,
      childs,
      babies,
      classCode,
      originAirport,
      destinationAirport,
      departureDate,
      testTanggal,
    ]);
    const url = `/jadwal-keberangkatan/?from=${originAirport}&to=${destinationAirport}&adults=${adults}&kids=${childs}&babies=${babies}&date=${departureDate}&class=${classCode}`;
    navigate(url);
  };

  return (
    <Box
      sx={{
        background: `
linear-gradient(270deg, rgba(58, 66, 255, 0.50) 0%, rgba(123, 82, 171, 0.50) 100%),
url(${bgPesawat})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Container>
        <Grid container rowSpacing={2} alignItems={'center'} height={'95vh'}>
          <Grid container item md={6}>
            <Typography
              variant="h3"
              color={'white'}
              fontWeight={'800'}
              fontStyle={'normal'}
              fontFamily={'Open Sans'}
            >
              Tiket Pesawat Murah & Promo Hari Ini
            </Typography>
          </Grid>
          <Grid
            container
            item
            md={6}
            justifyContent={'center'}
            alignItems={isTabletScreen? 'center' :'flex-end'}
            position={'relative'}
            direction={'column'}
          >
            <CardFilterPlaneSchedule
              sliderOn={false}
              textSubmit="Cari"
              onSubmit={handleSubmit}
              homecomingOn={true}
            />
            <Stack direction={isSmallScreen ? `column`: `row`} alignItems={'center'} spacing={4} mt={1.5}>
              <Typography
                variant="h6"
                fontWeight={600}
                fontStyle={'normal'}
                color={'white'}
                fontFamily={'Open Sans'}
              >
                Ingin harga yang sesuai?
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  background: `white`,
                  color: `linear-gradient(270deg, rgba(58, 66, 255, 0.50) 0%, rgba(123, 82, 171, 0.50) 100%)`,
                  backgroundClip: 'border-box',
                  borderRadius: '24px',
                  padding: '8px 10px',
                  textTransform: 'none',
                  '&:hover': {
                    background: `white`,
                    opacity: '0.8',
                  },
                  fontSize: '16px',
                  fontWeight: '600',
                  fontStyle: 'normal',
                }}
                onClick={() => navigate('/profil/saved-price-alert')}
                startIcon={<NotificationAddOutlined />}
              >
                Notifikasi Harga
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PilihJadwalSearch;
