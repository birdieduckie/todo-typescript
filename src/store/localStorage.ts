import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'

import { addTask, toggleTask, deleteTask } from './reducers/tasksSlice'
import { RootState } from './store'

export const localStorageMiddleware = createListenerMiddleware()

export const startLocalStorageListener = (key: keyof RootState) => localStorageMiddleware.startListening({
  matcher: isAnyOf(addTask, toggleTask, deleteTask),
  effect: (_, listener) => {
    const store = listener.getState() as RootState
    const slice = store[key]

    localStorage.setItem(key as string, JSON.stringify(slice))
  },
})
