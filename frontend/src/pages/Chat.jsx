import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { logout } from "../features/authSlice.js";
import { useNavigate } from "react-router-dom";


const socket = io("http://localhost:3000"); // Replace with your backend URL

const Chat = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);


  const handleLogout = () =>{
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/chat/login");
  }


 useEffect(() => {
   // Register the owner (you) when the component mounts
   const loggedInUser = localStorage.getItem("loggedInUser");
   if (loggedInUser === "owner") {
     socket.emit("registerOwner");
   }

   socket.on("chatMessage", ({ senderId, message }) => {
     setMessages((prevMessages) => [
       ...prevMessages,
       { sender: senderId === "owner" ? "You" : "Client", message },
     ]);
   });

   return () => {
     socket.off("chatMessage");
   };
 }, []);

 const sendMessage = () => {
   if (message.trim()) {
     const senderId =
       localStorage.getItem("loggedInUser") === "owner" ? "owner" : socket.id;
     socket.emit("chatMessage", { message, senderId }); // Send message with senderId
     setMessages((prevMessages) => [
       ...prevMessages,
       { sender: "You", message },
     ]);
     setMessage("");
   }
 };

  return (
    <div style={{ padding: "20px" }}>
      <p>Work in Progress! Kindly hold your horses. ThankYou!</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition duration-200"
      >
        Logout
      </button>

      {/* <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Chat Room</h2>
        <button 
        onClick={handleLogout}
        className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition duration-200">
          Logout
        </button>
      </div>

      <div
        style={{
          border: "1px solid black",
          height: "300px",
          overflowY: "scroll",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        style={{ width: "80%", marginRight: "10px" }}
      />
      <button onClick={sendMessage}>Send</button> */}
    </div>
  );
};

export default Chat;
