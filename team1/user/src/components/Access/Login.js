import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
    LoginDiv,
    LoginForm,
    LoginLabel,
    Red,
    LoginInput,
    LoginSubmitBtn
} from './AccessStyle';

const initialValues = {
    username: '',
    password: ''
}

const Login = props => {
    const [ credentials, setCredentials ] = useState(initialValues);

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [ e.target.name ]: e.target.value
        });
    };

    const login = e => {
        e.preventDefault();
        axios.post('#', credentials)
            .then(res => {
                console.log('Login Response', res);
                window.localStorage.setItem('token', res.data.token);
                props.history.push(`/users/${res.data.id}`);
            })
            .catch(err => console.error('Login Error', err));

        setCredentials(initialValues);
    }

    return (
        <LoginDiv>
            <LoginForm>
                <LoginLabel>Username: <Red>*</Red></LoginLabel>
                <LoginInput 
                    required
                    id = 'username'
                    name = 'username'
                    type = 'text'
                    value = { credentials.username }
                    onChange = { handleChange }
                />

                <LoginLabel>Password: <Red>*</Red></LoginLabel>
                <LoginInput 
                    required
                    id = 'password'
                    name = 'password'
                    type = 'password'
                    value = { credentials.password }
                    onChange = { handleChange }
                />

                <LoginSubmitBtn type = 'submit' onClick = { login }>Submit</LoginSubmitBtn>
            </LoginForm>
        </LoginDiv>
    )
}

export default Login;