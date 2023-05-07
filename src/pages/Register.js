import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { StyledButton } from "components/Layout";
import { StyledForm, StyledLabel } from "./SignIn";


const Register = () => {

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(register({
            name: form.elements.name.value,
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
                Username
                <input type="text" name="name" />
            </StyledLabel>
            <StyledLabel>
                Email
                <input type="email" name="email" />
            </StyledLabel>
            <StyledLabel>
                Password
                <input type="password" name="password" />
            </StyledLabel>
            <StyledButton type="submit">Register</StyledButton>
        </StyledForm>
    );
};

export default Register;