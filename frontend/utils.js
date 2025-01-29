import { toast } from "react-toastify";

export const handleSuccess = (msg) => {
  toast.success(msg, {
    position: "top-right",
  });
};

export const handleError = (msg) => {
  toast.error(msg, {
    position: "top-right",
  });
};



// //import React, { useState, useEffect } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:3000"); // Replace with your backend URL

// const Chat = () => {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   // Listen for messages from the server
//   useEffect(() => {
//     socket.on("chatMessage", (msg) => {
//       setMessages((prevMessages) => [...prevMessages, msg]);
//     });

//     // Clean up socket connection on component unmount
//     return () => {
//       socket.off("chatMessage");
//     };
//   }, []);

//   // Send message to the server
//   const sendMessage = () => {
//     if (message.trim()) {
//       socket.emit("chatMessage", message); // Send message to server
//       setMessage(""); // Clear input field
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Chat Room</h2>
//       <div
//         style={{
//           border: "1px solid black",
//           height: "300px",
//           overflowY: "scroll",
//           marginBottom: "10px",
//         }}
//       >
//         {messages.map((msg, index) => (
//           <p key={index}>{msg}</p>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type your message..."
//         style={{ width: "80%", marginRight: "10px" }}
//       />
//       <button onClick={sendMessage}>Send</button>
//       <div>
//         <button className="px-4 py-2 mt-6 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chat;
//
