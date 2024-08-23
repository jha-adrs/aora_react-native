import { createContext, useContext, useEffect } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const GlobalProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setuser] = useState(null)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
    }, [])
    return (
        <GlobalContext.Provider
            value={{}}
        >
            {children}
        </GlobalContext.Provider>
    )
}