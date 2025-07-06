import { createContext } from 'react'
import type { RouteContextType } from './type'

export const RouteContext = createContext<RouteContextType>({
  route: '/',
  component: null,
  setRoute: () => {},
})

export * from './type'
export * from './constant'
export * from './RouteProvider'
export * from './useRoute'
