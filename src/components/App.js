import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";


import Register from './Register';
import LogIn from './LogIn';
import UserRoutine from './UserRoutine';
import Activites from './Activities';
import AddActivity from "./AddActivity";
import ActivityRoutine from "./ActivityRoutine";

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/LogIn">
                        <LogIn />
                    </Route>
                    <Route exact path="/UserRoutine">
                        <UserRoutine />
                    </Route>
                    <Route exact path="/Activites">
                        <Activites />
                    </Route>
                    <Route exact path="/ActivityRoutine">
                        <ActivityRoutine />
                    </Route>
                    <Route exact path="/AddActivity">
                        <AddActivity />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;