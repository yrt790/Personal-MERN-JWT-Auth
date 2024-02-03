import { Button } from 'react-daisyui';
import { useSelector } from 'react-redux';
import { getUserInfo, setCredentials } from '../features/users/userSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useUpdateMutation } from '../features/api/user/userApiSlice';
import { useDispatch } from 'react-redux';

const ProfileScreen = () => {
  const userInfo = useSelector(getUserInfo);

  const revealConfirmPassword = async () => {
    const input = document.getElementById('confirmPassword');
    if (!input) {
      return;
    }
    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  };

  const revealPassword = async () => {
    const input = document.getElementById('password');
    if (!input) {
      return;
    }
    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  };

  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [update, { isLoading }] = useUpdateMutation();
  const dispatch = useDispatch();

  const onUpdate = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('All fields are required');
      return;
    }

    try {
      const res = await update({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success('Update Successful');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <section className="flex flex-col p-4 items-center justify-center gap-2">
      <form onSubmit={onUpdate}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name:</span>
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email:</span>
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">New Password:</span>
          </div>
          <div className="flex w-[110%] items-center">
            <input
              type="password"
              placeholder="Your Current Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <button
              className="w-[25px] h-[25px] fill-current ml-1"
              type="button"
              onClick={revealPassword}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
              </svg>
            </button>
          </div>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Confirm New Password:</span>
          </div>
          <div className="flex w-[110%] items-center">
            <input
              type="password"
              placeholder="Your New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />

            <button
              className="w-[25px] h-[25px] fill-current ml-1"
              type="button"
              onClick={revealConfirmPassword}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
              </svg>
            </button>
          </div>
        </label>
        {isLoading && (
          <span className="loading loading-spinner loading-md"></span>
        )}
        <Button type="submit" color="primary" className="w-full mt-3 text-2xl">
          Update
        </Button>
      </form>
    </section>
  );
};
export default ProfileScreen;
