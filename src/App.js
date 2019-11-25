import React, {useEffect, useState} from 'react';
import {
	Switch,
    Route,
    BrowserRouter,  
} from 'react-router-dom';

import './App.css';

import Loader from './components/Loader/loader';
import Home from './components/Home/home';

function App() {
    var nb = localStorage.getItem("pastChapter");
    useEffect(() => {
        if(parseInt(nb) > 3)
            nb = 0;
        if(!nb)
            nb = 1;

        localStorage.setItem("pastChapter", parseInt(nb) + 1);
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <Switch key="switch">
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Home chapter={nb} />
                            )}
                        />
                        <Route 
                            exact 
                            path="/loader" 
                            render={() => (
                                <Loader chapter={nb} />
                            )}
                        />
                        <Route component={Home} />
                    </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
