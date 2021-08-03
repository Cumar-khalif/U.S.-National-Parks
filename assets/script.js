var weatherContainer = $(".weather")
var cardContainer = $(".list-group")
// get data for the selected state (stateSel)
function getParks (stateSel) {
    
    var getApiUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${stateSel}&api_key=bXu3Ai3Odu0e1HKfSDrMMWwCGmh9e2AEvwa80Dx6`;
    fetch (getApiUrl)
    .then(response => response.json())
    .then (data => {
        //(data)

        // array of parks data
        const parks = data.data;

        // this where you do another fetch call to weather api
        
        // render the park cards
        // loop through each park
        for (let i = 0; i < parks.length; i++) {
            // for each park, render a card
            renderParkCard(parks[i]);
        }
    
    });
}

//adds parks to the page
function renderParkCard (parkData) {

    const cardH3 = $('<h2>');
    var favbtn = $('<button>');
    const cardP = $('<p>');
    const cardDiv = $('<div>');
    const cardA = $('<a>');
    const cardImg = $('<img>');
    var br = $('<br>');


    var cardWeather = $('<article>')
    // Working on div
    cardDiv.addClass('card flex flex-col');

    //working on header
    cardH3.addClass("card-header text-uppercase text-3xl");
    cardH3.text(parkData.fullName);
    
    //working on button
    favbtn.addClass("btn save");
    favbtn.text("Save");
    //weatherContainer
    cardWeather.addClass('weather')
    // adding description of park
    cardP.text(parkData.description);
    cardP.addClass('p-2')
    // adding link
    cardA.attr('href', parkData.url )
    cardA.text('Learn More..')
    // adding image
    cardImg.attr('src', parkData.images[0].url);
    cardImg.addClass("img")
    //appending all items
    cardContainer.append(cardH3);

    cardContainer.append(cardImg);
    cardContainer.append(cardWeather)
    cardContainer.append(cardP);
    
    cardContainer.append(favbtn);
    cardP.append(br)
    cardP.append(cardA)
    $('#park-container').append(cardDiv);

}

// on submit call for parks and weather api
$("#submit").on("click", function (event) {
    event.preventDefault();
    var stateSel = $("#state").val();
    $("#park-container").empty();
    getParks(stateSel);
    getCoordinates(stateSel);
    

})


// Pulls 
function getCoordinates(stateSel) {

    
    var getApiUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${stateSel}&api_key=bXu3Ai3Odu0e1HKfSDrMMWwCGmh9e2AEvwa80Dx6`;


    fetch(getApiUrl)
        .then(response => response.json())
        .then (data => {
            //(data)
            data.data.forEach((element, i) => {
                // //(i);
                getWeather(element.latitude, element.longitude)
            });
        });
}

function getWeather(lat, long) {
    //(long, lat)
    var getApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5cd2b271a245b10cee40362f079a84fd`;
    //(getApiUrl)
    fetch(getApiUrl)
        .then(response => response.json())
        .then(data => {
            //(data);

            var temperature = data.main.temp;
            var description = data.weather[0].description;
            renderWeatherCard(temperature,description)
            //(temperature,description);

    });
}

        // weather starts here.
function renderWeatherCard (temp, desc) {
    var divCard = $('<div>')
    weatherContainer.append(temp)
    weatherContainer.append(desc)

}

$(document).on("click",".save", function() {
    console.log("clicked")
})
