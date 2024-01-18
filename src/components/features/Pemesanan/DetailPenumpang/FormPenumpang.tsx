import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import { Penumpang } from '../../../../types/Penumpang';
import { useState } from 'react';
import theme from '../../../../config/theme';

export default function FormPenumpang(props: { changePenumpang: (newPenumpang: Penumpang, order: number) => void, order: number}) {
    const [penumpang, setPenumpang] = useState<Penumpang>({
        name: 'Penumpang 1',
        honorific: ''
    });

    return (
        <Stack p={2}>
            <Typography fontWeight="bold" mb={1}>
            Info Penumpang
            </Typography>

            <FormControl>
            <Typography fontWeight="bold">Nama Lengkap</Typography>
            <TextField id="pemesan-name-input" variant="outlined" onChange={(event) => {
                const newPenumpang = penumpang;
                newPenumpang.name = event.target.value;
                setPenumpang(newPenumpang);
            }}/>
            <Typography variant="caption" mb={1}>*Sesuai dengan KTP</Typography>

            <RadioGroup row 
                sx={{ 
                    width: '100%',
                    justifyContent: 'space-between',
                    mb: 1
                }}
            >
                <FormControlLabel value="Mr" control={<Radio/>} label="Mr"/>
                <FormControlLabel value="Mrs" control={<Radio/>} label="Mrs"/>
                <FormControlLabel value="Miss" control={<Radio/>} label="Miss"/>
            </RadioGroup>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={ () => props.changePenumpang(penumpang, props.order) }
                sx={{ 
                    background: theme.palette.gradients?.horizontal, 
                    width: '100%' 
                }}
            >
                Simpan
            </Button>
            </FormControl>
        </Stack>
    )
}