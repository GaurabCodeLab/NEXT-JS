import mongoose from "mongoose";

const dbConnection = async ()=>{
    const options = {
        dbName : "crud-project",
        user : "Suman1634",
        pass : "Raja1634"
    };

    try {
        await mongoose.connect("mongodb+srv://Suman1634:Raja1634@crud.qmbxjpm.mongodb.net/crud-project?retryWrites=true&w=majority&appName=CRUD", options);
        console.log("Database connected");
    } catch (error) {
        console.log("Error in connecting Database", error);
    }
};

export default dbConnection;