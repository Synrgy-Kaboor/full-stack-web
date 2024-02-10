import {
  Grid,
  Stack,
  Typography,
  Box,
  Modal,
  IconButton,
  Divider,
  Button,
  Radio,
} from '@mui/material';
import { ArrowBackIosOutlined } from '@mui/icons-material';
import { ModalClassSeatProps } from '../../types/ModalClassSeatProps';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { getFlightClass } from '.';
import { setClassCode } from '../../redux/slices/FlightSchedule';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#FFF',
  border: '1px solid #C2C2C2',
  boxShadow: 24,
  borderRadius: 3,
  px: 9,
  py: 3,
};

const ModalClassSeat = (props: ModalClassSeatProps) => {
  const dispatch = useAppDispatch();
  const [valueChecked, setValueChecked] = useState<string>(props.valueChecked);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueChecked((event.target as HTMLInputElement).value);
    dispatch(
      setClassCode(getFlightClass((event.target as HTMLInputElement).value))
    );
  };
  const handleClose = () => {
    setValueChecked(props.valueChecked);
    props.onClose();
  };
  const handleSave = () => {
    props.onSave(valueChecked);
    props.onClose();
  };
  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      id='modal-passanger'
    >
      <Box sx={modalStyle} width={'auto'}>
        <Stack alignItems={'center'} width={'100%'} spacing={1}>
          <Box
            position={'relative'}
            width={'100%'}
            alignItems={'center'}
            display={'flex'}
          >
            <IconButton sx={{ position: 'absolute' }} onClick={handleClose}>
              <ArrowBackIosOutlined></ArrowBackIosOutlined>
            </IconButton>
            <Typography
              variant='h4'
              fontWeight={700}
              textAlign={'center'}
              width={'100%'}
              fontFamily={'Open Sans'}
            >
              Kelas
            </Typography>
          </Box>
          <Divider sx={{ width: '100%' }} />
          <Box width={'100%'}>
            <Grid
              container
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Grid item xs={11}>
                <Stack>
                  <Typography
                    variant='h6'
                    fontWeight={600}
                    fontFamily={'Open Sans'}
                  >
                    Ekonomi
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    fontWeight={400}
                    color={'#9E9E9E'}
                    fontFamily={'Open Sans'}
                  >
                    Tiket pesawat murah, sesuai kebutuhan Anda.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={1} width={'100%'} justifyContent={'flex-end'}>
                <Radio
                  checked={valueChecked === 'Ekonomi'}
                  onChange={handleChange}
                  value='Ekonomi'
                  name='radio-buttons'
                  inputProps={{ 'aria-label': 'Ekonomi' }}
                />
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ width: '100%' }} />
          <Box width={'100%'}>
            <Grid
              container
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Grid item xs={11}>
                <Stack>
                  <Typography
                    variant='h6'
                    fontWeight={600}
                    fontFamily={'Open Sans'}
                  >
                    Ekonomi Premium
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    fontWeight={400}
                    color={'#9E9E9E'}
                    fontFamily={'Open Sans'}
                  >
                    Terbang hemat, tapi tetap nyaman.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={1} width={'100%'}>
                <Radio
                  checked={valueChecked === 'Ekonomi P'}
                  onChange={handleChange}
                  value='Ekonomi P'
                  name='radio-buttons'
                  inputProps={{ 'aria-label': 'Ekonomi P' }}
                />
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ width: '100%' }} />
          <Box width={'100%'}>
            <Grid
              container
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Grid item xs={11}>
                <Stack>
                  <Typography
                    variant='h6'
                    fontWeight={600}
                    fontFamily={'Open Sans'}
                  >
                    Bisnis
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    fontWeight={400}
                    color={'#9E9E9E'}
                    fontFamily={'Open Sans'}
                  >
                    Terbang berkesan dengan check-in tanpa antrian dan kursi
                    istimewa.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={1} width={'100%'}>
                <Radio
                  checked={valueChecked === 'Bisnis'}
                  onChange={handleChange}
                  value='Bisnis'
                  name='radio-buttons'
                  inputProps={{ 'aria-label': 'Bisnis' }}
                />
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ width: '100%' }} />
          <Box width={'100%'}>
            <Grid
              container
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Grid item xs={11}>
                <Stack>
                  <Typography
                    variant='h6'
                    fontWeight={600}
                    fontFamily={'Open Sans'}
                  >
                    First Class
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    fontWeight={400}
                    color={'#9E9E9E'}
                    fontFamily={'Open Sans'}
                  >
                    Terbang berkelas, dengan layanan yang tak terlupakan.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={1} width={'100%'}>
                <Radio
                  checked={valueChecked === 'First Class'}
                  onChange={handleChange}
                  value='First Class'
                  name='radio-buttons'
                  inputProps={{ 'aria-label': 'First Class' }}
                />
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ width: '100%' }} />
          <Divider sx={{ width: '100%', borderColor: '#FFF' }} />
          <Divider sx={{ width: '100%', borderColor: '#FFF' }} />
          <Box width={'100%'}>
            <Button
              variant='contained'
              sx={{
                background: `background: theme.palette.gradients?.diagonal`,
                width: '100%',
                fontFamily: 'Open Sans',
              }}
              onClick={handleSave}
            >
              Simpan
            </Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ModalClassSeat;
