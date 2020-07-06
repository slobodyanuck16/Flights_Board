import { fetchFlightList } from "./flight.gateway";

export const FLIGHT_LIST_RECEIVED = "FLIGHTS/FLIGHT_LIST_RECEIVED";

export const flightListReceived = (flightList) => {
    return {
        type: FLIGHT_LIST_RECEIVED,
        payload: {
            flightList,
        },
    };
};

export const getFlightList = (date) => (dispatch) => {
    fetchFlightList(date).then((response) => {
        dispatch(flightListReceived(response.body));
    });
};
