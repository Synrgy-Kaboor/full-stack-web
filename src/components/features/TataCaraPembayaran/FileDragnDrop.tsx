import { Box, Button, Card, IconButton, Stack, Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ImageIcon from '@mui/icons-material/Image';
import React from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';

export default function FileInput(props: { fileName: string | null, uploadImage: (event: React.ChangeEvent<HTMLInputElement>) => void, resetFile: () => void }) {
  return (
    <Box>
    <Typography sx={{ mb: 1 }} fontWeight={'bold'}>
      Bukti Pembayaran
    </Typography>
    <Card variant="outlined" sx={{ width: '100%', flexShrink: 1 }}>
      {!props.fileName &&    
        <Button component='label' sx={{ height: '100%', width: '100%', paddingY: '7%' }}> 
          <input type='file' onChange={props.uploadImage} accept='.png,.jpg,.jpeg' hidden/>
          <Stack direction="column" justifyContent="center" alignItems="center" height="100%">
            <UploadFileIcon sx={{ color: '#9E9E9E', fontSize: 50 }}/>
            <Typography
              sx={{
                color: 'var(--Neutral-06, var(--android-bottom-navigation-bottom-navigation-selected-color, #9E9E9E))',
                textAlign: 'center',
                fontFamily: 'Open Sans',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0.1px',
                mt: 1,
                textTransform: 'none'
              }}
            >
              Upload File Disini
            </Typography>
          </Stack>
        </Button>
      }
      
      {
        props.fileName &&
        <Stack direction="row" alignItems={'center'} p={1}>
          <ImageIcon color='primary'/>
          <Typography
            variant="body1"
            sx={{
              color: 'var(--Neutral-06, var(--android-bottom-navigation-bottom-navigation-selected-color, #9E9E9E))',
              textAlign: 'start',
              fontFamily: 'Open Sans',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '20px',
              letterSpacing: '0.1px',
            }}
            flexGrow={1}
            ml={1}
          >
            {props.fileName}
          </Typography>
          <IconButton onClick={props.resetFile}>
            <HighlightOffIcon/>
          </IconButton>
        </Stack>
      }

    </Card>
    </Box>
  );
}
