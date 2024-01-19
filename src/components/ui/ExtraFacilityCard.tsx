import { Card, CardActions, CardContent, IconButton, Stack, Typography } from '@mui/material';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

export default function ExtraFacilityCard(props: { title: string, caption: string, actionText: string }) {
    return (
        <Card variant="outlined">
            <CardContent sx={{ padding: 2 }}>
                <Typography sx={{ fontWeight: 'bold' }}>
                    {props.title}
                </Typography>
                <Typography>
                    {props.caption}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ padding: '0' }}>
                <Stack
                    direction="row"
                    px={2}
                    py={1}
                    m={0}
                    alignItems="center"
                    sx={{
                      backgroundColor: 'primary.main',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                >
                    <Typography fontWeight={'bold'} color={'white'}>
                        {props.actionText}
                    </Typography>
                    <IconButton>
                        <ControlPointOutlinedIcon sx={{ color: 'white' }}/>
                    </IconButton>
                </Stack>
            </CardActions>
        </Card>
    )
}