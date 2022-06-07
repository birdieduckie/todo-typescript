import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import { Task } from '../../components/Task/Task'

export interface Task {
  id: number | string
  text: string
  checked: boolean
}

export const taskSlice = createSlice({
  name: 'tasks',
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
    // toggleTask: {
    //   prepare: (id: Task['id']) => {
    //     return { payload: id } }
    //   }
    //   reducer: (action: PayloadAction<Task>) => {
    //   Task[id] === action.payload.id ? Task.checked !== Task.checked
    // },
    deleteTask(state, action: PayloadAction<Task['id']>) {
      const filteredState = state.filter(
        ({ id, text, checked }) => id !== action.payload
      )
      console.log(filteredState)
      console.log(action.payload)
    },

    setTasks(state, action: PayloadAction<Task[]>) {
      return action.payload
    },
  },
})

const { actions, reducer } = taskSlice

export const { addTask, deleteTask, setTasks } = actions

export default taskSlice.reducer
