import { AnyAction } from '@reduxjs/toolkit'
import { useEffect } from 'react'

import { useAppDispatch } from './store'

export const useSave = <T>(
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

    localStorage.setItem(name, JSON.stringify(items))
  }, [items])
}
