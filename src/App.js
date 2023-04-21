
import { useEffect, useState } from 'react';
import './App.css';
import { getDatabase, ref, push, set ,onChildAdded, onChildChanged, onChildRemoved } from "firebase/database";

function App() {
  const [user , setuser ] = useState("");
  const [chats , setchats ] = useState([])
  const [message, setmessage] = useState("");


  // initialize database connection
    const database = getDatabase();

    const chatsListRef = ref(database, 'chats');


    useEffect(() => {
      onChildAdded(chatsListRef, (data) => {
        setchats(chats => [...chats,data.val()])
      });

      console.log(chats)
    },[])


  const handleSend = function(event){
    // setmessage(event.target.value)

    const newChatRef = push(chatsListRef);
    set(newChatRef, {
        user , message: message
    });
  }

  return (  
  <>

  {user ?     <h1>User : {user}    </h1> :  <div className='userNameinput'>
    <p>Enter Username : </p>
      <input type='text' placeholder='Enter Your Name.. ' onBlur={(event) => setuser(event.target.value)} ></input>
      {/* <button onClick={handlesubmitname}>Enter</button> */}
  </div>}
    

    <div className='chat-container'>

      {chats.map( (chat,key) => {
        return (
          <div key={key} className={`chatbox ${chat.user === user ? "me" : ''}`}>
          <p className={`chat-bubble ${chat.user === user ? "mee" : ''}`} >
            <strong><span>{user}:</span> {message }</strong>
         
          </p>
          </div>
      )})}
</div>

    <div className='input'>
      <input type='text' placeholder='Type... Your Message Here' value={message}  onChange={(e) => setmessage(e.target.value)} ></input>
      <button className='send' onClick={handleSend}>Send</button>
    </div>
  
   </>
   
   )
}

export default App;
