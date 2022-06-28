import React from 'react'

export default function MessageForm({addMessage, text, setText}) {
  return (
    <div>
      <input 
        type="text" 
        placeholder='Введите текст' 
        value={text} 
        onChange={e => setText(e.target.value)}
      />
      <button onClick={addMessage}>^</button>
    </div>
  )
}
