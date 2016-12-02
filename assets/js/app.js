$( document ).ready(function () {

    var moodClicked = function() {
        $('.main-section').empty();
        getMovies($(this).attr('data'));
    }

    var getGenres = function () {
        var query = "https://api.themoviedb.org/3/genre/movie/list?api_key=79cb508f9122735b0a8e6fbc7d17e61b&language=en-US";
        $.ajax({
            url: query,
            method: 'GET'
        }).done(function (response) {
            //console.log(response.genres);
            var genres = response.genres;

            for (var i=0; i < 14; i++) {
                var genreItem = $('<a>');
                genreItem.attr({
                    'href': '#',
                    'data': genres[i].id,
                    'class': 'collection-item'
                });
                genreItem.html(genres[i].name);
                genreItem.on('click', moodClicked);
                $('#genres').append(genreItem);
                genreItem.wrap('<li class="list-item"></li>');

            }

        });
    }

    var getMovies = function (genre) {
        this.genre = genre;
        var query = "https://api.themoviedb.org/3/discover/movie?api_key=79cb508f9122735b0a8e6fbc7d17e61b" +
            "&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=truegit &page=1" +
            "&with_genres=" + this.genre;


        $.ajax({
            url: query,
            method: 'GET'
        }).done( function(response) {
            // console.log(query);
            var movies = response.results;
            console.log(movies);
            console.log(movies);
            for (var i=0; i < 8; i++) {

                console.log(movies[i].poster_path);
                    var card = $('<div>');
                    card.attr({
                        'class': 'card-medium col s3'
                    });
                    var movieCard = $('<img>');
                    if(movies[i].poster_path != null) {
                        movieCard.attr({
                            'class': 'activator',
                            'src' : 'https://image.tmdb.org/t/p/w185' + movies[i].poster_path
                        });
                    }

                    $('.mainContent').append(movieCard);
                    movieCard.wrap("<div class='card-medium col s3'></div>");
                    movieCard.wrap("<div class='card-image waves-effect waves-block waves-light'></div>");
                }


        });
    };


    getGenres();
    /*DEADPOOL*/
    var $poster = $('.card-container'),
        $shine = $('.shine'),
        w = $(window).width(),
        h = $(window).height();

    $('.row').on('mousemove', function (e) {
        var offsetX = 0.5 - e.pageX / w,
            offsetY = 0.5 - e.pageY / h,
            dy = e.pageY - h / 2,
            dx = e.pageX - w / 2,
            theta = Math.atan2(dy, dx),
            angle = theta * 180 / Math.PI - 90,
            offsetPoster = $poster.data('offset'),
            transformPoster = 'translateY(' + -offsetX * offsetPoster + 'px) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)';

        if (angle < 0) {
            angle = angle + 360;
        }
        $shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(0,0,0,' + (e.pageY / h / 5) + ') 0%,rgba(0,0,0,.25) 80%)');

        $poster.css('transform', transformPoster);
    });
    /*DEADPOOL END*/

$(".collection-item").on("click", function() {
    //$(".mainContent").children().slideUp({duration: 1500});
    $(".mainContent").empty();
    //Materialize.showStaggeredList('#staggered-test')
    getMovies($(this).attr('data'));
});

});
/*DEADPOOL END*/

/*search*/
$(document).keypress(function(event) {
   var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        $('#search').click();
        $('.mainContent').empty();


        var movie = $('#search').val();

        // Here we assemble our URL 
        
        var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&genre=drama&r=json";


        //------
        $.ajax({url: queryURL, method:"Get"}).done(function(response){
            console.log(queryURL)
            //$(".mainContent").text(JSON.stringify(response));
            // Creates a generic div to hold the movies for now
            var movieDiv = $('<div class="movie">');
            // Retrieves the Rating Data
            var rating = response.Rated;
            var pOne = $('<p>').text( "Rating: " + rating);
            movieDiv.append(pOne);
            // Retrieves the release year
            var released = response.Released;
            var pTwo = $('<p>').text( "Released: " + released);
            movieDiv.append(pTwo);
            // Retrieves the plot
            var plot = response.Plot;
            var pThree = $('<p>').text( "Plot: " + plot);
            movieDiv.append(pThree);
            // Retrieves Awards of Movie
            var awards = response.Awards;
            var pFour = $('<p>').text("Awards:" + awards);
            movieDiv.append(pFour);
            // Retrieves the IMDB rating
            var votes = response.imdbRating;
            var pFive = $('<p>').text("IMDB Rating:" + votes);
            movieDiv.append(pFive);
            // Image of Poster
            var image = $('<img>').attr("src", response.Poster);
            movieDiv.append(image);
            // Puts the entire Movie above the previous movies.
            $('.mainContent').prepend(movieDiv);

        });
            //ween the dashes below to hit the queryURL with $ajax, then take the response data and display it in the div with an id of movieView
        // YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY TOUCH THE HTML ABOVE.

        //------

        return false;
    }

});

/*search end*/


$('.carousel.carousel-slider').carousel({full_width: true});
