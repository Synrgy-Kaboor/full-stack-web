import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Link,
  Avatar,
  Button,
  Slide,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import { useScrollTrigger } from '@mui/material';

import KaboorIcon from '../../assets/logo_kaboor.png';
import PlaneIcon from '../../assets/plane icon.png';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';

import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchUser } from '../../redux/slices/userInfo';

export interface NavbarProps {
  window?: () => Window;
  children?: React.ReactElement;
}

interface INavbarMenu {
  anchorElNav: null | HTMLElement;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
}

function HideOnScroll(props: NavbarProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children!}
    </Slide>
  );
}

function UserLoggedIn(props: INavbarMenu) {
  const navigate = useNavigate();
  const { imageUrl, fullName } = useAppSelector((state) => state.userInfo.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch])

  return (
    <Stack direction="row" spacing={5} alignItems="center">
      {/* Notification */}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        onClick={() => navigate('/profil/notifikasi')}
        sx={{ 
          '&:hover': { cursor: 'pointer' },
          display: { xs: 'none', sm: 'flex' } 
        }}
      >
        <NotificationsNoneOutlinedIcon
          fontSize="large"
          sx={{ color: 'primary.main' }}
        />
        <Typography color="black">Notifikasi</Typography>
      </Stack>

      {/* Pesanan */}
      <Menu
        anchorEl={props.anchorElNav}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(props.anchorElNav)}
        onClose={props.handleCloseNavMenu}
        sx={{ dislay: { xs: 'block', sm: 'none' } }}
      >
        <MenuItem onClick={() => navigate('/profil/notifikasi')}>
          <Typography>Notifikasi</Typography>
        </MenuItem>
        <MenuItem onClick={() => navigate('/profil/pesanan')}>
          <Typography>Pesanan</Typography>
        </MenuItem>
      </Menu>

      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        onClick={() => navigate('/profil/pesanan')}
        sx={{
          '&:hover': { cursor: 'pointer' },
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        <img src={PlaneIcon} alt="" />
        <Typography color="black">Pesanan</Typography>
      </Stack>

      {/* Avatar */}
      {
        imageUrl && 
        <Avatar
          sx={{
            bgcolor: 'primary.main',
            '&:hover': { cursor: 'pointer' },
          }}
          onClick={() => navigate('/profil')}
        >
          <img src={imageUrl} width={'100%'} height={'100%'}/>
        </Avatar>
      }
      {
        !imageUrl && fullName[0] &&
        <Avatar
          sx={{
            bgcolor: 'primary.main',
            '&:hover': { cursor: 'pointer' },
          }}
          onClick={() => navigate('/profil')}
        >
          {fullName[0]}
        </Avatar>
      }
      {
        !imageUrl && !fullName && 
        <Avatar
          sx={{
            bgcolor: 'primary.main',
            '&:hover': { cursor: 'pointer' },
          }}
          onClick={() => navigate('/profil')}
        >
          .
        </Avatar>
      }

    </Stack>
  );
}

function UserNotLoggedIn(props: INavbarMenu) {
  const navigate = useNavigate();

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{ display: { xs: 'none', sm: 'flex' } }}
    >
      <Button
        variant="outlined"
        onClick={() => navigate('auth/register')}
        sx={{ paddingInline: '2rem' }}
      >
        Register
      </Button>
      <Button
        variant="contained"
        onClick={() => navigate('auth/login')}
        sx={{
          paddingInline: '2rem',
          backgroundImage: `linear-gradient(90deg, #7B52AB, #3A42FF)`,
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        Login
      </Button>
      <Menu
        anchorEl={props.anchorElNav}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(props.anchorElNav)}
        onClose={props.handleCloseNavMenu}
        sx={{ dislay: { xs: 'block', sm: 'none' } }}
      >
        <MenuItem onClick={() => navigate('auth/register')}>
          <Typography>Register</Typography>
        </MenuItem>
        <MenuItem onClick={() => navigate('auth/login')}>
          <Typography>Login</Typography>
        </MenuItem>
      </Menu>
    </Stack>
  );
}

export default function Navbar(props: NavbarProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { token } = useAppSelector((state) => state.auth);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navbarProps = { anchorElNav, handleOpenNavMenu, handleCloseNavMenu };

  return (
    <HideOnScroll {...props}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: 'white',
          boxShadow: 'none',
          marginBottom: '1rem',
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: '100%' }}
            >
              {/* Logo */}
              <IconButton
                onClick={handleOpenNavMenu}
                sx={{ display: { sm: 'none', xs: 'flex' } }}
              >
                <MenuIcon sx={{ color: 'gray' }} />
              </IconButton>

              <Link href="/">
                <img src={KaboorIcon} alt="" />
              </Link>

              {/* Content */}
              {token ? (
                <UserLoggedIn {...navbarProps} />
              ) : (
                <UserNotLoggedIn {...navbarProps} />
              )}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
