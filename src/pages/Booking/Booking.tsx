import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import DetailPenumpang from './DetailPenumpang';
import LayananTambahan from './LayananTambahan';
import MetodePembayaran from './MetodePembayaran';
import { httpFetch } from '../../utils/http';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setClassCode, setInitialOrderer, setNumberOfPassengers, setOutboundFlight, setReturnFlight } from '../../redux/slices/Booking';
import { BeResponse } from '../../types/BeResponse';
import { UserPersonalData } from '../../types/UserPersonalData';
import { FlightResponseBody } from '../../types/FlightResponseBody';

export default function Booking() {
  const { currentPage } = useAppSelector((state) => state.booking);
  const [searchParams, ] = useSearchParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); 

  useEffect(() => {
    // Set class code
    dispatch(setClassCode(searchParams.get('classCode') || ''));

    // Set inital number of passengers
    const totalAdults = Number(searchParams.get('totalAdults')) || 0;
    const totalChildren = Number(searchParams.get('totalChildren')) || 0;
    const totalBabies = Number(searchParams.get('totalBabies')) || 0;

    if (!totalAdults && !totalChildren && !totalBabies) {
      navigate('/');
    }

    dispatch(setNumberOfPassengers({ totalAdults, totalChildren, totalBabies }));

    // Get user data
    httpFetch<BeResponse<UserPersonalData>>('api/v1/user', true, {}, 'fsw').then(response => {
      dispatch(setInitialOrderer({
        fullName: response.data.fullName,
        title: response.data.title,
        phone: response.data.phoneNumber,
        email: response.data.email
      }));
    });

    // Get flight Data
    const outboundFlightId = Number(searchParams.get('outboundFlightId'));
    const returnFlightId = Number(searchParams.get('returnFlightId'));
    const classCode = searchParams.get('classCode') || 'E';

    if (outboundFlightId) {
      httpFetch<BeResponse<FlightResponseBody>>(`api/v1/flight/${outboundFlightId}`, true, {
        classCode
      }, 'fsw').then(response => {
        dispatch(setOutboundFlight({ 
          id: response.data.id,
          plane: response.data.plane,
          originAirport: response.data.originAirport,
          destinationAirport: response.data.destinationAirport,
          adultPrice: response.data.adultPrice,
          childPrice: response.data.childPrice,
          babyPrice: response.data.babyPrice,
          departureDateTime: response.data.departureDatetime,
          arrivalDateTime: response.data.arrivalDatetime
        }));
      });
    } else {
      dispatch(setOutboundFlight(null))
    }

    if (returnFlightId) {
      httpFetch<BeResponse<FlightResponseBody>>(`api/v1/flight/${returnFlightId}`, true, {
        classCode
      }, 'fsw').then(response => {
        dispatch(setReturnFlight({ 
          id: response.data.id,
          plane: response.data.plane,
          originAirport: response.data.originAirport,
          destinationAirport: response.data.destinationAirport,
          adultPrice: response.data.adultPrice,
          childPrice: response.data.childPrice,
          babyPrice: response.data.babyPrice,
          departureDateTime: response.data.departureDatetime,
          arrivalDateTime: response.data.arrivalDatetime
        }));
      });
    } else {
      dispatch(setReturnFlight(null))
    }
  }, [dispatch, navigate, searchParams]);

  return (
    <>
      { currentPage == 1 && <DetailPenumpang/> }
      { currentPage == 2 && <LayananTambahan/> }
      { currentPage == 3 && <MetodePembayaran/> }
    </>
  )
}