import { Button } from 'react-daisyui';
import { Link } from 'react-router-dom';
const RegisterScreen = () => {
  return (
    <section className="flex flex-col p-4 items-center justify-center gap-2">
      <form>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name:</span>
          </div>
          <input
            type="email"
            placeholder="John Wick"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email:</span>
          </div>
          <input
            type="email"
            placeholder="mrwick@gmail.com"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password:</span>
          </div>
          <input
            type="password"
            placeholder="IloveMyDog"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Confirm Password:</span>
          </div>
          <input
            type="password"
            placeholder="IloveMyDog"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <Button color="primary" className="w-full mt-3 text-2xl">
          Signup
        </Button>
      </form>
      <p>
        Already have an account?
        <Link to="/login">
          <a className="link link-hover text-blue-400"> Login</a>
        </Link>
      </p>
    </section>
  );
};
export default RegisterScreen;
