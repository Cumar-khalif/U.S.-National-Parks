
// get data for the selected state (stateSel)
function getParks (stateSel) {
    
    var getApiUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${stateSel}&api_key=bXu3Ai3Odu0e1HKfSDrMMWwCGmh9e2AEvwa80Dx6`;
    fetch (getApiUrl)
    .then(response => response.json())
    .then (data => {
        console.log(data)

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

    const cardDiv = $('<div>');
    cardDiv.addClass('card');

    const cardH3 = $('<h2>');
    cardH3.addClass("card-header text-uppercase text-3xl");
    cardH3.text(parkData.fullName);
    
    var favbtn = $('<button>');
    favbtn.addClass("btn");
    favbtn.text("Save");

    const cardP = $('<p>');
    cardP.text(parkData.description);

    const cardA = $('<a>');
    cardA.attr('href', parkData.url )
    cardA.text('Learn More..')

    const cardImg = $('<img>');
    cardImg.attr('src', parkData.images[0].url);

    cardDiv.append(cardH3);
    cardDiv.append(cardP);
    cardDiv.append(cardA);
    cardDiv.append(cardImg);
    cardDiv.append(favbtn);
    $('#park-container').append(cardDiv);

}

// on submit call for parks and weather api
$("#submit").on("click", function (event) {
    event.preventDefault();
    var stateSel = $("#state").val();

    getParks(stateSel);
    getCoordinates(stateSel);
    

})


// Pulls 
function getCoordinates(stateSel) {

    
    var getApiUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${stateSel}&api_key=bXu3Ai3Odu0e1HKfSDrMMWwCGmh9e2AEvwa80Dx6`;

    // console.log(getApiUrl)
    console.log(stateSel);

    fetch(getApiUrl)
        .then(response => response.json())
        .then (data => {
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
        .then(data => {
            console.log(data);

            var temperature = data.main.temp;
            var description = data.weather[0].description;

            console.log(temperature);
            console.log(description);

    });
}

        // weather starts here.
    function renderWeatherCard (temp, desc) {

    const cardDiv = $('<div>');
    cardDiv.addClass('card');
    const cardH3 = $('<h3>');
    cardH3.addClass("card-header text-uppercase");
    cardH3.text(temp);
    const cardP = $('<p>');
    cardP.text(desc);
    

    //const cardImg = $('<img>');
    //cardImg.attr('src', parkData.images[0].url);
// Ends here
  // weather append starts header
  cardDiv.append(cardH3);
  cardDiv.append(cardP);
  //cardDiv.append(cardA);
  //cardDiv.append(cardImg);
  $('#repos-container').append(cardDiv);
       // weather append Ends here
}