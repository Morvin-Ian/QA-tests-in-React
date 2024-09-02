import { createContext } from "react";


export const AuthContext = createContext(null);

export default function AuthState({ children }){
    const [authState, setAuthState] = useState({  });

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}