import { FC } from 'react'

import { Control } from '../components/Control/Control'
import { Tasks } from '../components/Tasks/Tasks'

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <>
      <Control />
      <Tasks />
    </>
  )
}
