import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import * as routes from './../constants/routes';
import Header from '../scenes/components/Header';
import Home from '../scenes/pages/Home';
import Character from '../scenes/pages/Character';

function AppRoutes() {
    return (
        <Router>
            <Header/>
            <main className="main">
                <Switch>
                    <Route exact path={routes.HOME} component={Home} />
                    <Route exact path={routes.CHARACTER} component={Character} />
                </Switch>
            </main>
        </Router>
    )
}

export default AppRoutes;
