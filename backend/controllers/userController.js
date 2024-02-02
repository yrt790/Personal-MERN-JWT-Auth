import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utlis/generateToken.js';

// @desc  Register a new User
// route  POST /api/user/register
// access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name | !email | !password) {
    throw new Error('All fields are required');
  }

  const duplicate = await User.findOne({ email });

  if (duplicate) {
    throw new Error('Account already exists');
  }

  const user = await User.create({ name, email, password });

  if (!user) {
    throw new Error('Something went wrong. Try Again.');
  }

  res.status(201).json({ message: 'User was created sucessfully.' });
});

// @desc  Login user
// route  POST /api/user
// access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email | !password) {
    throw new Error('All fields are required');
  }

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({ message: 'User has been logged in' });
  } else {
    throw new Error('Email or Password is incorrect');
  }
});

// @desc  Logout
// route  POST /api/user/register
// access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    expires: new Date(1),
  });
  res.status(200).json({ message: 'User has been logged out' });
});

// @desc  Get user profile
// route  GET /api/user/profile
// access private
const getUserProfile = asyncHandler(async (req,res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email
  }
  res.status(200).json({user})
})


// @desc  Register a new User
// route  POST /api/user/register
// access Private
const updateProfile = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name | !email) {
    throw new Error('All fields are required');
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('User does not exist');
  }

  user.name = name;
  user.email = email;

  if (password) {
    user.password = password;
  }

  await user.save();
  res.status(200).json({ message: 'User updated successfully' });
});

export { registerUser, loginUser, logoutUser, updateProfile, getUserProfile };
