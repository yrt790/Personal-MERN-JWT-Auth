import mongoose from "mongoose"

const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    if (conn) {
      console.log("Connect to DB")
      return
    }
    console.log("Could not connect to DB")
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
  
}


export default connectDB