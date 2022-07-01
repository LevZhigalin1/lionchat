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
          <b className="messageName" style={{color:"#497fab", float:"left"}}>{user.name}:</b>
          <div className="messageText" style={{color:"white"}}>{user.text}</div>
        </div>
      )}
      <div ref={divRef} />
    </div>
  )
}
