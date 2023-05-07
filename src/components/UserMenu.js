import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import styled from "styled-components";
import { StyledButton } from "./Layout";

const StyledDiv = styled.div`
display: flex;
flex-direction: row;
gap: 20px;`

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const handleLogOut = () => dispatch(logOut());
    return (
        <StyledDiv>
            <p><b>Your account:</b> {user.email}</p>
            <StyledButton onClick={handleLogOut}>Log out</StyledButton>
        </StyledDiv>
    )
}

