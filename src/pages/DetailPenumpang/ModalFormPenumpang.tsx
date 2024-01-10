import { Box, Button, Divider, FormControl, FormControlLabel, IconButton, Modal, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    width: '50%',
    boxShadow: 24,
    p: 0,
};

export default function ModalFormPenumpang() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Box p={2} sx={{ 
                    position: 'relative'
                 }}>
                    <IconButton sx={{ 
                        position: 'absolute',
                        top: '50%',
                        left: '5%',
                        transform: 'translateY(-50%)'
                     }}>
                        <ArrowBackIosNewIcon/>
                    </IconButton>
                    <Typography variant="h6" textAlign="center" fontWeight="bold">
                        Detail Penumpang
                    </Typography>
                </Box>
                <Divider/>
                <Stack p={2}>
                     <Typography fontWeight="bold" mb={1}>
                        Info Penumpang
                     </Typography>

                     <FormControl>
                        <Typography fontWeight="bold">Nama Lengkap</Typography>
                        <TextField id="pemesan-name-input" variant="outlined"/>
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
                        >
                            Simpan
                        </Button>
                     </FormControl>
                </Stack>
            </Box>
        </Modal>
    )
}