$("#submit").on("click", function (event) {
    event.preventDefault();

    var stateSel = $("#state").val()
    console.log(stateSel);
    var getApiUrl = "https://developer.nps.gov/api/v1/parks?stateCode=" + stateSel + "&api_key=bXu3Ai3Odu0e1HKfSDrMMWwCGmh9e2AEvwa80Dx6";
    
})
function getParks(){
    
    var stateSel = $("#state").val();
    var getApiUrl = "https://developer.nps.gov/api/v1/parks?stateCode=" + stateSel + "&api_key=bXu3Ai3Odu0e1HKfSDrMMWwCGmh9e2AEvwa80Dx6";

    console.log(stateSel)
    fetch (getApiUrl)
.then(response => response.json())
.then (data => console.log(data));

}
