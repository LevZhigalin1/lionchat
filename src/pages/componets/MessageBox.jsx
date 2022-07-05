import React, { useRef, useEffect }from "react";

export default function MessageBox({UsersData}) {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({});
  });

  return (
    <div className="messages">
      {UsersData.map((user) => 
        <div key={user.id} className="message">
          <b className="messageName" style={{color: user.color, float:"left"}}>{user.name}:</b>
          <div className="messageText">{user.text}</div>
        </div>
      )}
      <div ref={divRef} />
    </div>
  )
}
