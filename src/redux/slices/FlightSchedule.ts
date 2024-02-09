import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { Pemesan } from '../../types/Pemesan';
// import { Penumpang } from '../../types/Penumpang';


export const searchJadwalSlice = createSlice({
    name: 'FlightSchedule',
    initialState: {
        originCity : '',
        destinationCity: '',
        flightDate: '',
        numOfAdults: 0,
        numOfKids: 0,
        numOfBabies: 0,
        classCode: ''
    },
    reducers: {
        setOriginCity : (state, action: PayloadAction<string>) => {
          state.originCity = action.payload;
        },
        setDestinationCity : (state, action: PayloadAction<string>) => {
          state.destinationCity = action.payload;
        },
        flightDate : (state, action: PayloadAction<string>) => {
          state.destinationCity = action.payload;
        },
        setNumOfAdults : (state, action: PayloadAction<number>)=>{
          state.numOfKids = action.payload
        },
        setNumOfKids : (state, action: PayloadAction<number>)=>{
          state.numOfKids = action.payload
        },
        setNumOfBabies : (state, action: PayloadAction<number>)=>{
          state.numOfKids = action.payload
        },
        setClassCode : (state, action: PayloadAction<string>)=>{
          state.classCode = action.payload
        }
        
    }
});

export const { 
    setClassCode, setDestinationCity, setNumOfAdults, setNumOfBabies, setNumOfKids, setOriginCity
} = searchJadwalSlice.actions;

export default searchJadwalSlice.reducer;