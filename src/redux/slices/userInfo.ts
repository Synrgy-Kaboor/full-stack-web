import { User } from '../../types/User';
import { PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';


const jwtToken = localStorage.getItem('token')
const userApi = 'https://fsw-backend.fly.dev/api/v1/user'



// // const userInfo = async (jwtToken : string | null, userApi: string)=> {
// //   if (jwtToken){
// //     const user = await fetch(userApi,
// //     {
// //       method: 'GET',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         Authorization: `Bearer ${jwtToken}`,
// //       },
// //     }
// //   );
// //   const updateUserRespond = await user.json();
// //   console.log({ responseGue: updateUserRespond });
// //   return updateUserRespond;
// //   }
// //   else {
// //     return {
// //       title: '',
// //       fullName: '',
// //       gender: '',
// //       birthday: '',
// //       nik: '',
// //       nation: '',
// //       city: '',
// //       address: '',
// //       isWni: true,
// //       imageName: '',
// //       imageUrl: ''
// //     } 
// //   }
// // }

// // const InitialUser = userInfo (jwtToken, userApi)



// export const {setUserInfo} = userSlice.actions;

// export default userSlice.reducer;



const initialUser : User =  {
        title: '',
        fullName: '',
        gender: '',
        birthday: '',
        nik: '',
        nation: '',
        city: '',
        address: '',
        isWni: true,
        imageName: '',
        imageUrl: ''
      }

interface InitialState {
  loading: boolean,
  user: User,
  error: string | undefined
}

const initialState: InitialState = {
  loading: false,
  user: initialUser,
  error: ''
}

export const fetchUser = createAsyncThunk('user/fetchUser', async ()=>{
const userRespond = await fetch(userApi,{
  headers: {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${jwtToken}`,
}});
  const userInfo = await userRespond.json()
  console.log(userInfo);
  return userInfo.data
})

export const userSlice = createSlice({
  name:'user',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<{imageName: string, imageUrl: string}>) => {
      state.user.imageName = action.payload.imageName;
      state.user.imageUrl = action.payload.imageUrl;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.user.title = action.payload
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.user.gender = action.payload
    }
  }, 
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action)=>{
      state.loading = false;
      state.user = action.payload
      state.error = ''
    })
    builder.addCase(fetchUser.rejected, (state, action)=>{
      state.loading = false;
      state.user = initialUser
      state.error = action.error.message
    })
  }
})

export const {
  setImage,
  setTitle,
  setGender
} = userSlice.actions;

export default userSlice.reducer;