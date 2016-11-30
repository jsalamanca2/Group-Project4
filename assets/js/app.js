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
            console.log(query);
            var movies = response.results;
            for (var i=0; i < 15; i++) {
                var card = $('<div>');
                card.attr({
                    'class': 'card-medium col s3'
                });
                var movieCard = $('<img>');
                movieCard.attr({
                   'class': 'activator',
                    'src' : 'https://image.tmdb.org/t/p/w300' + movies[i].poster_path
                });
                $('.main-section').append(movieCard);
                movieCard.wrap("<div class='card-medium col s4'></div>");
                movieCard.wrap("<div class='card-image waves-effect waves-block waves-light'></div>");

            }


        });
    };


    getGenres();




});
/*DEADPOOL*/
var $poster = $('#card-container'),
  $shine = $('.shine'),
  w = $(window).width(),
  h = $(window).height();

$(window).on('mousemove', function(e) {
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
  $shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(0,0,0,' + (e.pageY / h /5)  + ') 0%,rgba(0,0,0,.25) 80%)');

  $poster.css('transform', transformPoster);
});

$(".collection-item").on("click", function() {
    $(".mainContent").empty();

});
/*DEADPOOL END*/