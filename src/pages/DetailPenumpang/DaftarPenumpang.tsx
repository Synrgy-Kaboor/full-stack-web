import { Card, CardContent, Divider, IconButton, Stack, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { IOSSwitch } from '../../components/ui/IOSSwitch';

export default function DaftarPenumpang(props: { penumpang: string[] }) {
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
                        props.penumpang.map((p) => {
                            return <PenumpangRow name={p}/>
                        })
                    }
                </Stack>
            </CardContent>
        </Card>
    );
}

function PenumpangRow(props: { name: string }) {
    return(
        <Stack direction="row" justifyContent="space-between" sx={{ pt: 2 }} alignItems={'center'}>
            <Typography fontWeight={'bold'}>
                {props.name}
            </Typography>
            <IconButton>
                <EditIcon/>
            </IconButton>
        </Stack>
    );
}