import React from "react";

export default function MessageBox({UsersData}) {
  return (
    <div className="messages">
      {UsersData.map((user) => 
        <div key={user.id} className="message">
          <div>{user.name}: {user.text}</div>
        </div>
      )}
    </div>
  )
}
