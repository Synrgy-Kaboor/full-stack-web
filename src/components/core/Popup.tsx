import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Divider, IconButton, Modal, Typography } from '@mui/material';
import { ReactElement } from 'react';

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

export default function Popup(props: { 
    title: string, 
    children: ReactElement, 
    open: boolean,
    onClose: ((event: object) => void)
}) {
    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
        >
            <Box sx={style}>
                <Box p={2} sx={{ 
                    position: 'relative'
                 }}>
                    <IconButton 
                        onClick={props.onClose}
                        sx={{ 
                            position: 'absolute',
                            top: '50%',
                            left: '5%',
                            transform: 'translateY(-50%)'
                        }}
                    >
                        <ArrowBackIosNewIcon/>
                    </IconButton>
                    <Typography variant="h6" textAlign="center" fontWeight="bold">
                        {props.title}
                    </Typography>
                </Box>
                <Divider/>
                {props.children}
            </Box>
        </Modal>
    )
}