import React from 'react';
import './assets/css/app.scss';
import {BrowserRouter as Router, Route, Routes as BRoutes} from "react-router-dom";
import {Routes} from "./config";
import {AppRoute} from "./components/Navigation/AppRoute";

function App() {
    return (
        <Router>
            <BRoutes>
                {Object.entries(Routes).map(([_, route], index) => (
                    <Route
                        key={index.toString()}
                        path={route.path}
                        element={<AppRoute>{route.component}</AppRoute>}
                    />
                ))}
            </BRoutes>
        </Router>
    );
}

export default App;
