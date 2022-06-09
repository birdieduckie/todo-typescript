import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'

import { Task } from '../../components/Task/Task'

export interface Task {
  id: string
  text: string
  checked: boolean
}

export const TASKS_SLICE = 'tasks'

export const taskSlice = createSlice({
  name: TASKS_SLICE,
  initialState: [] as Task[],
  reducers: {
    addTask: {
      prepare: (text: Task['text']) => {
        const id = nanoid()
        return { payload: { id, text, checked: false } }
      },
      reducer: (state, action: PayloadAction<Task>) => {
        state.push(action.payload)
      },
    },
    toggleTask: (state, action: PayloadAction<Task['id']>) => {
      return state.map((task) =>
        task.id === action.payload ? { ...task, checked: !task.checked } : task
      )
    },
    deleteTask(state, action: PayloadAction<Task['id']>) {
      return state.filter((task) => task.id !== action.payload)
    },
    setTasks(state, action: PayloadAction<Task[]>) {
      return action.payload
    },
  },
})

const { actions, reducer } = taskSlice

export const { addTask, toggleTask, deleteTask, setTasks } = actions

export default taskSlice.reducer
