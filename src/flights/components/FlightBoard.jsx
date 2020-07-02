import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

import FlightList from "./FlightList";
import NoFlights from "./NoFlights";

import qs from "qs";
import moment from "moment";

function FlightBoard({ flights, getFlightList }) {
    useEffect(() => {
        const formatDate = moment(new Date()).format("DD-MM-YYYY");

        getFlightList(formatDate);
    }, []);

    const { direction } = useParams();

    const { search } = useLocation();
    const flightsList =
        flights[direction === "arrivals" ? "arrival" : "departure"] || [];
    const filterText = qs.parse(search, { ignoreQueryPrefix: true }).search;
    const filteredFlights = filterText
        ? flightsList.filter((flight) =>
              flight.codeShareData[0].codeShare
                  .toLowerCase()
                  .includes(filterText.toLowerCase())
          )
        : flightsList;

    return (
        <>
            <div className="flight-list-buttons-container">
                <Link className="departures-link"
                    to={
                        search.length > 8
                            ? `/departures${search}`
                            : `/departures`
                    }
                >
                    <button
                        className={
                            direction === "departures"
                                ? "departure-btn nav-btn-selected"
                                : "departure-btn"
                        }
                    >
                        <i className="medium material-icons btn-icons">
                            flight_takeoff
                        </i>
                        DEPARTURES
                    </button>
                </Link>
                <Link className="arrivals-link"
                    to={search.length > 8 ? `/arrivals${search}` : `/arrivals`}
                >
                    <button
                        className={
                            direction === "arrivals"
                                ? "arrival-btn nav-btn-selected"
                                : "arrival-btn"
                        }
                    >
                        <i className="medium material-icons btn-icons">
                            flight_land
                        </i>
                        ARRIVALS
                    </button>
                </Link>
            </div>
            <div className="flight-list-container">
                <div className="flight-list-title">
                    <span className="flight-list-title__terminal">
                        Terminal
                    </span>
                    <span className="flight-list-title__local-time">
                        Local time
                    </span>
                    <span className="flight-list-title__destination">
                        Destination
                    </span>
                    <span className="flight-list-title__status">Status</span>
                    <span className="flight-list-title__airline">Airline</span>
                    <span className="flight-list-title__flight">Flight</span>
                </div>
                {filteredFlights.length < 1 ? (
                    <NoFlights />
                ) : (
                    <FlightList
                        flights={filteredFlights}
                        direction={direction}
                    />
                )}
            </div>
        </>
    );
}

export default FlightBoard;