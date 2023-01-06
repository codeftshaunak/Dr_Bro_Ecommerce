import {
  configureStore
} from '@reduxjs/toolkit'
import {
  setupListeners
} from '@reduxjs/toolkit/query'
import {
  userAuthApi
} from '../services/userAuthApi'
import authSlice from '../features/authSlice'
// import userReducer from '../features/userSlice'
export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware),
})

setupListeners(store.dispatch)