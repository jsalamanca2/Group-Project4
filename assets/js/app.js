 $(document).ready(function(){
	 
	 console.log('works');
	 // Create Mood object that holds the properties of each mood
	 // ==================================================
	 var moodObj = {
	 	"moods" : [
	 		{
	 			"mood" : "Happy",
				"genre" : "Roulette"
	 			"thumbnail" : "assets/images/happy.jpg",
	 			
	 		},
	 		{
	 			"mood" : "Cry Your Heart Out",
				"genre": "Drama"
	 			"thumbnail" : "assets/images/cry.jpg",
	 		}
	 	]
	 }
	 
	 // Display mood on the home page
	 // ==================================================
	 function diplayMoods() {
	 	
		//Iterating through each mood
		 $.each(moodObj.moods, function (key, value) {
			 var thumb = $('img');
			 thumb.addClass('moodThumb');
			 thumb.attr(key.mood, value.mood);
			 thumb.attr('src', 'value.thumbnail');
			 $('#carousel').append(thumb);
		 });
	 }
	 
	 displayMoods();


});