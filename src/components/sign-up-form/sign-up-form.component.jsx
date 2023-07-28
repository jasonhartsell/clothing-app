import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer } from './sign-up-form.styles.jsx';
import { signUpStart } from "../../store/user/user.reducer";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event, formFields) => {
        event.preventDefault();
    
        const {displayName, email, password, confirmPassword} = formFields;
    
        if (!displayName || !email || !password || !confirmPassword) {
            alert('All fields are required');
            return;
        }
    
        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }
    
        try {
            dispatch(signUpStart({email, password, displayName}));
            resetFormFields();
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            }
    
            console.log('User creation encountered an error', err);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={(event) => handleSubmit(event, formFields)}>
                <FormInput label="Display Name" 
                    inputOptions={{
                        type: "text",
                        required: true,
                        onChange: handleChange,
                        name: "displayName",
                        value: displayName,
                    }}
                />
                <FormInput label="Email" 
                    inputOptions={{
                        type: "email",
                        required: true,
                        onChange: handleChange,
                        name: "email",
                        value: email,
                    }}
                />
                <FormInput label="Password" 
                    inputOptions={{
                        type: "password",
                        required: true,
                        onChange: handleChange,
                        name: "password",
                        value: password,
                    }}
                />
                <FormInput label="Confirm Password" 
                    inputOptions={{
                        type: "password",
                        required: true,
                        onChange: handleChange,
                        name: "confirmPassword",
                        value: confirmPassword,
                    }}
                />

                <Button buttonType={'default'} type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    );
};

export default SignUpForm;
