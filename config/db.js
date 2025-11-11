import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://sohambhowmick155_db_user:Sohamt129@cluster0.wgsxncp.mongodb.net/Food-del').then(()=>console.log("DB Connceted"));
}