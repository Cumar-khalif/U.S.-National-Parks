function saveFavorites() {
   
    var parkCode = "voya";
    var getApiPark = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=bXu3Ai3Odu0e1HKfSDrMMWwCGmh9e2AEvwa80Dx6`;

    fetch(getApiPark)
        .then(response => response.json())
        .then (data => {
        console.log(data);
        }
)};
saveFavorites()

$(document).on("click",".save", function(){
    console.log("button clicked");
})
