import { Button } from 'react-daisyui';

const ProfileScreen = () => {
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
            <span className="label-text">Current Password:</span>
          </div>
          <input
            type="password"
            placeholder="IloveMyDog"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">New Password:</span>
          </div>
          <input
            type="password"
            placeholder="IloveMyDogVeryMuch"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <Button color="primary" className="w-full mt-3 text-2xl">
          Update
        </Button>
      </form>
    </section>
  );
};
export default ProfileScreen;
