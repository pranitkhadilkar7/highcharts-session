import { useState } from 'react'
import { RouteContext } from '.'
import { ROUTES_COMPONENTS } from './constant'
import type { Routes } from './type'

export const RouteProvider = ({ children }: { children: React.ReactNode }) => {
  const [route, setRoute] = useState<Routes>('/welcome')

  return (
    <RouteContext.Provider
      value={{ route, component: ROUTES_COMPONENTS[route], setRoute }}
    >
      {children}
    </RouteContext.Provider>
  )
}
