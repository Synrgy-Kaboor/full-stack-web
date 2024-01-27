import { Box, Stack, Typography } from '@mui/material';
import theme from '../../../config/theme';

type DataLinkType = {
  name: string;
  url: string;
  iconUrl: string;
};
const ListCustomerServiceKaboor = () => {
  const data: DataLinkType[] = [
    {
      name: 'whatsapp',
      url: 'https://web.whatsapp.com/',
      iconUrl:
        'https://cdn.iconscout.com/icon/free/png-512/free-whatsapp-42-189793.png',
    },
  ];
  return (
    <Stack justifyContent={'center'} gap={1}>
      <Typography variant="h6" fontWeight={400} color={'#000'}>
        Hubungi Customer Service{' '}
        <Box
          component={'span'}
          sx={{
            background: `${theme.palette.gradients?.diagonal}`,
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Kaboor
        </Box>
        {' '}Melalui :
      </Typography>
      <Stack justifyContent="center" direction={'row'} alignItems="center">
        {data.map((item) => (
          <a href={item.url} key={item.name} target="_blank">
            <img
              width={'48px'}
              height={'48px'}
              src={item.iconUrl}
              alt={item.name}
            />
          </a>
        ))}
      </Stack>
    </Stack>
  );
};

export { ListCustomerServiceKaboor };
