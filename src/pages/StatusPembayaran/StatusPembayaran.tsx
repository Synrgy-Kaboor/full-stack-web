import { Grid, Container, Typography, Button, Box, Stack } from '@mui/material';

export default function StatusPembayaran() {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh', 
        }}
      >
        <Box
          sx={{
            width: '664px',
            height: '655px',
            flexShrink: 0,
            paddingBlockEnd: '2rem',
            borderRadius: '8px',
            border: '1px solid var(--Neutral-05, #C2C2C2)',
            background: 'var(--White, #FFF)',
            boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            p: '2rem', 
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="128" height="127" viewBox="0 0 128 127" fill="none">
          <svg xmlns="http://www.w3.org/2000/svg" width="128" height="127" viewBox="0 0 128 127" fill="none">
            <path d="M64 11.9062C53.7957 11.9063 43.8206 14.9322 35.3361 20.6014C26.8515 26.2706 20.2386 34.3284 16.3336 43.7559C12.4286 53.1834 11.4069 63.5572 13.3976 73.5654C15.3884 83.5737 20.3022 92.7668 27.5177 99.9823C34.7332 107.198 43.9264 112.112 53.9346 114.102C63.9428 116.093 74.3166 115.071 83.7441 111.166C93.1716 107.261 101.229 100.648 106.899 92.1639C112.568 83.6794 115.594 73.7043 115.594 63.5C115.579 49.8209 110.139 36.7062 100.466 27.0337C90.7938 17.3611 77.6791 11.9207 64 11.9062ZM86.6517 54.4016L58.8704 82.1829C58.5018 82.5519 58.0641 82.8446 57.5823 83.0443C57.1005 83.2441 56.5841 83.3469 56.0625 83.3469C55.541 83.3469 55.0245 83.2441 54.5427 83.0443C54.0609 82.8446 53.6232 82.5519 53.2546 82.1829L41.3484 70.2766C40.6037 69.5319 40.1853 68.5219 40.1853 67.4688C40.1853 66.4156 40.6037 65.4056 41.3484 64.6609C42.0931 63.9162 43.1031 63.4978 44.1563 63.4978C45.2094 63.4978 46.2195 63.9162 46.9642 64.6609L56.0625 73.7642L81.0359 48.7859C81.4046 48.4171 81.8424 48.1246 82.3242 47.9251C82.8059 47.7255 83.3223 47.6228 83.8438 47.6228C84.3652 47.6228 84.8816 47.7255 85.3634 47.9251C85.8452 48.1246 86.2829 48.4171 86.6517 48.7859C87.0204 49.1546 87.3129 49.5924 87.5125 50.0741C87.712 50.5559 87.8147 51.0723 87.8147 51.5938C87.8147 52.1152 87.712 52.6316 87.5125 53.1134C87.3129 53.5951 87.0204 54.0329 86.6517 54.4016Z" fill="url(#paint0_linear_981_15443)"/>
            <defs>
              <linearGradient id="paint0_linear_981_15443" x1="115.594" y1="63.5" x2="12.4062" y2="63.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3A42FF"/>
                <stop offset="1" stop-color="#7B52AB"/>
              </linearGradient>
            </defs>
          </svg>
          </svg>
          <Typography variant='h6' fontWeight={'bold'}>Pembayaran Berhasil</Typography>
            <Grid container mt={0} spacing={2} justifyContent="space-between" marginTop={'30px'}>
              <Grid item md={5} xs={6}>
              <Stack marginBottom={'30px'}>
              <Typography textAlign="left" fontSize="18px">Nomor Faktur</Typography>
              <Typography textAlign="left" variant='h6' fontWeight={'bold'}>INV3473843429UI</Typography>
              </Stack>
              <Stack marginBottom={'30px'}>
              <Typography textAlign="left" fontSize="18px">Tanggal</Typography>
              <Typography textAlign="left" variant='h6' fontWeight={'bold'}>23 Desember 2023</Typography>
              </Stack>
              <Stack marginBottom={'30px'}>
              <Typography textAlign="left" fontSize="18px">Jumlah Pembayaran</Typography>
              <Typography textAlign="left" variant='h6' fontWeight={'bold'}>Rp 1.238.000</Typography>
              </Stack>
            </Grid>

            <Grid item md={5} xs={6}>
            <Stack marginBottom={'30px'}>
              <Typography textAlign="right" fontSize="18px">Metode Pembayaran</Typography>
              <Typography textAlign="right" variant='h6' fontWeight={'bold'}>Bank BRI</Typography>
              </Stack>
              <Stack marginBottom={'30px'}>
              <Typography textAlign="right" fontSize="18px">Pukul</Typography>
              <Typography textAlign="right" variant='h6' fontWeight={'bold'}>09.00 WIB</Typography>
              </Stack>
              <Stack marginBottom={'30px'}>
              <Typography textAlign="right" fontSize="18px">Status</Typography>
              <Typography textAlign="right" variant='h6' fontWeight={'bold'}>Sukses</Typography>
              </Stack>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            sx={{
              color: 'transparent',
              backgroundImage: 'linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)',
              WebkitBackgroundClip: 'text',
              border: '1px solid var(--Primary-01, #3A42FF)',
              borderRadius: '8px',
              width: '100%', 
              padding: '12px 20px',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              textTransform: 'initial',
              mt: '2rem', 
              fontWeight:'bold',
            }}
          >
            Download
          </Button>
        </Box>
      </Container>
    </>
  );
}
