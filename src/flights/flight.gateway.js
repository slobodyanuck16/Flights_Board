const baseUrl = "https://api.iev.aero/api/flights/";

export const fetchFlightList = (flightDate) =>
    fetch(`${baseUrl}${flightDate}`).then((response) => {
        if (response.ok) return response.json();
        throw new Error("Failed to load flights");
    });
