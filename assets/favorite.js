var weatherContainer = $(".weather")
var cardContainer = $(".list-group")

function getFavApi(code) {
   
    var getApiPark = `https://developer.nps.gov/api/v1/parks?parkCode=${code}&api_key=bXu3Ai3Odu0e1HKfSDrMMWwCGmh9e2AEvwa80Dx6`;

    fetch(getApiPark)
        .then(response => response.json())
        .then (data => {
            const parks = data.data;

            // this where you do another fetch call to weather api
            
            // loop through each park
            for (let i = 0; i < parks.length; i++) {
                // for each park, render a card
                renderParkCard(parks[i]);
            }
        }
)};

function getStorage () {
    var retrieveData = localStorage.getItem("FavPark") 
    var parkCode = JSON.parse(retrieveData)
    // console.log(parkCode)
    for (let i = 0; i < parkCode.length; i++) {
        var code = parkCode[i];
        console.log(code);
        getFavApi(code);
    }

}

function renderParkCard (parkData) {
    const cardH2 = $('<h2>');
    const cardP = $('<p>');
    const cardDiv = $('<div>');
    const cardA = $('<a>');
    const cardImg = $('<img>');
    var br = $('<br>');
    // console.log(code);    
    // console.log(parkData)

    var cardWeather = $('<article>')
    // Working on div
    cardDiv.addClass('card flex flex-col');

    //working on header
    cardH2.addClass("card-header text-uppercase text-3xl");
    cardH2.text(parkData.fullName);
    
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
    cardContainer.append(cardH2);

    cardContainer.append(cardImg);
    cardContainer.append(cardWeather)
    cardContainer.append(cardP);
    
    cardP.append(br)
    cardP.append(cardA)
    $('#park-container').append(cardDiv);

}
getStorage()
