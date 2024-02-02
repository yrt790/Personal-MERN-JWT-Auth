import express from 'express';
import {
  registerUser,
  loginUser,
  logoutUser,
  updateProfile,
  getUserProfile,
} from '../controllers/userController.js';
import verifyUser from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', verifyUser, logoutUser);
router
  .route('/profile')
  .put(verifyUser, updateProfile)
  .get(verifyUser, getUserProfile);

export default router;
