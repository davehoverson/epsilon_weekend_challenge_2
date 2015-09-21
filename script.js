var movieOutput;

function searchCallback(results) {
   console.log(results);
};

$(document).ready(function() {
    $("form").submit(function(event){
        event.preventDefault();
        var selector = $(".movieBox").val();
        search(selector);
        });
    });
    
function search(query){

    $.ajax ({
        type: 'GET',
        dataType: 'json',
        crossDomain: true,
        jsonp: 'json_callback',
        url: 'http://www.omdbapi.com/?t='+ encodeURI(query),
    }).done(function(data){
        searchCallback(data);
        movieOutput = data;
        var movieTitle = ("<h1 class=displayTitle>" + data.Title + "</h1>");
        var movieYear = ("<h3 class=displayYear>" + data.Rated + " | " + data.Year +"</h3>");
        var moviePoster = ("<img src="+data.Poster +">"+"<img>");
        var moviePlot = ("<p class=displayPlot>" + data.Plot +"</p>");
        var movieActors = ("<p class=displayActors>" + "Starring: " + data.Actors +"</p>");
        var $movieOutput = $("<ul>" +movieTitle+ "<br>" + 
            movieYear + "<br>" + 
            moviePoster+ "<br>" + 
            moviePlot+ "<br>" +
            movieActors+ "</ul>");
        $(".dataDump").html($movieOutput);
    });

};

