import { ReactElement, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { setToken } from '../../../redux/slices/Auth';

function jwtPastExpiry(token: string): boolean {
  try {
    const jwt = JSON.parse(atob(token.split('.')[1]));
    return jwt.exp * 1000 <= Date.now();
  } catch (e) {
    return true;
  }
}

export default function ProtectedRoute(props: { children: ReactElement }) {
  const token = useAppSelector((state) => state.auth.token);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || jwtPastExpiry(token)) {
      localStorage.removeItem('token');
      dispatch(setToken(null));
      navigate('/');
    }
  }, [dispatch, location, navigate, token]);

  return props.children
}