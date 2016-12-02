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
                console.log(movies[i]);
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
                cardContent.html(movies[i].original_title);

                // 3. Create card reveal section


                // 4. Append image to mainContent
                $('.mainContent').append(movieImg);

                // 5. Wrap image with card-medium class
                movieImg.wrap("<div class='card-medium col s3'></div>");

                // 6. Wrap image with again with waves class
                movieImg.wrap("<div class='card-image waves-effect waves-block waves-light'></div>");

                //$("'#"+movies[i].id+"'").add(cardContent);
                movieImg.parent().after(cardContent);
                cardContent.wrap("<div class='card-content'></div>");
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

$('.carousel.carousel-slider').carousel({full_width: true});
