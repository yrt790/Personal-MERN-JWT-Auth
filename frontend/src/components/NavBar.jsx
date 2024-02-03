import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../features/users/userSlice';

const NavBar = () => {
  const userExist = useSelector(getUserInfo);

  return (
    <nav className="navbar bg-base-100 border-b flex justify-between">
      <Link to="/" className="btn btn-ghost text-2xl font-bold">
        Mern Auth
      </Link>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="bg-base-300 dropdown-content z-[1] menu p-2 shadow rounded-box w-52"
        >
          {userExist ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          ) : (
            <li>
              {' '}
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
