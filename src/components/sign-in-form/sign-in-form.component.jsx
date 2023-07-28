import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignUpContainer, ButtonsContainer } from './sign-in-form.styles.jsx';
import { googleSignInStart, emailSignInStart } from "../../store/user/user.reducer";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoole = async () => {
        dispatch(googleSignInStart());
    };

    const handleSubmit = async (event, formFields) => {
        event.preventDefault();
    
        const {email, password} = formFields;
    
        if (!email || !password) {
            alert('All fields are required');
            return;
        }
    
        try {
            dispatch(emailSignInStart({email, password}));
            resetFormFields();
        } catch (err) {
            switch(err.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(err);
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    return (
        <SignUpContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={(event) => handleSubmit(event, formFields)}>
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

                <ButtonsContainer>
                    <Button buttonType={'default'} type='submit'>Sign In</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={signInWithGoole}>Google Sign In</Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    );
};

export default SignInForm;
