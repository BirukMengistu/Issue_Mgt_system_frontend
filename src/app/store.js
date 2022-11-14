import { configureStore  } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducers from '../features/user/usersSlices';
import  caseReducer from '../features/case/casesSlices';
import  addressReducers from '../features/user/addressSlices'


const store = configureStore({
  reducer: {
    case: caseReducer,
    user: userReducers,
    address: addressReducers,
    counterReducer
  },
});

export default store 