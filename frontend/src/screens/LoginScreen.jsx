import { Button } from 'react-daisyui';
import { Link } from 'react-router-dom';
const LoginScreen = () => {
  return (
    <section className="flex flex-col p-4 items-center justify-center gap-2">
      <form>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email:</span>
          </div>
          <input
            type="email"
            placeholder="Type your email here"
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
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <Button color="primary" className="w-full mt-3 text-2xl">
          Login
        </Button>
      </form>
      <p>
        Dont have an account?
        <Link to="/register">
          <a className='link link-hover text-blue-400'>  Register</a>
        </Link>
      </p>
    </section>
  );
};
export default LoginScreen;
