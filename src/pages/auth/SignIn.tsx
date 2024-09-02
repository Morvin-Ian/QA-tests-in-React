import React, { useContext } from 'react'
import Form from '../../components/common/Form';
import {LoginFormControls} from "../../config/inputConfig"
import { AuthContext } from '../../context/Auth';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate()
    const {loginFormData, setLoginFormData, firebaseLogin} = useContext(AuthContext)!

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        firebaseLogin().then((result) => {
            if(result)
                navigate('/')
        })
    };

    return (
        <Form
            formData={loginFormData}
            setFormData={setLoginFormData}
            formControls={LoginFormControls}
            buttonText="Sign In"
            title='Sign In'
            handleSubmit={handleSubmit}
        />
    )
}

export default SignIn