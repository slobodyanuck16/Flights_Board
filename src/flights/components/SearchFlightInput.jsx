import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function SearchFlightInput() {
    const location = useLocation();

    const [flightID, setflightID] = useState(
        location.search.length > 8 ? `${location.search.substr(8, 100)}` : ""
    ); // TODO: или пустая строка или значение с инпута(с query)

    return (
        <div className="search-fligths">
            <i className="large material-icons search-icon">search</i>
            <input
                type="text"
                className="search-flights__input"
                placeholder="Enter Flight #"
                value={flightID}
                onChange={(event) => setflightID(event.target.value)}
            />
            <Link to={`${location.pathname}?search=${flightID}`}>
                <button className="search-fligths__btn">SEARCH</button>
            </Link>
        </div>
    );
}

export default SearchFlightInput;
