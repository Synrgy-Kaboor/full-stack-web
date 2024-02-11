import { Grid, Stack, Box } from '@mui/material';
import { useLocation, Outlet } from 'react-router-dom';

import LoginBackgroundImage from '../assets/Login Bg.png';
import RegisterBackgroundImage from '../assets/Rectangle_319.png';

export default function AuthLayout() {
  const location = useLocation();

  return (
    <Box>
      <Grid container sx={{ height: '100vh' }}>
        <Grid item xs={12} md={6} sx={{ maxHeight: '100%' }}>
          <Stack sx={{ display: { xs: 'none', md: 'flex' } }}>
            <img
              src={
                location.pathname.includes('/auth/register')
                  ? RegisterBackgroundImage
                  : LoginBackgroundImage
              }
              alt=""
              height="100%"
              width="52%"
              style={{ position: 'absolute', left: 0, zIndex: -2 }}
            />
          </Stack>
          <Box
            sx={{
              position: 'absolute',
              zIndex: -1,
              height: '100%',
              width: '100%',
              background: `
    linear-gradient(270deg, rgba(58, 66, 255, 0.50) 0%, rgba(123, 82, 171, 0.50) 100%)`,
            }}
          />
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          px={8}
          py={2}
          sx={{
            bgcolor: 'white',
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            '@media screen and (max-width: 899px)': {
              borderTopRightRadius: 30,
              borderBottomLeftRadius: 0,
              padding: '2rem',
            },
          }}
        >
          <Stack sx={{ width: '100%' }}>
            {/* <Typography>Path: {location.pathname}</Typography> */}
            <Outlet />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
