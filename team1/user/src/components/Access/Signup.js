import React, { useState } from 'react';
import axios from 'axios';

import {
    SignupDiv,
    SignupForm,
    SignupLabel,
    Red,
    SignupInput,
    SignupSubmitBtn
} from './AccessStyle';

const initialVal = {
    username: '',
    password: '',
    rePassword: ''
}

const Signup = props => {
    const [ newUserVal, setNewUserVal ] = useState(initialVal);

    const signup = e => {
        e.preventDefault();
        axios.post('#', newUserVal)
            .then(res => {
                console.log('Signup Response', res);
                props.history.push('/users');
            })
            .catch(err => console.error('Signup Error', err));
    }

    const handleChange = e => {
        setNewUserVal({
            ...newUserVal,
            [ e.target.name ]: e.target.value
        });
    };

    return (
        <SignupDiv>
            <SignupForm>
                <SignupLabel>Username: <Red>*</Red></SignupLabel>
                <SignupInput 
                    required
                    id = 'username'
                    name = 'username'
                    type = 'text'
                    value = { newUserVal.username }
                    onChange = { handleChange }
                />

                <SignupLabel>Password: <Red>*</Red></SignupLabel>
                <SignupInput 
                    required
                    id = 'password'
                    name = 'password'
                    type = 'password'
                    value = { newUserVal.password }
                    onChange = { handleChange }
                />

                <SignupLabel>Re-enter Password: <Red>*</Red></SignupLabel>
                <SignupInput 
                    required
                    id = 'rePassword'
                    name = 'rePassword'
                    type = 'password'
                    value = { newUserVal.rePassword }
                    onChange = { handleChange }
                />

                <SignupSubmitBtn type = 'submit' onClick = { signup }>Submit</SignupSubmitBtn>
            </SignupForm>
        </SignupDiv>
    )
}

export default Signup;