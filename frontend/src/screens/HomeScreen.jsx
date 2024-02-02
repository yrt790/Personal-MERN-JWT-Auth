import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <section>
      <article className="border w-1/2 m-auto mt-20 text-center p-2 rounded-md">
        <h1 className="text-3xl font-bold ">
          This is a practice project for MERN Auth
        </h1>
        <p className="mt-4">
          In this project, I learn to add authentication to specific routes and
          accessing those routes with redux toolkit
        </p>
      </article>
      <div className="m-auto w-1/2 mt-5 flex justify-between">
        <Link to="/login" className='w-full text-center'>
          <button className="btn btn-primary btn-outline ">
            Sign In
          </button>
        </Link>
        <Link to="/register" className='w-full text-center'>
          <button className="btn btn-primary btn-outline">Sign Up</button>
        </Link>
      </div>
    </section>
  );
};
export default HomeScreen;
