import axios from "axios";


export const fectChatResponse = async (question) =>{
   
    const API_URL = import.meta.env.VITE_API_URL;;
    try{
        const response = await axios.post(`${API_URL}/api/qna/ask`,{question});
        return response.data;
    }catch(error){
        
        console.error(error);
        throw error;
    }
}

export default fectChatResponse;