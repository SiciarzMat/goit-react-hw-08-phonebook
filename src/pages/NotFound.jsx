import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  });
  return <div>{'404 :('}</div>;
};
export default NotFound;
