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
var favoritemovies = [{
  id: 'fasdfjakso4823904289',
  
  favorite: true;
},
{
  id: 'fasdfjakso4823904289',
  favorite: true;
}
]

localStorage.setItem('favoriteMovies',favoritemovies);
var getmovies = localStorage.getItem('favoritemovies');



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
$('.carousel.carousel-slider').carousel({full_width: true});
