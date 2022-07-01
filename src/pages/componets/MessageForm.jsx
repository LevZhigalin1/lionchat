import React from "react";

export default function MessageForm({addMessage, text, setText}) {

  return (
    <div className="messageForm">
      <textarea 
        className="messageFormInput"  
        placeholder="Введите текст" 
        value={text} 
        onChange={e => setText(e.target.value)} 
        onKeyPress={e => {if(e.key === "Enter") {e.preventDefault(); if(text !== "") {addMessage()}}}}
      />
      <button onClick={addMessage} className="messageFormButton">
        <img className="messageFormLogo" src={require('../../images/messageFormLogo.png')} alt="for sell" />
      </button>
    </div>
  )
}
