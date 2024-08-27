import mongoose from "mongoose";

export const connectdb = async ()=>{

    try{

        await mongoose.connect("mongodb://localhost/merndb");
        console.log("db is connected");
    }catch(error){
        console.log(error);
    }
}