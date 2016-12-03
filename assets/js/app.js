$( document ).ready(function () {

    var moodClicked = function() {
        $('.main-section').empty();
        getMovies($(this).attr('data'));
    }

    var getMovieDetail = function (movieID) {
        var query = "https://api.themoviedb.org/3/movie/" + movieID +
            "?api_key=79cb508f9122735b0a8e6fbc7d17e61b&language=en-US";

        $.ajax({
            url: query,
            method: 'GET'
        }).done( function(response) {
            return response.imdb_id;
        });
    };

    var showMovieDetails = function() {
        var movieID = $(this).attr('data');
        var query = "https://api.themoviedb.org/3/movie/" + movieID +
            "?api_key=79cb508f9122735b0a8e6fbc7d17e61b&language=en-US";

        $.ajax({
            url: query,
            method: 'GET'
        }).done( function(response) {
            console.log(response.imdb_id);
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
            for (var i=0; i < 8; i++) {
                //console.log(movies[i]);
                // 1. Create image element
                var movieImg = $('<img>');
                movieImg.attr({
                    'class': 'activator',
                    'src': 'https://image.tmdb.org/t/p/w185' + movies[i].poster_path
                });

                // 2. Create card content
                var cardContent = $('<span>');
                cardContent.attr({
                    'class' : 'card-title activator grey-text text-darken-4',
                    'id' : movies[i].id
                });
                cardContent.wrapInner("<i class='material-icons right'>more_vert</i>");
                var title = $('<span>');
                title.attr({
                    'class' : 'title',
                    'data' : movies[i].id
                });
                cardContent.html(title.text(movies[i].original_title));

                // 3. Create card reveal section
                var cardReveal = $('<span>');
                cardReveal.attr({
                    'class' : 'card-title grey-text text-darken-4 gridMovie'
                });
                cardReveal.wrapInner("<i class='material-icons right'>close</i>");
                cardReveal.html(movies[i].original_title);


                // 4. Append image to mainContent
                $('.mainContent').append(movieImg);

                // 5. Wrap image with card-medium class
                movieImg.wrap("<div class='card col s3'></div>");

                // 6. Wrap image with again with waves class
                movieImg.wrap("<div class='card-image waves-effect waves-block waves-light'></div>");

                movieImg.parent().after(cardContent);
                title.on('click', showMovieDetails);
                cardContent.wrap("<div class='card-content'></div>");
                cardContent.parent().after(cardReveal);
                cardReveal.wrap("<div class='card-reveal'></div>");
            }

        });
    };



    getMovieDetail(259316);

    //getGenres();
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
    $(".mainContent").children().slideUp({duration: 1500});
    //$(".mainContent").empty();
    //Materialize.showStaggerecdList('#staggered-test')
    getMovies($(this).attr('data'));
});

});
/*DEADPOOL END*/
// var favoritemovies = [{
//   id: 'fasdfjakso4823904289',
  
//   favorite: true;
// },
// {
//   id: 'fasdfjakso4823904289',
//   favorite: true;
// }
// ]

// localStorage.setItem('favoriteMovies',favoritemovies);
// var getmovies = localStorage.getItem('favoritemovies');



$(".favorite-btn").on("click",function(){
  var e = $(this);
  
  if(!e.hasClass("active")) {
    e.removeClass("inactive");
    e.addClass("active");
    
    console.log('active');
  } else {
     e.removeClass("active");
    e.addClass("inactive");
    console.log('not');
  }
  
});

/*search*/
$(document).keypress(function(event) {
   var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        //$('#search').click();
        $('.mainContent').empty();


        var movie = $('#search').val();

        // Here we assemble our URL 
        if (movie != null) {
            var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&genre=drama&r=json";


        //------
        $.ajax({url: queryURL, method:"Get"}).done(function(response){
            console.log(queryURL)
            //$(".mainContent").text(JSON.stringify(response));
            // Creates a generic div to hold the movies for now
            var movieDiv = $('<div class="movieSearch">');
            //Poster Image of movie
            var image = $('<img class="searchImg">').attr("src", response.Poster);
            movieDiv.append(image);
            
            // Retrieves the release year
            var released = response.Released;
            var pTwo = $('<p>').text( "Released: " + released);
            movieDiv.append(pTwo);
            // Retrieves the plot
            var plot = response.Plot;
            var pThree = $('<p>').text( "About: " + plot);
            movieDiv.append(pThree);
            // Retrieves Awards of Movie
            var awards = response.Awards;
            var pFour = $('<p>').text("Awards: " + awards);
            movieDiv.append(pFour);
            // Retrieves the IMDB rating
            var votes = response.imdbRating;
            var pFive = $('<p>').text("IMDB Rating: " + votes);
            movieDiv.append(pFive);
            //Rating of movie
            var rating = response.Rated;
            var pOne = $('<p>').text( "Rating: " + rating);
            movieDiv.append(pOne);
            // Puts the entire Movie above the previous movies.
            $('.mainContent').prepend(movieDiv);

        });
           
       }
        else {
            //NOT SURE IF THIS is gonna work or im doing it wrong.
           // <!-- Modal Trigger -->
            $('#modal1').modal('open');
        }
        
        

        return false;
    }

});

/*search end*/


$('.carousel.carousel-slider').carousel({full_width: true});
