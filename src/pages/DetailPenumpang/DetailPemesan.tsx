import { Card, CardContent, Stack, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function DetailPemesan(props: { name: string, phone: string, email: string }) {
    return (
        <Card variant="outlined">
            <CardContent sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between">
                    <Stack>
                        <Typography fontWeight="bold">
                            {props.name}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <LocalPhoneOutlinedIcon/>
                            <Typography>
                                {props.phone}
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <EmailOutlinedIcon/>
                            <Typography>
                                {props.email}
                            </Typography>
                        </Stack>
                    </Stack>
                    <KeyboardArrowRightIcon/>
                </Stack>
            </CardContent>
        </Card>
    )
}