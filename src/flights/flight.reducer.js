import { FLIGHT_LIST_RECEIVED, FLIGHT_LIST_REQUESTED } from "./flight.actions";

const initialState = {
    flightList: {},
};

const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        // case FLIGHT_LIST_REQUESTED:
        //     return initialState
        case FLIGHT_LIST_RECEIVED: {
            return {
                ...state,
                flightList: action.payload.flightList,
            };
        }

        default:
            return state;
    }
};

export default flightReducer;