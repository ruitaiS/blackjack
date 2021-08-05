import { Redirect, Route } from "react-router"

export const AuthRoutes = ({ component: C, user, ...rest }) => {
  console.log(user)
  return <Route {...rest} render={props => (!user ? <Redirect to="/login" /> : <C {...props} />)} />
}
