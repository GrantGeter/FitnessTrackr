import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";


import Register from './Register';
import LogIn from './LogIn';
import MyRoutine from './MyRoutine';
import Activites from './Activities';
import ActivityRoutine from './ActivityRoutine';
import checklogin from './CheckLogIn';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = checklogin()
    return (
        <div>
            <nav>
                <header>
                <h1 className="fitness">Fitness Trackr</h1>
                </header >
                    <ul className="nav">
                        <React.Fragment>  
                        <li>
                            <Link to="/logIn">Log In</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/activites">Activites</Link>
                        </li>
                        <li>
                            <Link to="/routine">Routines</Link>
                        </li>
                        <li>
                            <Link to="/myRoutine">My Routines</Link>
                        </li>
                        <li>
                            <Link to="/logout">Log Out</Link>
                        </li>
                        </React.Fragment>
                    </ul>
                </nav>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/LogIn">
                        <LogIn />
                    </Route>
                    <Route exact path="/MyRoutine">
                        <MyRoutine isLoggedIn={isLoggedIn}/>
                    </Route>
                    <Route exact path="/Activites">
                        <Activites />
                    </Route>
                    <Route exact path="/Routines">
                        <Routines />
                    </Route>
                    <Route exact path="/ActivityRoutine">
                        <ActivityRoutine />
                    </Route>
                    <Route exact path="/logout">
                        <Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
    )
}

export default App;