import React from 'react'
import { useDispatch } from "react-redux";
import { logIn } from 'redux/auth/operations';
import styled from 'styled-components';
import { StyledButton } from 'components/Layout';

export const StyledForm = styled.form`
display:flex;
flex-direction: column;
align-items: center;
`

export const StyledLabel = styled.label`
width: 400px;
display: flex; 
flex-direction: column;
`

const SignIn = () => {
    const dispatch = useDispatch()
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(logIn({
            password: form.elements.password.value,
            email: form.elements.email.value
        }))
        form.reset();
    };

    return (
        <StyledForm
            onSubmit={handleSubmit}
            autoComplete="off">
            <StyledLabel>
                Email
                <input type="email" name="email" />
            </StyledLabel>
            <StyledLabel>
                Password
                <input type="password" name="password" />
            </StyledLabel>
            <StyledButton type="submit">Log In</StyledButton>
        </StyledForm>
    );
}

export default SignIn;