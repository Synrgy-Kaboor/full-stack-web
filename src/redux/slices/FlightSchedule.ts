import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FlightScheduleState } from '../../types/CardFilterPlaneScheduleProps';
import { FlightType } from '../../pages/JadwalPenerbangan';


const initialState : FlightScheduleState = {
  originAirportCode : '',
  destinationAirportCode: '',
  numOfAdults: 1,
  numOfChildren: 0,
  numOfBabies: 0,
  classCode: 'E',
  departureDate: '',
  returnDate: '',
  lowestPrice: 0,
  highestPrice: 0,
  departureFlight: null,
  returnFlight: null,
  isHomeComing: false,
}

export const searchJadwalSlice = createSlice({
    name: 'FlightSchedule',
    initialState: initialState,
    reducers: {
        setOriginAirportCode : (state, action: PayloadAction<string>) => {
          state.originAirportCode = action.payload;
        },
        setDestinationAirportCode : (state, action: PayloadAction<string>) => {
          state.destinationAirportCode = action.payload;
        },
        setNumOfAdults : (state, action: PayloadAction<number>)=>{
          state.numOfAdults = action.payload
        },
        setNumOfChildren : (state, action: PayloadAction<number>)=>{
          state.numOfChildren = action.payload
        },
        setNumOfBabies : (state, action: PayloadAction<number>)=>{
          state.numOfBabies = action.payload
        },
        setClassCode : (state, action: PayloadAction<string>)=>{
          state.classCode = action.payload
        },
        setIsHomeComing : (state, action: PayloadAction<boolean>)=>{
          state.isHomeComing = action.payload
        },
        setDepartureDate : (state, action: PayloadAction<string>)=>{
          state.departureDate = action.payload
        },
        setReturnDate : (state, action: PayloadAction<string>)=>{
          state.returnDate = action.payload
        },
        setLowestPrice : (state, action: PayloadAction<number>)=>{
          state.lowestPrice = action.payload
        },
        setHighestPrice : (state, action: PayloadAction<number>)=>{
          state.highestPrice = action.payload
        },
        setDepartureFlight: (state, action: PayloadAction<FlightType>)=>{
          state.departureFlight = action.payload
        },
        setReturnFlight: (state, action: PayloadAction<FlightType>)=>{
          state.returnFlight = action.payload
        },
        
    }
});

export const { 
    setClassCode, setDepartureFlight, setIsHomeComing, setReturnFlight, setHighestPrice, setLowestPrice, setReturnDate, setDestinationAirportCode, setDepartureDate,  setNumOfAdults, setNumOfBabies, setNumOfChildren, setOriginAirportCode
} = searchJadwalSlice.actions;

export default searchJadwalSlice.reducer;