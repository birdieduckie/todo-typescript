import React from 'react'
import { RootState } from "../store";
import { useAppSelector } from "../hooks/redux";


 export const App = () => {
  const {} = useAppSelector(state => state.taskReducer.)
  return (
    <div> App </div>

  
  );
}


