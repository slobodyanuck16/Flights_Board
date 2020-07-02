import React from "react";

import moment from "moment";

const FlightList = ({ flights, direction }) => {
    console.log("flights in FlightList: ", flights);
    console.log("direction: ", direction);

    return (
        <>
            {flights.map((flight) => {
                return (
                    <div key={flight.ID} className="flight-list__item">
                        <span className="flight-list__item-terminal">
                            <span
                                className={
                                    flight.term === "D"
                                        ? "term-circle-blue"
                                        : "term-circle-green"
                                }
                            >
                                {flight.term}
                            </span>
                        </span>
                        <span className="flight-list__item-local-time">
                            {moment(flight.timeToStand).format("HH:mm")}
                        </span>
                        <span className="flight-list__item-destination">
                            {direction === "arrivals"
                                ? flight["airportFromID.city_en"]
                                : flight["airportToID.city_en"]}
                        </span>
                        <span className="flight-list__item-status">
                            {direction === "arrivals"
                                ? `Arrived ${moment(flight.timeLandFact).format(
                                      "HH:mm"
                                  )}`
                                : `Departed at ${moment(
                                      flight.timeDepFact
                                  ).format("HH:mm")}`}
                        </span>
                        <span className="flight-list__item-airline">
                            <img
                                className="flight-list__item-airline-logo"
                                src={flight.airline.en.logoSmallName}
                                alt="logo"
                            />
                            {flight.airline.en.name}
                        </span>
                        <span className="flight-list__item-flight">
                            {`${flight["carrierID.IATA"]}${flight.fltNo}`}
                        </span>
                    </div>
                );
            })}
        </>
    );
};

export default FlightList;
