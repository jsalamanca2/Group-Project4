 $(document).ready(function(){
	 
	 displayMoods();
	 
	 // Create Mood object that holds the properties of each mood
	 // ==================================================
	 var moodObj = {
	 	"moods" : [
	 		{
	 			"mood" : "Happy",
				"genre" : "comedy",
	 			"thumbnail" : "assets/images/happy.jpg",
	 			
	 		},
	 		{
	 			"mood" : "Kickass",
				"genre": "action",
	 			"thumbnail" : "assets/images/nostalgic.jpg",
	 		}
	 	]
	 }
	 
	 // Display mood on the home page
	 // ==================================================
	 function displayMoods() {
	 	
		//Iterating through each mood
		 $.each(moodObj.moods, function (key, value) {
			 var thumb = $('img');
			 thumb.addClass('moodThumb');
			 thumb.attr(key.mood, value.mood);
			 thumb.attr('src', 'value.thumbnail');
			 $('#carousel').append(thumb);
		 });
	 }
	 
	 


});