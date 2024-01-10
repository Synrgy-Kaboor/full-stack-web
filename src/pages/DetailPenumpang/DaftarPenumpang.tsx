import { Card, CardContent, Divider, Stack, Switch, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function DaftarPenumpang(props: { penumpang: string[] }) {
    return (
        <Card variant="outlined">
            <CardContent sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography>
                        sama dengan pemesan
                    </Typography>
                    <Switch defaultChecked/>
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
        <Stack direction="row" justifyContent="space-between" sx={{ pt: 2 }}>
            <Typography fontWeight={'bold'}>
                {props.name}
            </Typography>
            <EditIcon/>
        </Stack>
    );
}