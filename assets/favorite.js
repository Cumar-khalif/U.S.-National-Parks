$("#submit").on("click", function (event) {
    event.preventDefault();

    var stateSel = $("#state").val()

    document.location.replace(`./pages/search-results.html?state=${stateSel}`)
})