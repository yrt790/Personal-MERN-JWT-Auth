import express from "express"
import {registerUser, loginUser, logoutUser, updateProfile} from "../controllers/userController.js"


const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", logoutUser)
router.put("/profile", updateProfile)



export default router