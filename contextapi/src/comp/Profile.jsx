import React, { useContext } from 'react'
import UserContext from '../context/UserContext.js'

function Profile() {
    const { user } = useContext(UserContext);
    console.log("User in Profile:", user);

    if (!user) {
        return <h1>Please login to view your profile</h1>
        
    }
  return (
    <div>
      <h1>Profile Page</h1>
      <div>
              <h1>Username : {user.username}</h1>
      </div>
      <div>
        <h1>Password : {user.password}</h1>
      </div>
    </div>
  )
}

export default Profile