import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.DB_URI)
        console.log("Connection established")
        console.log(connection.connection.host)
    } catch (error) {
        console.log("Error while connecting to the database")
        console.log(error)
    }
}

export default connectDB