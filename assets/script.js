fetch("https://developer.nps.gov/api/v1/parks?stateCode=mn&api_key=bXu3Ai3Odu0e1HKfSDrMMWwCGmh9e2AEvwa80Dx6")
.then(response => response.json())
.then (data => console.log(data));