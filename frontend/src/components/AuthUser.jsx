import {Outlet, Navigate} from "react-router-dom"
import {useSelector} from 'react-redux'
import { getUserInfo } from "../features/users/userSlice"

const AuthUser = () => {
  const userExist = useSelector(getUserInfo)

  return (
    <section>
      <h1>Auth Page</h1>
      {userExist ? <Outlet /> : <Navigate to="/" replace={true} /> }
    </section>
  )
}
export default AuthUser