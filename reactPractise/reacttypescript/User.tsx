import React, { useState } from 'react'

type AuthUser = {
    name : string,
    email: string
}

// export const User = () => {

//     const [user,setUser] =  useState<AuthUser | null>(null);

//     const handleLogin = () => {
//         setUser({
//             name: 'sravanthi',
//             email: 'sravanthi@gmail.com'
//         })
//     }

//     const handleLogOut = () => {
//         setUser(null);
//     }

//   return (
//     <div>
//         <button onClick={handleLogin}>Login</button>
//         <button onClick={handleLogOut}>Logout</button>
//         <div>user name is {user?.name}</div>
//         <div>user emailId is {user?.email}</div>
//     </div>
//   )
// }


//type assertion
export const User = () => {

    const [user,setUser] =  useState<AuthUser>({} as AuthUser);

    const handleLogin = () => {
        setUser({
            name: 'sravanthi',
            email: 'sravanthi@gmail.com'
        })
    }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <div>user name is {user.name}</div>
        <div>user emailId is {user.email}</div>
    </div>
  )
}
