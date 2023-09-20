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

    
        setError(null);
        localStorage.setItem('user', res.data.data);
        const userDecoded = jwt(res.data.data);
        console.log(res);
        dispatch({type: 'LOGIN', payload: res.data.data})
        setLoader(false);
        if (isAdmin) {
          navigate('/dashboard');
        } else {
          navigate('/account');
        }
      
    } catch(error) {
      console.log(error.message);
    }
  }
  return ({login, loader, error});
}
