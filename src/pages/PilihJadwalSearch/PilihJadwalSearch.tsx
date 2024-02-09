import { Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import bgPesawat from '../../assets/ikhroma-bg-pesawat.jpg';
import CardFilterPlaneSchedule from '../../components/ui/CardFilterPlaneSchedule';
import { type CardFilterPlaneScheduleType as filterType } from '../../types/CardFilterPlaneScheduleProps';


const PilihJadwalSearch = () => {
  const newTheme = useTheme();
  const sizeScreen = useMediaQuery(newTheme.breakpoints.up('md'));
 
  const handleSubmit = (value: Partial<filterType>):void => {
    console.log(value);
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
          height: '100%',
        }}
        rowSpacing={2}
        alignItems={'center'}
      >
        <Grid container item md={6}>
          <Typography
            variant="h3"
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
            textSubmit="Cari"
            onSubmit={handleSubmit}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PilihJadwalSearch;
