$("#submit").on("click", function (event) {
    event.preventDefault();

    // console.log(stateSel);
    getParks();
})

// Pulls 
function getParks() {

    var stateSel = $("#state").val();
    var getApiUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${stateSel}&api_key=bXu3Ai3Odu0e1HKfSDrMMWwCGmh9e2AEvwa80Dx6`;

    // console.log(getApiUrl)
    fetch(getApiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.data.forEach((element, i) => {
                console.log(i);
                getWeather(element.latitude, element.longitude)
            });
        });
}

function getWeather(lat, long) {
    console.log(long, lat)
    var getApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5cd2b271a245b10cee40362f079a84fd`;
    console.log(getApiUrl)
    fetch(getApiUrl)
        .then(response => response.json())
        .then(data => console.log(data));
}