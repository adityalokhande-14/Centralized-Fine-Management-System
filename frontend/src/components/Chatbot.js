import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState(["Welcome! How can I assist you?"]);

  const sendMessage = (msg) => {
    let reply = "Sorry, I don't understand.";
    if (msg.includes("fine")) reply = "You can view your pending fines in the User Dashboard.";
    else if (msg.includes("download")) reply = "Once you pay the fine, you can download documents.";
    
    setMessages([...messages, msg, reply]);
  };

  return (
    <div className="chatbot">
      {messages.map((msg, index) => <p key={index}>{msg}</p>)}
      <input type="text" placeholder="Ask a question..." onKeyDown={(e) => {
        if (e.key === 'Enter') sendMessage(e.target.value);
      }} />
    </div>
  );
};

export default Chatbot;
