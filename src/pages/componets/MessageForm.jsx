import React from "react";

export default function MessageForm({addMessage, text, setText}) {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Введите текст"
        value={text} 
        onChange={e => setText(e.target.value)}
        onKeyPress={e => {if(e.key === "Enter") addMessage()}}
      />
      <button onClick={addMessage}>{">>"}</button>
    </div>
  )
}
