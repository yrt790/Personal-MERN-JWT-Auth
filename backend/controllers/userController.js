import asyncHandler from 'express-async-handler';

// @desc  Register a new User
// route  POST /api/user/register
// access Public
const registerUser = asyncHandler(async (req, res) => {
  const {name,email,password} = req.body
  console.log(req.body)
  res.status(200).json({ name,email,password});
});

// @desc  Login user
// route  POST /api/user
// access Public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Login User' });
});

// @desc  Register a new User
// route  POST /api/user/register
// access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Logout User' });
});

// @desc  Register a new User
// route  POST /api/user/register
// access Public
const updateProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update User Profile' });
});


export {registerUser, loginUser, logoutUser, updateProfile}

