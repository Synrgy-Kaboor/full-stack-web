import { useParams } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import SliderPrice from '../../shared/Profil/sliderPrice';

const NotifDetail = () => {
  // get jadwal delay api with id
  const { notifId } = useParams();
  return (
    <>
      <Stack
        direction={'column'}
        maxWidth={'880px'}
        alignItems={'start'}
        sx={{
          width: '100%',
          height: '100%',
          padding: '34px 43px',
          borderRadius: '8px',
          border: '1px solid #C2C2C2',
          background: 'white',
        }}
        gap={2}
      >
        <Typography
          sx={{
            color: '#000',
            fontFamily: 'Open Sans',
            fontSize: '24px',
            fontWeight: 700,
            letterSpacing: '-0.5px',
          }}
        >
          {`${notifId}`}
        </Typography>
        <SliderPrice />
      </Stack>
    </>
  );
};

export default NotifDetail;
