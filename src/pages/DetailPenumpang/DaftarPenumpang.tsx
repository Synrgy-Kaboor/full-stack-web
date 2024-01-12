import { Card, CardContent, Divider, IconButton, Stack, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { IOSSwitch } from '../../components/ui/IOSSwitch';
import { Penumpang } from '../../types/Penumpang';

export default function DaftarPenumpang(props: { penumpang: Penumpang[], openPopup: (order: number) => void }) {
    return (
        <Card variant="outlined">
            <CardContent sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between" mb={2}>
                    <Typography>
                        sama dengan pemesan
                    </Typography>
                    <IOSSwitch defaultChecked/>
                </Stack>
                <Divider/>
                <Stack>
                    {
                        props.penumpang.map((p, i) => {
                            return <PenumpangRow penumpang={p} order={i} openPopup={props.openPopup}/>
                        })
                    }
                </Stack>
            </CardContent>
        </Card>
    );
}

function PenumpangRow(props: { penumpang: Penumpang, order: number, openPopup: (order: number) => void }) {
    return(
        <Stack direction="row" justifyContent="space-between" sx={{ pt: 2 }} alignItems={'center'}>
            <Typography fontWeight={'bold'}>
                {`${props.penumpang.honorific}. ${props.penumpang.name}`}
            </Typography>
            <IconButton onClick={() => props.openPopup(props.order)}>
                <EditIcon/>
            </IconButton>
        </Stack>
    );
}