import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Pemesan } from '../../../../types/Pemesan';
import theme from '../../../../config/theme';

export default function FormPemesan(props: { changePemesan: (newPemesan: Pemesan) => void}) {
    const [pemesan, setPemesan] = useState<Pemesan>({
        name: 'Pemesan 1',
        honorific: '',
        phone: '',
        email: ''
    });

    return (
        <Stack p={2}>
            <Typography variant="caption">
            Data ini akan digunakan untuk pengiriman E-Tiket
            </Typography>
            <FormControl>
            <Typography fontWeight="bold">Nama Lengkap</Typography>
            <TextField id="pemesan-name-input" variant="outlined" onChange={(event) => {
                const newPemesan = pemesan;
                newPemesan.name = event.target.value;
                setPemesan(newPemesan);
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

            <Typography fontWeight="bold">Nomor Telepon</Typography>
            <TextField id="pemesan-phone-input" variant="outlined"/>
            <Typography variant="caption" mb={1}>*Nomor Telepon Aktif</Typography>

            <Typography fontWeight="bold">Alamat Email</Typography>
            <TextField id="pemesan-email-input" variant="outlined"/>
            <Typography variant="caption" mb={3}>E-Ticket akan dikirimkan ke alamat Email ini</Typography>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={() => props.changePemesan(pemesan)}
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