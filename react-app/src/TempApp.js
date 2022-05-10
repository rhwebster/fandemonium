import React from "react";
import TempSplash from "./components/TempSplash";
import { BrowserRouter, Route } from "react-router-dom";


const TempApp = () => {

    return (
        <BrowserRouter>
            <Route path="/">
                <TempSplash />
            </Route>
        </BrowserRouter>
    );
}

export default TempApp;