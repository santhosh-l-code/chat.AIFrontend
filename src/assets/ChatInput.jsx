import { useState } from "react";

const ChatInput = ({onSubmit}) =>{

  const [question,setQuestion] = useState("");

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(question.trim()){
      onSubmit(question);
      setQuestion("");
    }
  }

  return (
  <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <form className="d-flex" onSubmit={handleSubmit}>
      <h4 style={{marginRight: '20px'}}>Ask Any Question to AI </h4><br />
      <input 
      id="question" className="form-control"
      type="text"
      placeholder="Search"
      aria-label="Search"
      value={question}
      onChange={()=>{setQuestion(event.target.value)}}/>
      <button className="btn btn-outline-success" 
      type="submit">Search</button>
    </form>
  </div>
</nav>
    
  )
}

export default ChatInput;