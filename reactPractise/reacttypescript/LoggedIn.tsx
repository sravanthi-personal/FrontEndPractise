import React, { useState } from 'react'

export const LoggedIn = () => {

    const [isLoggedIn,setIsLoggedIn] = useState(false);


    const handleLogIn = () => {
        setIsLoggedIn(true);
    }

    const handleLogOut = () => {
        setIsLoggedIn(false);
    }
 
  return (
    <div>
        <button onClick={handleLogIn}>LoggedIn</button>
        <button onClick={handleLogOut}>LoggedOut</button>
        <div>Users is {isLoggedIn? 'loggedIn' : 'loggedout'}</div>
    </div>
  )
}
