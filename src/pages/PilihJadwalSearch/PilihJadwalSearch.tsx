import { Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import bgPesawat from '../../assets/ikhroma-bg-pesawat.jpg';
import CardFilterPlaneSchedule from '../../components/ui/CardFilterPlaneSchedule';

const PilihJadwalSearch = () => {
  const newTheme = useTheme();
  const sizeScreen = useMediaQuery(newTheme.breakpoints.up('md'));

  return (
    <>
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
          <CardFilterPlaneSchedule />
        </Grid>
      </Grid>
    </>
  );
};

export default PilihJadwalSearch;
