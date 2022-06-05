import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { type } from 'os';


interface Task {
  id: number;
  value: string;
  checked: boolean;
}

interface TaskState {
  tasks: Task[];
  isLoading: boolean;
}

const initialState: TaskState = {
  tasks: [],
  isLoading: false
}


export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    
  },
})



export default taskSlice.reducer;