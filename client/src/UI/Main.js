//* dependencies
import React from 'react'
import { Switch, Route } from 'react-router-dom'

//* main content
import Dashboard from 'components/main/Dashboard'
import Welcome from 'components/main/Welcome'
//* auth content
import Register from 'components/auth/Register'
import Login from 'components/auth/Login'

export default props => {
    return (
        <div className="container mt-3">
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
        </Switch>
        </div>
    )
}