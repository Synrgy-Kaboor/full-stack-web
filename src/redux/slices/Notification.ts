import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AlertType } from '../../components/ui';

const initialState : AlertType = {
            'id': 41,
            'totalAdults': 1,
            'totalChildren': 0,
            'totalBabies': 0,
            'classCode': 'E',
            'minimumPrice': 1769137,
            'maximumPrice': 6400268,
            'date': '2024-02-19',
            'originAirport': {
                'id': 1,
                'code': 'SUB',
                'name': 'Juanda International Airport',
                'timezone': 7
            },
            'destinationAirport': {
                'id': 3,
                'code': 'HLP',
                'name': 'Halim Perdanakusuma International Airport',
                'timezone': 7
            }
}

export const FlightAlertSlice = createSlice({
  name: 'filghtAlert',
  initialState: initialState,
  reducers: {
    setFlightAlert : (_, action: PayloadAction<AlertType>) => {
      return {...action.payload}
    }
  }
})

export const {setFlightAlert} = FlightAlertSlice.actions;

export default FlightAlertSlice.reducer