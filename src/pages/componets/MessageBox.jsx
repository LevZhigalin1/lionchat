import React from 'react'

export default function MessageBox(UsersData) {
  return (
    <div className='messages'>
      {UsersData?.map((user) => 
        <div key={user.id}>
          <div>{user.name}: {user.text}</div>
       </div>
      )}
    </div>
  )
}
