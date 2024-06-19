/* eslint-disable react-refresh/only-export-components */
import {createContext, useState} from 'react'

export const userContext = createContext(false)

// eslint-disable-next-line react/prop-types
export function UserContextProvider({children}){
    const [user, setUser] = useState(false)

    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )

}

