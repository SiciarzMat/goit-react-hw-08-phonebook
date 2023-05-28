import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from './castomHook/useAuth';
import { Loader } from './Loader/Loader';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import { SelectIsModalShown, SelectOpenedContact } from 'redux/selectors';
import { EditModal } from './EditModal/EditModal';
import { SearchAppBar } from './AppBar/SearchAppBar';

// const baseUrl = '/goit-react-hw-08-phonebook';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const NotFound = lazy(() => import('pages/NotFound'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isModalShown = useSelector(SelectIsModalShown);
  const openedContact = useSelector(SelectOpenedContact);
  const { isRefreshing } = useAuth();

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<SearchAppBar />}>
          <Route
            path={`/contacts`}
            element={
              <PrivateRoute component={<Contacts />} redirect={'/login'} />
            }
          />
        </Route>
        <Route
          path={`/`}
          element={<PublicRoute component={<Home />} />}
        />
        <Route
          path={`/login`}
          element={<PublicRoute component={<Login />} />}
        />
        <Route
          path={`/register`}
          element={<PublicRoute component={<Register />} />}
        />
        <Route path="*" element={<PublicRoute component={<NotFound />} />} />
      </Routes>
      {isModalShown && <EditModal opendeContact={openedContact} />}
    </Suspense>
  );
};
