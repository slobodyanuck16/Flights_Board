const baseUrl = "https://api.iev.aero/api/flights/";

export const fetchFlightList = (flightData) =>
    fetch(`${baseUrl}${flightData}`).then((response) => {
        if (response.ok) return response.json();
        throw new Error("Failed to load flights");
    });
