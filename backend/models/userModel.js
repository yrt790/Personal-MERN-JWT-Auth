import mongoose from "mongoose";
import bcryptjs from "bcryptjs"
const userSchema = new mongoose.Schema({
  name: {
    type:String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    minLength: 5,
    trim: true
  }
})

userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    next()
  }
  const salt = await bcryptjs.genSalt(10)
  this.password = await bcryptjs.hash(this.password, salt)
  next()
})

userSchema.methods.matchPassword = async function(checkPassword) {
  return await bcryptjs.compare(checkPassword, this.password)
}


const User = mongoose.model("user", userSchema)
export default User