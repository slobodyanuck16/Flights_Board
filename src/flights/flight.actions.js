import { fetchFlightList } from "./flight.gateway";
// import { flightListSeletor } from "./flights.selectors";

export const FLIGHT_LIST_RECEIVED = "FLIGHTS/FLIGHT_LIST_RECEIVED";
// export const FLIGHT_LIST_REQUESTED = "FLIGHT_LIST_REQUESTED";

// export const flightListRequested = () => {
//     return {
//         type: FLIGHT_LIST_REQUESTED,
//         isLoadging: true,
//     }
// }

export const flightListReceived = (flightList) => {
    return {
        type: FLIGHT_LIST_RECEIVED,
        payload: {
            flightList,
        },
        // isLoadging: false
        
    };
};

export const getFlightList = (date) => (dispatch) => {
    fetchFlightList(date).then((response) => {
        dispatch(flightListReceived(response.body));
    });
};
