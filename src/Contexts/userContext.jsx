/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react'

export const userContext = createContext(false)

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(false)
  const [visible, setVisible] = useState(true)

  return (
    <userContext.Provider value={{ user, visible, setVisible, setUser }}>
      {children}
    </userContext.Provider>
  )
}
