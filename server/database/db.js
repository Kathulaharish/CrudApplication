import mongoose from 'mongoose'

const Connection = async (username, password)=>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.kjndt8s.mongodb.net/CrudApplication`
    try{
        await mongoose.connect(URL, {
            useUnifiedTopology: true, 
            useNewUrlParser: true
        });
        console.log("Database connected successfully")
    }catch(error){
        console.log("Error while connecting with the database", error)
    }
}

export default Connection;