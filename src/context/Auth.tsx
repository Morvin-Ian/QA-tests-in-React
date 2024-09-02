import { createContext, useEffect, useState } from "react";
import { AuthContextType, AuthStateProps, LoginFormData, RegisterFormData } from "../types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User, UserCredential } from "firebase/auth";
import auth from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";



export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthState({ children }: AuthStateProps) {
    const navigate = useNavigate()
    const [registerFormData, setRegisterFormData] = useState<RegisterFormData>({
        name: '',
        email: '',
        password: ''
    });

    const [loginFormData, setLoginFormData] = useState<LoginFormData>({
        email:'',
        password: ''
    })

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const checkAuthState = onAuthStateChanged(
            auth, (currentUser) => {
                setUser(currentUser);
            })

        return () => {
            checkAuthState()
        }
    }, [])

    useEffect(() => {
      if(user) 
        navigate('/')
    }, [user])
    

    const firebaseRegistration = (): Promise<UserCredential> | undefined => {
        const { email, password } = registerFormData;
        try {
            return createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Registration error:", error);
            return undefined
        }
    };

    const firebaseLogin = (): Promise<UserCredential> =>  {
        const { email, password } = loginFormData;
        return signInWithEmailAndPassword(auth, email, password)
    }

    const firebaseLogout = () => {
        signOut(auth)
    }

    return (
        <AuthContext.Provider
            value={{
                registerFormData,
                setRegisterFormData,
                firebaseRegistration,
                loginFormData,
                setLoginFormData,
                firebaseLogin,
                firebaseLogout,
                user
                
            }}>
            {children}
        </AuthContext.Provider>
    );
}
