import mongoose from 'mongoose'

export const connectDB = async() => {

    const uri = process.env.MONGO_URI

    if(!uri){
        throw new Error("Mongo uri is missing!");
    }
    
    try{
        await mongoose.connect(uri)
        console.log("Connected to database!");
    }catch(error){
        console.error("Error Connecting database!");
    }
}