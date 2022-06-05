import { combineReducers, configureStore } from "@reduxjs/toolkit";

import taskReducer from "./reducers/tasksSlice";

const rootReducer = combineReducers ({
  taskReducer
})

const createStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']