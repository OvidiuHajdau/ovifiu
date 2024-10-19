   function getLocation() {
    const locationOutput = document.getElementById("locationOutput");
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    locationOutput.innerHTML = "Geolocation is not supported by this browser.";
    }
    }

    function showPosition (position) {
        const locationOutput = document.getElementById("locationOutput");
        locationOutput.innerHTML =
        "Latitude:" +
        position.coords.latitude +
        "<br>Longitude:" +
        position.coords.longitude;
        }