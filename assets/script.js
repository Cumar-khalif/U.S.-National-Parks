$(".btn").on("click", function (event) {
    event.preventDefault();

    var stateSel = $("state").value
    var getApiUrl = "https://developer.nps.gov/api/v1/parks?stateCode=" + stateSel + "&api_key=bXu3Ai3Odu0e1HKfSDrMMWwCGmh9e2AEvwa80Dx6";
    
    fetch (getApiUrl)
.then(response => response.json())
.then (data => console.log(data));
})
