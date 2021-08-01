import { Redirect, Route } from "react-router"

export const AuthRoutes = ({ component: C, auth, ...rest }) => {
  return <Route {...rest} render={props => (auth ? <C {...props} /> : <Redirect to="/login" />)} />
}
