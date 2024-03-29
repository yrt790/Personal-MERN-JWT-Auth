import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

const verifyUser = asyncHandler(async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select('-password');
      next()
    } catch (error) {
      req.status(401);
      throw new Error('Invalid Token, Not Authorized');
    }
  } else {
    res.status(401);
    throw new Error('No Token, Not Authorized');
  }
});

export default verifyUser;
