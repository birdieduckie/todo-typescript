import { combineReducers, configureStore } from "@reduxjs/toolkit";

import taskReducer from "./reducers/tasksSlice";

const rootReducer = combineReducers ({
  taskReducer
})

export const store = configureStore({
    reducer: rootReducer
  })


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch