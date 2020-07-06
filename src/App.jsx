import * as flightActions from "./flights/flight.actions";
import React from "react";
import SearchFlightInput from "./flights/components/SearchFlightInput";
import FlightBoard from "./flights/components/FlightBoard";
import { connect } from "react-redux";
import { flightListSelector } from "./flights/flight.selectors.js";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

function App({ getFlightList, flights }) {
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
                    <FlightBoard
                        getFlightList={getFlightList}
                        flights={flights}
                    />
                </Route>
                <Redirect to="/arrivals" />
            </Switch>
        </>
    );
}

App.propTypes = {
    flights: PropTypes.shape().isRequired,
    getFlightList: PropTypes.func.isRequired,
};

const mapState = (state) => {
    return {
        flights: flightListSelector(state),
    };
};

const mapDispatch = {
    getFlightList: flightActions.getFlightList,
};

export default connect(mapState, mapDispatch)(App);
