import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';
import { type } from 'os';


interface Task {
  id: number | string;
  text: string;
  checked: boolean;
}




export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
        state.push(action.payload)
    },
    toggleTask(state, action: PayloadAction<Task.id>) {},
    deleteTask(state, action) {},
  },
})

const { actions, reducer } = taskSlice

export const { addTask, toggleTask, deleteTask } = actions


export default taskSlice.reducer;