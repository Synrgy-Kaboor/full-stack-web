import {
  Card,
  Typography,
  Stack,
} from '@mui/material';

export default function AddOnsCard(props: { title: string; price: number }) {

     return (
    <Card variant="outlined" sx={{padding:'18px', paddingLeft:'24px'}}>
         <Stack>
            <Typography sx={{ fontWeight: 'bold' }} ml={1}>
            {props.title}
            </Typography>
            
          </Stack>
        </Card>
  );
}
