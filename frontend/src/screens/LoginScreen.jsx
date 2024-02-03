import { Button } from 'react-daisyui';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useLoginMutation } from '../features/api/userApiSlice';
import { setCredentials } from '../features/users/userSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { isLoading }] = useLoginMutation();

  const onLogin = async (e) => {
    e.preventDefault();
    if (!email | !password) {
      toast.error('All fields are required');
      return;
    }

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <section className="flex flex-col p-4 items-center justify-center gap-2">
      <form onSubmit={onLogin}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email:</span>
          </div>
          <input
            type="email"
            placeholder="Type your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password:</span>
          </div>
          <input
            type="password"
            placeholder="Type your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        {isLoading && (
          <span className="loading loading-spinner loading-md"></span>
        )}
        <Button type="submit" color="primary" className="w-full mt-3 text-2xl">
          Login
        </Button>
      </form>
      <p>
        Dont have an account?
        <Link to="/register" className="link link-hover text-blue-400">
          Register
        </Link>
      </p>
    </section>
  );
};
export default LoginScreen;
