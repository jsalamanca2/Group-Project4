$(document).ready(function (){
	 
	 //Global variables
	 var moods = [];
	 
	 // Mood object function that holds the properties of each mood
	 // =========================================================
	 
	 function Mood (name, genre, thumbURL, movieID) {
		 this.moodName = name;							    //this.moodName sets the moodName within this function to the argument
		 this.genre = genre;
		 this.thumbnail = thumbURL;
		 this.movieID = movieID;

		 		 
		 //Method to display a mood's thumbnail
		 this.displayMood = function() {
			 var moodThumb = $('<img>');					//Create the a new image object
			 moodThumb.attr('src',this.thumbnail);			//Set the src attribute of the image to the thumbnail URL
			 moodThumb.attr('data-caption', this.genre);
			 moodThumb.attr('movieID', this.movieID);
			  //Set the data-caption attribute to the name of the object
			 $('#moodRow').append(moodThumb);
			moodThumb.wrap("<div class='col s4 mood' id='"+this.moodName+"'>"); 
			 			//Append image to the page
			 
			 //Call moodClicked function when thumbnail is clicked
			moodThumb.on('click', moodClicked);
		 }
	 }
	 
	 //=============Add Mood Objects function========================
	 function addMood(moodName, genre, thumbnail, movieID) {
		 moods[moods.length] = new Mood();					//Assign a new Mood object to the end of the moods array
		 moods[moods.length-1].moodName = moodName;			//Set the properties of the new Mood object as follows
		 moods[moods.length-1].genre = genre;
		 moods[moods.length-1].thumbnail = thumbnail;
		 moods[moods.length-1].movieID = movieID;
		 moods[moods.length - 1].displayMood();				//Call the displayMood method to show the thumbnail image of the object
	 }
	 
	 
	 //==============Please Add and displaying moods here=============
	 addMood('happy', 'comedy', 'assets/images/happy.jpg', '35');
	 addMood('adventure', 'adventure', 'assets/images/adventurous.jpg', '12');
	 addMood('Giddy', 'animated', 'assets/images/animated.jpg', '16');
	 addMood('Dreamy', 'fantasy', 'assets/images/dream.jpg', '14');
	 addMood('Kickass', 'action', 'assets/images/kickass.jpg', '28');
	 addMood('Weird', 'scifi', 'assets/images/weird.jpg', '878');
	 addMood('Smartypants', 'documentary', 'assets/images/smart.jpg', '99');
	 addMood('Thriller', 'thriller', 'assets/images/thriller.jpg', '53');
	 addMood('Nostalgic', 'classic', 'assets/images/nostalgic.jpg', '36');
	 addMood('Horror', 'horror', 'assets/images/killer.png', '27');
	 addMood('Dancey', 'musical', 'assets/images/dancey.jpg', '10402');
	 addMood('Drama', 'drama', 'assets/images/drama.jpg', '18');
	 
	 //============= Victoria's Turn :-) ============
	 function moodClicked() {
		 console.log("clicked " + $(this).attr('data-caption'));  //Alert the name of the iamge
		 
		 //========= Call API using the genre clicked ================
		 var genre = $(this).attr('data-caption');
		 var api = "https://api.themoviedb.org/3/";
		 var query = "discover/movie?with_genres=16&sort_by=vote_average.desc&vote_count.gte=10";
		 var key = "&api_key=eb647f33ee48de066d1350aae8b20bc7";
		 var url = api+query+key;
		 console.log(url)
		 $.ajax({url: url, method: 'GET'}).done(function(response) {
		 	console.log(response)
		 	var movies = response.results;
		 	console.log(movies);

		 	for (var i = 0; i < 3; i++){
		 		if(movies[i].original_language == "en"){
		 			moviesdbid = movies[i].id;

		 			$.ajax({url: "https://api-public.guidebox.com/v1.43/US/KtvA54RB1hxQ6lToZTRuPEfyrFPIX0/search/movie/id/themoviedb/"+moviesdbid,
		 					method: 'get'}).done(function(guidebox){
		 						console.log(guidebox);
		 					});
		 			console.log(movies[i].id);
		 		}
		 	}
		 });
		
    }


});



function Movie (title, genre, actors,plot, poster, stream) {
	this.movieTitle = title;
	this.movieGenre = genre;
	this.movieActors = actors
	this.moviePlot = plot;
	this.moviePoster = poster;
	this.movieStream = stream;


}


// test commit comment

var movie1 = new Movie()

 var movieAddOn = addOn
 addOn = $("#posterDiv")
 addOn.append("<p>" + movie.Title + "</p>");
 addOn.append("<p>" + movie.Genre + "</p>");
 addOn.append("<p>" + movie.Actors + "</p>");
 addOn.append("<p>" + movie.Plot + "</p>");
 addOn.append("<p>" + movie.Poster + "</p>")

 //poster_path - movie poster

 //var data-title = comedy
 //$("#dancey").first().data(comedy);



 //$('.img')on.('click', happenOnClick);




//details 
//<li class="details">
//<button>details</button>
//<ul class="trailer">Trailer:</ul>
//<ul>Plot:</ul>
//<ul>Stream:</ul>

/*
.trailer{
	display:none;
}

$('.details').on('click', 'button', function(){
	$(this).closest('details').find('.trailer').slideDown();
})