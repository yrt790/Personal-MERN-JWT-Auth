import express from 'express';
import {
  registerUser,
  loginUser,
  logoutUser,
  updateProfile,
} from '../controllers/userController.js';
import verifyUser from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', verifyUser, logoutUser);
router.put('/profile', verifyUser, updateProfile);

export default router;
