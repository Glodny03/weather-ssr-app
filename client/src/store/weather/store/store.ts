import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../weatherSlice'

export const createStore = (preloadedState?: { weather: ReturnType<typeof weatherReducer> }) =>
  configureStore({
    reducer: {
      weather: weatherReducer
    },
    preloadedState
  })

export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>
export type AppDispatch = ReturnType<ReturnType<typeof createStore>['dispatch']>
