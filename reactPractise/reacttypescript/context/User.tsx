import { useContext } from "react"
import { UserContext } from "./UserContext"

export const UserCntx = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        userContext.setUser({
            name: 'sravanthi',
            email: 'sravanthi@gmai.com'
        })
    }
    const handleLogOut = () => {
        userContext.setUser(null);
    }
    return (
        <div>
            <button onClick={handleLogin}>LogIn</button>
            <button onClick={handleLogOut}>LogOut</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User email is {userContext.user?.email}</div>
        </div>
    )
}