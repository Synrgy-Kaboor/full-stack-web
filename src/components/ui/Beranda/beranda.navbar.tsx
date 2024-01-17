import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Link,
} from '@mui/material';



export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        boxShadow: 'none',
        marginBottom: '1rem',
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Link href="/register">
            <img src="https://res.cloudinary.com/dgm5qtyrg/image/upload/v1705036450/Logo_2_dmtkt7.png" alt="" />
          </Link>
          <Typography sx={{ flexGrow: 1 }}></Typography>
          <Stack direction="row" spacing={4} alignItems="center">
            <Stack direction="row" spacing={1} alignItems="center">
            <Link href="/login" style={{textDecoration:'none'}}> 
              <button
               style={{
                display: 'flex',
                width: '127px',
                height: '48px',
                padding: '12px 20px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '8px',
                border: '1px solid var(--Primary-01, #3A42FF)',
                background: 'white',
                color: 'var(--Primary-01, #3A42FF)',
                cursor: 'pointer',
              }}
                   >
          
              Register
         
          </button>
          </Link>

            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
            <Link href="/login" style={{textDecoration:'none'}}> 
            <button
            style={{
              display: 'flex',
              width: '127px',  
              height: '48px',  
              padding: '12px 20px',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              border: '1px solid var(--Primary-01, #3A42FF)',
              background: 'var(--Primary-01, linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%))',
              color: '#fff',
              cursor: 'pointer',
               }}
          >
        
            Login
         
          </button>
          </Link>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
