import React from "react";
import "./style.css";
import Chatbot from "./Chatbot";
import "./Animal Charity Best Friend.png";


export default function App() {
  return (
    <div className="App">
      <Chatbot />
      <img src={require("./Animal Charity Best Friend.png")} height ={700} width = {1200}/>
    </div>
  );
}



