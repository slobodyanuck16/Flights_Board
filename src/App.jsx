import React from "react";
import SearchFlightInput from "./flights/components/SearchFlightInput";
import FlightBoard from "./flights/components/FlightBoard";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
    return (
        <>
            <div className="flight-board-container">
                <div className="search-flight-container">
                    <h1 className="title">SEARCH FLIGHT</h1>
                    <SearchFlightInput />
                </div>
            </div>
            <Switch>
                <Route exact path="/:direction">
                    <FlightBoard />
                </Route>
                <Redirect to="/arrivals" />
            </Switch>
        </>
    );
}

export default App;
