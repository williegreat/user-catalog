import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./store/reducers";
import UsersContainer from "./users/UsersContainer";
import { Redirect } from "react-router";
import { getUsers } from "./store/actions/users";

// import usersService from "./users/usersService";

function App() {
    // const mockUsers = [
    //     { id: "12", firstName: "John", lastName: "Doe", gender: "m" },
    //     { id: "13", firstName: "Sara", lastName: "Smith", gender: "f" },
    //     { id: "14", firstName: "Moshe", lastName: "Smith", gender: "m" },
    //     { id: "16", firstName: "Haim", lastName: "Smith", gender: "m" }
    // ];

    store.dispatch(getUsers());

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/users" exact>
                        <UsersContainer />
                    </Route>

                    <Redirect from="/*" to="/users" />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
