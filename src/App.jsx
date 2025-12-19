import { useState } from 'react'
import './App.css'

function App() {
  const [generalInfo,setGeneralInfo]=useState({
    name:'',
    email:'',
    phone:''
  });
  const [isSubmitted,setIsSubmitted]=useState(false);
  function handleInputChange(e){
    let nam=e.target.name;
    let val=e.target.value;
    setGeneralInfo({...generalInfo,[nam]:val});

  }
  function handleSubmit(e){
    e.preventDefault();
    setIsSubmitted(true);
  }
  function handleEdit(){
    setIsSubmitted(false);
  }

  return (
    <>
      {!isSubmitted?(
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={generalInfo.name} onChange={handleInputChange}/>
          <label>Email:</label>
          <input type="email" name="email" value={generalInfo.email} onChange={handleInputChange} />
          <label>Phone:</label>
          <input type="numeric" name="phone" value={generalInfo.phone} onChange={handleInputChange} />
          <button type="submit">Submit Info</button>
        </form>
      ):(
        <div>
          <h2>Name: {generalInfo.name} </h2>
          <h2>Email: {generalInfo.email}</h2>
          <h2>Phone: {generalInfo.phone}</h2>
          <button onClick={handleEdit}>Edit</button>
        </div>
        
      )}
    </>
  )
}

export default App
