import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { UserContextData } from '../context/userContext'; // Make sure this path is correct

const UserProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const { user, setUser } = useContext(UserContextData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.user); // assuming API returns { user: { ... } }
          setIsLoading(false);
        }
      })
      .catch((error) => {
        toast.error('Session expired, please log in again.');
        localStorage.removeItem('token');
        setIsLoading(false);
        navigate('/login');
      });
  }, [token, navigate, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectWrapper;
