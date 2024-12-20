import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatInput from './assets/ChatInput'
import ChatResponse from './assets/ChatResponse'
import NavBar from './assets/NavBar'
import { fectChatResponse } from './services/api'

function App() {

  const [response,setResponse] = useState(null);
  const [loading,setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    try{
      const apiResponse = await fectChatResponse(question);
      setResponse(apiResponse);
    }catch(error){
      console.log(error);
      alert("failed to get the response..");
    }finally{
      setLoading(false);
    }
  }



  return (
    <div className='app-container'>
    
      <NavBar/>
      <ChatInput onSubmit={handleQuestionSubmit}/>
      {
        loading &&<h3 id='load'>Loading</h3>
       }
      
      <ChatResponse response={response}/>
    </div>
  )
}

export default App
