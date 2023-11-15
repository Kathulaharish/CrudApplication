import axios from 'axios'

const URL = 'http://localhost:8080';

export const addUser = async (data)=>{
    try{
        //post api
        // from api we will pass 2-arguments
        // 1. api url and endpoint
        // 2. body
        return await axios.post(`${URL}/add`, data)
    }catch(error){
        console.log('Error while calling addUser api', error)
    }
}