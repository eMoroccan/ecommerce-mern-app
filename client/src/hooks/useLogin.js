import {useState} from 'react';
import {useAuthContext} from './useAuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'

export const useLogin = () => {
  const {isAdmin} = useAuthContext();
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const {dispatch} = useAuthContext();
  const navigate = useNavigate();

  const login = async (username, password) => {
    setLoader(true);
    setError(null);
    try {
      const body = {
        "username": username,
        "password": password
      }
      const res = await axios.post('/api/users/login', body);

      if (res.data.status === "ok") {
        setError(null);
        localStorage.setItem('user', res.data.data);
        const userDecoded = jwt(res.data.data);
        dispatch({type: 'LOGIN', payload: res})
        dispatch({ type: 'SET_ADMIN', payload: userDecoded.admin });
        setLoader(false);
        if (isAdmin) {
          navigate('/dashboard');
        } else if (!isAdmin) {
          const res1 = await axios.post('/api/carts/create/'+ userDecoded.id);
          if (res1.data.status === "error") {
            navigate('/account');
          } 
        }
      } else {
        setLoader(false);
        setError(res.data.error);
      }
    } catch(error) {
      setLoader(false);
      navigate('/account');
    }
  }
  return ({login, loader, error});
}
