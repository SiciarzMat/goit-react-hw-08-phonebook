import { Layout } from "./Layout";
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { useEffect } from "react";
import { useAuth } from "hooks/useAuth";
import { Circles } from "react-loader-spinner";
import styled from "styled-components";
import { lazy } from 'react';
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

const Home = lazy(() => import("../pages/Home"));
const Phonebook = lazy(() => import("../pages/Phonebook"));
const Register = lazy(() => import("../pages/Register"));
const SignIn = lazy(() => import("../pages/SignIn"));


export const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ?
    (<StyledDiv>
      <Circles />
    </StyledDiv>)

    : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={<Register />}
              redirectTo='/contacts' />}
          />

          <Route
            path="/login"
            element={<RestrictedRoute component={<SignIn />}
              redirectTo='/contacts'
            />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<Phonebook />} redirectTo='/login' />}
          />
        </Route>
      </Routes>
    );
};
