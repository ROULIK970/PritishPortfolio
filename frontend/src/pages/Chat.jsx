import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice.js";
import { useNavigate } from "react-router-dom";




const Chat = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleLogout = () =>{
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/chat/login");
  }




  return (
    <div style={{ padding: "20px" }}>
      <p>Work in Progress! Kindly hold your horses. ThankYou!</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition duration-200"
      >
        Logout
      </button>

    </div>
  );
};

export default Chat;
