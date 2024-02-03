import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCredentials } from '../features/users/userSlice.js';
import { useEffect } from 'react';
import { useLogoutMutation } from '../features/api/user/userApiSlice.js';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  useEffect(() => {
    dispatch(clearCredentials());
    logout();
    navigate('/');
  }, [dispatch, navigate, logout]);

  return <div>Logging Out</div>;
};
export default Logout;
