import { Box, Card, CardActions, CardContent, IconButton, Stack, Typography } from '@mui/material';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { numToRp } from '../../utils/formatter';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';

export default function ExtraFacilityCard(props: { title: string, caption: string, price: number, changeState: (payload: boolean) => void }) {
  const [checked, setChecked] = useState<boolean>(false); 
  
  return (
        <Card variant="outlined">
          <CardContent sx={{ padding: 0 }}>
            <Stack direction="row" px={2} pt={2} alignItems="center">
              <Typography sx={{ fontWeight: 'bold' }} ml={1}>
                {props.title}
              </Typography>
            </Stack>
            <Box px={2} py={1}>
              <Typography ml={1}>{props.caption}</Typography>
            </Box>
          </CardContent>
          <CardActions disableSpacing sx={{ padding: '0' }}>
            <Stack
              direction="row"
              px={2}
              py={1}
              m={0}
              alignItems="center"
              sx={{
                bgcolor: 'primary.main',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
                {numToRp(props.price)}/pax
              </Typography>
              <IconButton onClick={() => {
                const changedCheck = !checked;
                setChecked(changedCheck);
                props.changeState(changedCheck);
              }}>
                {checked === true ? (
                  <CheckCircleIcon sx={{ color: 'success.light' }} />
                ) : (
                  <ControlPointOutlinedIcon sx={{ color: 'white' }} />
                )}
              </IconButton>
            </Stack>
          </CardActions>
        </Card>
    )
}