import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewIncident from "./pages/NewIncident";

export default function() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Logon} exact path="/" />
                <Route component={Register} path="/register" />
                <Route component={Profile} path="/profile" />
                <Route component={NewIncident} path="/incidents/new" />
            </Switch>
        </BrowserRouter>
    );
}
