import mongoose from "mongoose";

export const connectDB =async ()=>{
    await mongoose.connect('mongodb+srv://dadhwalsachine_db_user:quizapp123@cluster0.5wywz4v.mongodb.net/QuizApp')
    .then(()=>{console.log('DB CONNECTED...')})
}