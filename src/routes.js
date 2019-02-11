import React from "react"
import {Switch,Route} from "react-router-dom"

import Dashboard from './components/Dashboard/Dashboard'
import SingUp from "./components/SingUp/SingUp"
import SingIn from './components/SingIn/SingIn'

export default (
    <Switch>
        <Route exact path="/api/home" component={Dashboard} />
        <Route  path="/singup" component={SingUp} />
        <Route  path="/signin" component={SingIn} />
    </Switch>
)