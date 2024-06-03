import mongoose from "mongoose";

const mongoConfig = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('DB connection Successful')
    } catch (error) {
        console.log(`Error: ${error}`)
        
    }
}

export default mongoConfig;