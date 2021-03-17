import { useState } from "react";
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
import PopupMessage from "./PopUpMessage";

const App = () => {
    const [displayMessage, setDisplayMessage] = useState('');
    const [isShown, setIsShown] = useState(false);
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/register">
                        <Register
                            setDisplayMessage={setDisplayMessage}
                            setIsShown={setIsShown}

                        />
                    </Route>
                    <Route exact path="/LogIn">
                        <LogIn
                            setDisplayMessage={setDisplayMessage}
                            setIsShown={setIsShown}
                        />
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
            {
                isShown ? <PopupMessage
                    displayMessage={displayMessage}
                    setIsShown={setIsShown} /> : ''
            }
        </Router>
    )
}

export default App;