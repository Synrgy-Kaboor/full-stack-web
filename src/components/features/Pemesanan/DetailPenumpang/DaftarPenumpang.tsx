import { Card, CardContent, Divider, IconButton, Stack, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { IOSSwitch } from '../../../core/IOSSwitch';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { openPenumpangPopup, resetFirstPenumpang, setFirstPenumpangToPemesan } from '../../../../redux/slices/DetailPenumpang';
import { useState } from 'react';


export default function DaftarPenumpang() {
    const { daftarPenumpang } = useAppSelector((state) => state.detailPenumpang);
    const dispatch = useAppDispatch();

    const [switchChecked, setSwitchChecked] = useState(true);

    return (
        <Card variant="outlined">
            <CardContent sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between" mb={2}>
                    <Typography>
                        sama dengan pemesan
                    </Typography>
                    <IOSSwitch defaultChecked onChange={() => {
                        if (switchChecked) {
                            dispatch(resetFirstPenumpang());
                            setSwitchChecked(false);
                        } else {
                            dispatch(setFirstPenumpangToPemesan());
                            setSwitchChecked(true);
                        }
                    }}/>
                </Stack>
                <Divider/>
                <Stack>
                    {
                        daftarPenumpang.map((_, i) => {
                            return <PenumpangRow order={i} key={i}/>
                        })
                    }
                </Stack>
            </CardContent>
        </Card>
    );
}

function PenumpangRow(props: { order: number }) {
    const { daftarPenumpang } = useAppSelector((state) => state.detailPenumpang);
    const dispatch = useAppDispatch();

    return(
        <Stack direction="row" justifyContent="space-between" sx={{ pt: 2 }} alignItems={'center'}>
            {daftarPenumpang[props.order].name && 
                <Typography fontWeight={'bold'}>
                    {`${daftarPenumpang[props.order].honorific}. ${daftarPenumpang[props.order].name}`}
                </Typography>
            }
            {!daftarPenumpang[props.order].name && 
                <Typography>
                    {`Penumpang ${props.order + 1}`}
                </Typography>
            }
            <IconButton onClick={() => dispatch(openPenumpangPopup(props.order))}>
                <EditIcon/>
            </IconButton>
        </Stack>
    );
}