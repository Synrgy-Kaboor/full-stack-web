import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Divider, IconButton, Modal, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

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
    setOpen: React.Dispatch<React.SetStateAction<boolean>> 
}) {
    return (
        <Modal
            open={props.open}
            onClose={() => props.setOpen(false)}
        >
            <Box sx={style}>
                <Box p={2} sx={{ 
                    position: 'relative'
                 }}>
                    <IconButton 
                        onClick={() => props.setOpen(false)}
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