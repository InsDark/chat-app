import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        mongoose.set("strictQuery" , false)
        await mongoose.connect('mongodb://127.0.0.1/chat')
        console.log('db connected')
    } catch (e) {
        console.log(e)
        if (e instanceof Error) {
            console.log(e.message)
        }
    }
}