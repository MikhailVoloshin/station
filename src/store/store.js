import { configureStore } from '@reduxjs/toolkit'
import { stationApi } from './rtkq'

export const store = configureStore({
  reducer: {
    [stationApi.reducerPath]: stationApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stationApi.middleware),
})