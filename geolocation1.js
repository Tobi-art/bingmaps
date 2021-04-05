function mapsInit(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    $("#map").html("latitude: " + lat + ",  longitude: " + lon);
};
// other available position.coords - properties:
// accuracy - altitude - heading - speed
// also: position.timestamp

function mapsError(error) {
    alert(error.message)
};

//error.code returns 1,2,3 (1=access denied, 2=cant find location, 3=timeout) ==> alert in japanese etc..

//3 options available
const set = {
    enableHighAccuracy: true,
    maximumAge: 20000,
    timeout: 10000
};

navigator.geolocation.getCurrentPosition(mapsInit, mapsError, set);