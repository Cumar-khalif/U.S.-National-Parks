function getFavApi() {
   
    var parkCode = "voya";
    var getApiPark = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=bXu3Ai3Odu0e1HKfSDrMMWwCGmh9e2AEvwa80Dx6`;

    fetch(getApiPark)
        .then(response => response.json())
        .then (data => {
        console.log(data);
        }
)};
getFavApi()

$(document).on("click",".save", function(){
    var favPark = [];
    console.log(favPark);
    $('#park-container')
        .find(this, "h2")
        .each(function() {
            var $li = $(this);
            favPark.push($li.text());
        });
        favorites = JSON.parse(localStorage.getItem("favP")) || [];
        favorites.push(favPark);
        localStorage.setItem("favP", JSON.stringify(favorites));
    
})
