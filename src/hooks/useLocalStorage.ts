import { AnyAction } from '@reduxjs/toolkit'
import { useEffect } from 'react'

import { useAppDispatch } from './store'

export const useLocalStorage = <T>(
  items: T[],
  name: string,
  onSetAction: (items: T[]) => AnyAction
): void => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const loadedItems = JSON.parse(localStorage.getItem(name) as string) ?? []

    if (items.length === 0 && loadedItems.length > 0) {
      dispatch(onSetAction(loadedItems))

      return
    }
  }, [items])
}
