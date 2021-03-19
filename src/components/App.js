import { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";


import Register from './Register';
import LogIn from './LogIn';
import LogOut from './LogOut'
import MyRoutine from './MyRoutine';
import Activities from './Activities';
import ActivityRoutine from './ActivityRoutine';
import checklogin from './CheckLogIn';
import PopupMessage from './PopUpMessage';
import Home from './Home';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(checklogin());
    const [isShown, setIsShown] = useState(false);
    const [displayMessage, setDisplayMessage] = useState();
    return (
        <Router>
            <div>
                <nav>
                    <header>
                        <h1 className="fitness">Fitness Trackr</h1>
                    </header >
                    <ul className="nav">
                        <>
                            {
                                !isLoggedIn ?
                                    <>
                                        <li>
                                            <Link to="/logIn">Log In</Link>
                                        </li>
                                        <li>
                                            <Link to="/register">Register</Link>
                                        </li>
                                    </> : null
                            }
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/activities">activities</Link>
                            </li>
                            <li>
                                <Link to="/routine">Routines</Link>
                            </li>
                            {
                                isLoggedIn ?
                                    <li>
                                        <Link to="/myRoutine">My Routines</Link>
                                    </li> : null
                            }
                            {
                                isLoggedIn ?
                                    <li>
                                        <Link to="/logout">Log Out</Link>
                                    </li> : null
                            }
                        </>
                    </ul>
                </nav>

                <div>
                    <Switch>
                        <Route exact path='/home'>
                            <Home />
                        </Route>
                        <Route exact path="/register">
                            <Register
                                setDisplayMessage={setDisplayMessage}
                                setIsShown={setIsShown}
                                setIsLoggedIn={setIsLoggedIn}

                            />
                        </Route>
                        <Route exact path="/LogIn">
                            <LogIn
                                setDisplayMessage={setDisplayMessage}
                                setIsShown={setIsShown}
                                setIsLoggedIn={setIsLoggedIn}
                            />
                        </Route>
                        <Route exact path="/MyRoutine">
                            <MyRoutine isLoggedIn={isLoggedIn} />
                        </Route>
                        <Route exact path="/activities">
                            <Activities
                                isLoggedIn={isLoggedIn}
                                setDisplayMessage={setDisplayMessage}
                                setIsShown={setIsShown}
                            />
                        </Route>
                        {/* <Route exact path="/Routines">
                            <Routines />
                        </Route> */}
                        <Route exact path="/ActivityRoutine">
                            <ActivityRoutine />
                        </Route>
                        <Route exact path="/logout">
                            <LogOut
                                isLoggedIn={isLoggedIn}
                                setIsLoggedIn={setIsLoggedIn}
                                setDisplayMessage={setDisplayMessage}
                                setIsShown={setIsShown}
                            />
                        </Route>
                    </Switch>
                </div>
                {
                    isShown ? <PopupMessage
                        displayMessage={displayMessage}
                        setIsShown={setIsShown} /> : ''
                }
            </div>
        </Router>
    )
}

export default App;