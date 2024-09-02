import React, { useContext } from 'react';
import Form from '../../components/common/Form';
import { registerFormControls } from '../../config/inputConfig';
import { AuthContext } from '../../context/Auth';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
    const { registerFormData, setRegisterFormData, firebaseRegistration } = useContext(AuthContext)!;

//-
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const registrationResult = firebaseRegistration();

        if (registrationResult) {
            registrationResult.then(result => {
                if(result.user){
                    updateProfile(result.user,{
                        displayName: registerFormData.name
                    }).then(()=>{
                        if(result.user?.displayName)
                            navigate('/')
                    })
                }
            }
            ).catch(error => 
                console.error("Error during registration:", error)
            );
        } else {
            console.error("firebaseRegistration returned undefined");
        }
    };

    return (
        <Form
            formData={registerFormData}
            setFormData={setRegisterFormData}
            buttonText='Sign Up'
            title='Sign Up'
            formControls={registerFormControls}
            handleSubmit={handleSubmit}
        />
    );
};

export default SignUp;
