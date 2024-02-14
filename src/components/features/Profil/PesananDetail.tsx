import { Box, Divider, Stack, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import Copy from '../../../assets/Copy.svg';
import logo1 from '../../../assets/Logo Pesanan 1.svg';
import logo2 from '../../../assets/Logo Pesanan 2.svg';
import logo3 from '../../../assets/Logo Pesanan 3.svg';
import checker from '../../../assets/Checker.svg';
import plane from '../../../assets/plane icon.png';
import { useEffect, useState } from 'react';
import { BookingData } from '../../../types/BookingData';
import { httpFetch } from '../../../utils/http';
import { BeResponse } from '../../../types/BeResponse';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
  dateToVerboseString,
  durationString,
  getSeatClass,
  timeWithTimezone,
} from '../../../utils/formatter';

const PesananDetail: React.FC<{ type: string }> = (props) => {
  const { id } = useParams<{ id: string }>();
  const [pesanan, setPesanan] = useState<BookingData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    httpFetch<BeResponse<BookingData>>(
      `api/v1/booking/${id}/${props.type}`,
      true,
      {},
      'fsw'
    )
      .then((response) => {
        setPesanan(response.data);
      })
      .catch(() => {
        navigate('/profil/pesanan');
      });
  }, [id, navigate, props.type]);

  const handleCopyClick = (text: string) => {
    navigator.clipboard.writeText(text);
    window.alert('Kode booking telah disalin.');
  };

  const handleDownloadTicket = () => {
    const headers: HeadersInit = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };

    fetch(
      `${import.meta.env['VITE_FSW_BE_URL']}/api/v1/booking/${id}/${
        props.type
      }/ticket`,
      {
        headers,
      }
    )
      .then((response) => response.blob())
      .then((blob) => {
        const hiddenA = document.createElement('a');
        hiddenA.href = window.URL.createObjectURL(blob);
        hiddenA.setAttribute(
          'download',
          `ticket-${pesanan?.id}-${props.type}.pdf`
        );
        document.body.appendChild(hiddenA);
        hiddenA.click();
      });
  };

  return (
    <>
      <Stack
        px={{ md: 6, xs: 4 }}
        py={{ md: 4, xs: 4 }}
        borderRadius={1}
        border={`1px solid ${'#C2C2C2'}`}
        width={'100%'}
        maxWidth={'880px'}
        sx={{
          background: '#FFF',
        }}
        gap={2}
      >
        <Typography variant='h5' color={'#1C1C1E'} fontWeight={700}>
          ID: {pesanan?.id}
        </Typography>
        <Box borderRadius={'8px'} border={'1px solid #C2C2C2'}>
          <Stack
            sx={{ margin: '20px', marginTop: '14px', marginBottom: '16px' }}
          >
            <Typography variant='body2' fontWeight={400} color={'#757575'}>
              Kode Booking
            </Typography>
            <Stack direction={'row'} gap={3}>
              <Typography
                sx={{
                  background:
                    'var(--Primary-01, linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {pesanan?.bookingCode}
              </Typography>
              <Stack
                width={'20px'}
                onClick={() => handleCopyClick(pesanan?.bookingCode || '')}
                style={{ cursor: 'pointer' }}
              >
                <img src={Copy} alt='copy-icon' />
              </Stack>
            </Stack>
          </Stack>
          <Divider />
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            sx={{ margin: '20px', marginTop: '16px', marginBottom: '9px' }}
          >
            <Stack direction={'column'}>
              <Typography variant='body1' fontWeight={600} color={'black'}>
                {pesanan?.flight.plane.airline.name}
              </Typography>
              <Typography variant='body2' fontWeight={400} color={'#757575'}>
                {getSeatClass(pesanan?.classCode || '')}
              </Typography>
            </Stack>
            <Stack width={'52px'}>
              <img
                src={pesanan?.flight.plane.airline.imageUrl}
                alt='maskapai-logo'
              />
            </Stack>
          </Stack>
          <Divider />
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            sx={{ margin: '20px', marginTop: '26px', marginBottom: '27px' }}
          >
            <Stack direction={'column'} justifyContent={'center'}>
              <Typography variant='body2' fontWeight={400} color={'#757575'}>
                {pesanan?.flight.originAirport.code}
              </Typography>
              <Typography variant='body1' fontWeight={600} color={'black'}>
                {timeWithTimezone(
                  new Date(pesanan?.flight.departureDateTime || ''),
                  pesanan?.flight.originAirport.timezone || 0
                )}
              </Typography>
            </Stack>
            <Stack
              direction={'column'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Typography
                variant='body2'
                fontWeight={400}
                color={'#757575'}
                textAlign={'center'}
              >
                {dateToVerboseString(
                  new Date(pesanan?.flight.departureDateTime || ''),
                  pesanan?.flight.originAirport.timezone
                )}
              </Typography>
              <Stack width={'26px'} my={1}>
                <img src={plane} alt='plane-icon' />
              </Stack>
              <Typography
                variant='body2'
                fontWeight={400}
                color={'#757575'}
                textAlign={'center'}
              >
                {durationString(
                  new Date(pesanan?.flight.departureDateTime || ''),
                  new Date(pesanan?.flight.arrivalDateTime || '')
                )}
              </Typography>
            </Stack>
            <Stack direction={'column'} justifyContent={'center'}>
              <Typography
                variant='body2'
                fontWeight={400}
                color={'#757575'}
                textAlign={'end'}
              >
                {pesanan?.flight.destinationAirport.code}
              </Typography>
              <Typography
                variant='body1'
                fontWeight={600}
                color={'black'}
                textAlign={'end'}
              >
                {timeWithTimezone(
                  new Date(pesanan?.flight.arrivalDateTime || ''),
                  pesanan?.flight.originAirport.timezone || 0
                )}
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Box borderRadius={'8px'} border={'1px solid #C2C2C2'}>
          <Typography
            variant='h6'
            fontWeight={600}
            color={'black'}
            sx={{ margin: '20px', marginTop: '14px', marginBottom: '16px' }}
          >
            Penumpang
          </Typography>
          <Divider />
          <Stack>
            <ul style={{ listStyle: 'none' }}>
              {pesanan?.passengers.map((penumpang, index) => (
                <li key={index}>
                  <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    sx={{
                      margin: '20px',
                      marginTop: '14px',
                      marginBottom: '16px',
                    }}
                  >
                    <Stack direction={'column'}>
                      <Stack direction={'row'} gap={1}>
                        <Typography
                          variant='body1'
                          fontWeight={600}
                          color={'#757575'}
                        >
                          {index + 1}.
                        </Typography>
                        <Typography
                          variant='body1'
                          fontWeight={600}
                          color={'black'}
                        >
                          {penumpang.title}.{penumpang.fullName}
                        </Typography>
                      </Stack>
                      <Typography
                        variant='body2'
                        fontWeight={400}
                        color={'#757575'}
                      >
                        Bagasi Kabin 7 kg
                      </Typography>
                      {pesanan?.addBaggage && (
                        <Typography
                          variant='body2'
                          fontWeight={400}
                          color={'#757575'}
                        >
                          Bagasi Tambahan
                        </Typography>
                      )}
                    </Stack>
                    <Stack>
                      {index < pesanan?.totalAdults && (
                        <Typography
                          sx={{
                            background: '#7B52AB',
                            padding: '2px 11px',
                            borderRadius: '16px',
                            color: 'white',
                          }}
                        >
                          Dewasa
                        </Typography>
                      )}
                      {index >= pesanan?.totalAdults &&
                        index <
                          pesanan?.totalAdults + pesanan?.totalChildren && (
                          <Typography
                            sx={{
                              background: '#FFD43A',
                              padding: '2px 11px',
                              borderRadius: '16px',
                              color: 'white',
                            }}
                          >
                            Anak
                          </Typography>
                        )}
                      {index >=
                        pesanan?.totalAdults + pesanan?.totalChildren && (
                        <Typography
                          sx={{
                            background: '#117A42',
                            padding: '2px 11px',
                            borderRadius: '16px',
                            color: 'white',
                          }}
                        >
                          Bayi
                        </Typography>
                      )}
                    </Stack>
                  </Stack>
                </li>
              ))}
            </ul>
          </Stack>
        </Box>

        <Box borderRadius={'8px'} border={'1px solid #C2C2C2'}>
          <Typography
            variant='h6'
            fontWeight={600}
            color={'black'}
            sx={{ margin: '20px', marginTop: '14px', marginBottom: '16px' }}
          >
            Perlindungan Ekstra
          </Typography>
          <Divider />
          <Stack
            direction={'column'}
            gap={1}
            sx={{ margin: '20px', marginTop: '14px', marginBottom: '16px' }}
          >
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Stack direction={'row'} gap={1}>
                <Stack width={'20px'}>
                  <img src={logo1} alt='logo1' />
                </Stack>
                <Typography variant='body2' fontWeight={400} color={'#757575'}>
                  Asuransi Perjalanan
                </Typography>
              </Stack>
              <Stack width={'20px'}>
                {pesanan?.addTravelInsurance && (
                  <img src={checker} alt='checker' />
                )}
                {!pesanan?.addTravelInsurance && <HighlightOffIcon />}
              </Stack>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Stack direction={'row'} gap={1}>
                <Stack width={'20px'}>
                  <img src={logo2} alt='logo2' />
                </Stack>
                <Typography variant='body2' fontWeight={400} color={'#757575'}>
                  Asuransi Bagasi
                </Typography>
              </Stack>
              <Stack width={'20px'}>
                {pesanan?.addBaggageInsurance && (
                  <img src={checker} alt='checker' />
                )}
                {!pesanan?.addBaggageInsurance && <HighlightOffIcon />}
              </Stack>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Stack direction={'row'} gap={1}>
                <Stack width={'20px'}>
                  <img src={logo3} alt='logo3' />
                </Stack>
                <Typography variant='body2' fontWeight={400} color={'#757575'}>
                  Asuransi Keterlambatan
                </Typography>
              </Stack>
              <Stack width={'20px'}>
                {pesanan?.addBaggageInsurance && (
                  <img src={checker} alt='checker' />
                )}
                {!pesanan?.addBaggageInsurance && <HighlightOffIcon />}
              </Stack>
            </Stack>
          </Stack>
        </Box>
        {pesanan?.paymentCompleted && (
          <Stack direction={'row'} justifyContent={'flex-end'}>
            <button
              style={{
                display: 'flex',
                width: '180px',
                height: '48px',
                padding: '12px 20px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '8px',
                border: '1px solid var(--Primary-01, #3A42FF)',
                background: 'white',
                color: 'var(--Primary-01, #3A42FF)',
                cursor: 'pointer',
                fontWeight: '600',
                right: '0%',
              }}
              onClick={handleDownloadTicket}
            >
              Download E-Ticket
            </button>
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default PesananDetail;
