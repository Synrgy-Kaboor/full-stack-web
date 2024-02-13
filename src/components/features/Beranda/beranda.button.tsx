import { IconButton, Container, Grid, Stack, Typography } from '@mui/material';
import plane from '../../../assets/Kaboor Plane.svg';
import food from '../../../assets/Kaboor Food.svg';
import bagasi from '../../../assets/Kaboor Ekstra Bagasii.svg';
import asuransi from '../../../assets/Kaboor Asuransi.svg';
import { Link } from 'react-router-dom';

export const BerandaButton = () => {
  return (
    <Container>
      <Grid container justifyContent="center" spacing={8}>
      <Grid item>
        <Stack alignItems={'center'} gap={1} width={'98px'}>
          <Link to="/pilih-jadwal-search" style={{width:'100%', height:'98px', borderRadius:'50%'}}>
          <IconButton sx={{background:'linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)', width:'100%', height:'98px'}}>
            <Stack width={'60px'}>
            <img src={plane} alt="plane icon" />
            </Stack>
          </IconButton>
</Link>

          <Typography alignItems={'center'} variant='h6' sx={{ background: 'linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'}}>Pesawat</Typography>
          </Stack>
        </Grid>
        <Grid item>
        <Stack alignItems={'center'} gap={1}>
          <IconButton sx={{background:'linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)', width:'98px', height:'98px'}}>
            <Stack width={'60px'}>
            <img src={food} alt="plane icon" />
            </Stack>
          </IconButton>
          <Typography alignItems={'center'} variant='h6' sx={{ background: 'linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',}}>Reservasi</Typography>
            <Typography alignItems={'center'} variant='h6' sx={{ background: 'linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',}}>Makanan</Typography>
          </Stack>
        </Grid>
        <Grid item>
        <Stack alignItems={'center'} gap={1}>
          <IconButton sx={{background:'linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)', width:'98px', height:'98px'}}>
            <Stack width={'43px'}>
            <img src={bagasi} alt="plane icon" />
            </Stack>
          </IconButton>
          <Typography alignItems={'center'} variant='h6' sx={{ background: 'linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',}}>Tambah</Typography>
            <Typography alignItems={'center'} variant='h6' sx={{ background: 'linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',}}>Bagasi</Typography>
          </Stack>
        </Grid>
        <Grid item>
        <Stack alignItems={'center'} gap={1}>
          <IconButton sx={{background:'linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)', width:'98px', height:'98px'}}>
            <Stack width={'43px'}>
            <img src={asuransi} alt="plane icon" />
            </Stack>
          </IconButton>
          <Typography alignItems={'center'} variant='h6' sx={{ background: 'linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',}}>Asuransi</Typography>
            <Typography alignItems={'center'} variant='h6' sx={{ background: 'linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',}}>Perjalanan</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
