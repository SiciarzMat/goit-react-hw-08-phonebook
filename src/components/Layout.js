import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from './UserMenu';
import { Suspense } from 'react';
import { Circles } from 'react-loader-spinner';

const Container = styled.main`
  display: grid;
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
`;
// const Logo = styled.div`
//   display: flex;

//   outline: none;
//   cursor: pointer;
//   font-size: 14px;
//   line-height: 1;
//   text-transform: uppercase;
//   font-weight: 700;
// `;
const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  border-bottom: 2px solid black;
  margin-bottom: 100px;
  padding-right: 50px;
`;
export const StyledButton = styled.button`
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border: 1px solid transparent;
  letter-spacing: 2px;
  min-width: 160px;
  max-width: 200px;
  text-transform: uppercase;
  white-space: normal;
  font-weight: 700;
  text-align: center;
  padding: 5px;
  color: #fff;
  background-color: #1e24d7;
  height: 30px;
  margin: 10px;
  :hover {
    transform: scale(1.04);
    background-color: #78bbf5;
  }
`;

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      <Nav>
        {!isLoggedIn && (
          <>
            <StyledButton onClick={() => navigate('login')}>
              Log in
            </StyledButton>
            <StyledButton onClick={() => navigate('register')}>
              Register
            </StyledButton>
          </>
        )}
        {isLoggedIn && <UserMenu />}
      </Nav>
      <Suspense fallback={<Circles />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
