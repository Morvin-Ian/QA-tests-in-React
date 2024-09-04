import { User, UserCredential } from "firebase/auth";
import { ReactNode } from "react";

export interface InputFieldProps {
    data: {
      name: string;
      label: string;
      type?: string;
      id?: string;
      placeholder?: string;
    };
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormControl {
    type: string;           
    name: string;            
    id: string;              
    placeholder: string;    
    label: string;           
    componentType: string;   
}

  
export interface FormProps<T> {
    formControls: FormControl[];
    formData: T;
    setFormData: React.Dispatch<React.SetStateAction<T>>;
    buttonText: string;
    title?: string;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface LoginFormData {
    email: string;
    password: string;
}

export  interface RegisterFormData {
    name: string;
    email: string;
    password: string;
}

export interface PostFormData {
    title: string;
    description: string;
}

export interface AuthContextType {
    registerFormData: RegisterFormData;
    setRegisterFormData: React.Dispatch<React.SetStateAction<RegisterFormData>>;
    firebaseRegistration: () => Promise<UserCredential> | undefined ;
    user: User | null
    loginFormData: LoginFormData
    setLoginFormData: React.Dispatch<React.SetStateAction<LoginFormData>>;
    firebaseLogin: () => Promise<UserCredential>
    firebaseLogout:() => void
}

export interface AuthStateProps {
    children: ReactNode;
}