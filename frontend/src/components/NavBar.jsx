import { Link } from 'react-router-dom';
import { Dropdown } from 'react-daisyui';
const NavBar = () => {
  return (
    <nav className="navbar bg-base-100 border-b">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          {' '}
          <a>Mern Auth</a>
        </Link>
      </div>
      <div className="flex-none dropdown dropdown-end">
        <Dropdown>
          <Dropdown.Toggle>
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
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-52 bg-base-300">
            <Link to="/profile" >
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Link to="/logout" >
              <Dropdown.Item>Logout</Dropdown.Item>
            </Link>

          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};
export default NavBar;
