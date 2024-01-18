import { Card, CardContent, IconButton, Stack, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Pemesan } from '../../../../types/Pemesan';
import React from 'react';

export default function DetailPemesan(props: { pemesan: Pemesan, setOpenPopup: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <Card variant="outlined">
            <CardContent sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between">
                    <Stack>
                        <Typography fontWeight="bold">
                            {`${props.pemesan.honorific}. ${props.pemesan.name}`}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <LocalPhoneOutlinedIcon/>
                            <Typography>
                                {props.pemesan.phone}
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <EmailOutlinedIcon/>
                            <Typography>
                                {props.pemesan.email}
                            </Typography>
                        </Stack>
                    </Stack>
                    <IconButton
                        onClick={() => props.setOpenPopup(true)} 
                        sx={{ 
                            height: 'fit-content'
                        }}
                    >
                        <KeyboardArrowRightIcon/>
                    </IconButton>
                </Stack>
            </CardContent>
        </Card>
    )
}