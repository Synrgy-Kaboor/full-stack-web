import {
  Divider,
  Stack,
  Typography,
  useTheme,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import { sideBarItem1, exitItem } from '.';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './../../../redux/hooks';
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { fetchUser } from '../../../redux/slices/userInfo';
import { setToken } from '../../../redux/slices/Auth';

interface SidebarProp {
  pathname: string;
}
export default function Sidebar({ pathname }: SidebarProp) {
  const navigate = useNavigate();
  const userInfo = useAppSelector((state) => state.userInfo.user);
  const filterIcon =
    'brightness(0) invert(1) sepia(0) saturate(0) hue-rotate(0deg)';
  const theme = useTheme();
  console.log({ path: pathname });
  const [anchorElNav, setAnchorElNav] = useState<
    null | HTMLElement | SVGSVGElement
  >(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleListItemClick = (index: number) => {
    navigate(`/profil${sideBarItem1[index].route}`);
  };

  function handleLogout() {
    if (confirm('Are you sure you want to log out?')) {
      dispatch(setToken(null));
      localStorage.removeItem('token');
      navigate('/');
    }
  }

  return (
    <>
      <Stack
        sx={{
          border: '1px solid #C2C2C2',
          borderRadius: '8px',
          background: '#FFF',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <Stack
          onClick={() => navigate('/profil')}
          direction={'row'}
          gap={4}
          justifyContent={'space-around'}
          alignItems={'center'}
          padding={'26px 26px 26px 26px'}
        >
          <Avatar
            alt="user-avatar"
            src={userInfo.imageUrl}
            sx={{
              width: '70px',
              height: '70px',
              '@media screen and (max-width: 768px)': {
                width: '50px',
                height: '50px',
              },
            }}
          />
          <Stack sx={{ cursor: 'pointer' }}>
            <Typography variant="h6">{userInfo.fullName}</Typography>
            <Typography variant="body2" color={'#9E9E9E'}>
              Detail Informasi Pribadi
            </Typography>
          </Stack>
          <KeyboardArrowDownIcon
            onClick={(e) => {
              e.stopPropagation();
              setAnchorElNav(e.currentTarget);
            }}
            sx={{ display: { sm: 'none', xs: 'flex' } }}
          />
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={() => setAnchorElNav(null)}
            sx={{ dislay: { xs: 'block', sm: 'none' } }}
          >
            {sideBarItem1.map((data, index) => (
              <MenuItem
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setAnchorElNav(null);
                  handleListItemClick(index);
                }}
              >
                <Typography>{data.text}</Typography>
              </MenuItem>
            ))}
            <MenuItem
              onClick={(e) => {
                e.stopPropagation();
                handleLogout();
              }}
            >
              <Typography>Keluar</Typography>
            </MenuItem>
          </Menu>
        </Stack>
        <Divider
          sx={{
            width: '100%',
            color: '#C2C2C2',
            margin: '10px 0',
            display: { xs: 'none', sm: 'flex' },
          }}
        />
        {sideBarItem1.map((data, index) =>
          index !== 2 ? (
            <Stack
              key={index}
              gap={2}
              direction={'row'}
              sx={{
                alignItems: 'center',
                padding: '10px 45px',
                cursor: 'pointer',
                width: '100%',
                backgroundColor: pathname.includes(
                  `/profil${sideBarItem1[index].route}`
                )
                  ? theme.palette.primary.main
                  : 'transparent',
                display: { xs: 'none', sm: 'flex' },
              }}
              onClick={() => {
                handleListItemClick(index);
              }}
            >
              <img
                src={data.icon}
                alt=""
                width={'32px'}
                height={'32px'}
                style={{
                  filter: pathname.includes(
                    `/profil${sideBarItem1[index].route}`
                  )
                    ? filterIcon
                    : 'none',
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: pathname.includes(
                    `/profil${sideBarItem1[index].route}`
                  )
                    ? '#ffffff'
                    : '#505050',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '26px',
                  letterSpacing: '-0.15px',
                  '@media screen and (max-width: 768px)': {
                    display: 'none',
                  },
                }}
              >
                {data.text}
              </Typography>
            </Stack>
          ) : (
            <>
              <Stack
                key={index}
                gap={2}
                direction={'row'}
                sx={{
                  alignItems: 'center',
                  padding: '10px 45px',
                  cursor: 'pointer',
                  width: '100%',
                  backgroundColor: pathname.includes(
                    `/profil${sideBarItem1[index].route}`
                  )
                    ? theme.palette.primary.main
                    : 'transparent',
                  display: { xs: 'none', sm: 'flex' },
                }}
                onClick={() => {
                  handleListItemClick(index);
                }}
              >
                <img
                  src={data.icon}
                  alt=""
                  width={'32px'}
                  height={'32px'}
                  style={{
                    filter: pathname.includes(
                      `/profil${sideBarItem1[index].route}`
                    )
                      ? filterIcon
                      : 'none',
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: pathname.includes(
                      `/profil${sideBarItem1[index].route}`
                    )
                      ? '#ffffff'
                      : '#505050',
                    fontSize: '18px',
                    fontWeight: 400,
                    lineHeight: '26px',
                    letterSpacing: '-0.15px',
                    '@media screen and (max-width: 768px)': {
                      display: 'none',
                    },
                  }}
                >
                  {data.text}
                </Typography>
              </Stack>
              <Divider
                sx={{
                  width: '100%',
                  color: '#C2C2C2',
                  margin: '10px 0',
                  display: { xs: 'none', sm: 'flex' },
                }}
              />
            </>
          )
        )}
        <Divider
          sx={{
            width: '100%',
            color: '#C2C2C2',
            // margin: "10px 0",
            display: { xs: 'none', sm: 'flex' },
          }}
        />
        <Stack
          gap={2}
          direction={'row'}
          // py={2}
          sx={{
            alignItems: 'center',
            padding: '15px 45px',
            cursor: 'pointer',
            width: '100%',
            display: { xs: 'none', sm: 'flex' },
          }}
          onClick={handleLogout}
        >
          <img src={exitItem.icon} alt="" width={'32px'} height={'32px'} />
          <Typography
            variant="body2"
            sx={{
              color: '#505050',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '26px',
              letterSpacing: '-0.15px',
              '@media screen and (max-width: 768px)': {
                display: 'none',
              },
            }}
          >
            {exitItem.text}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
